
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * @method Events.fire
 * @signature Events.fire(htmlElement[s], eventName, ...data);
 *
 * Events.fire simulates the triggering of a particular event, on the elements .
 * It executes the handlers attached on the elements,
 * and simulate the bubbling of the event, on their parents.
 *
 * It's possible to specify additional parameters that the event handler
 * should receive when is executed.
 */

import Events from 'index.js';

QUnit.module('dom-events.js', {
    beforeEach: function() {
        const fakeDOM = '\
            <form id="form" action="#route">\
                <p>Hi <input id="username"/>, Pick the gender</p>\
                <input type="radio" name="gender" id="male" value="M" checked/>\
                <label for="male">man</label>\
                <input type="radio" name="gender" id="female" value="W"/>\
                <label for="female">woman</label>\
                <button type="submit">Send</button>\
            </form>\
            <div id="outer-box" class="box">\
                <button id="a-btn">Click <b>here</b></button>\
                <a id="a-link" href="#a-real-route">Click here perhaps</a>\
            </div>';

        setup(fakeDOM);

        this.form = $$('#form')[0];
        this.username = $$('#username')[0];
        this.submitBtn = $$('#form button[type="submit"]')[0];

        this.box = $$('#outer-box')[0];
        this.btn = $$('#a-btn')[0];
        this.link = $$('#a-link')[0];
    },
    afterEach: function() {
        location.hash = '';
    }
});


QUnit.test('[FI01] fire event', function(assert) {
    const spy = sinon.spy();

    Events.on(this.btn, 'click', spy);
    Events.fire(this.btn, 'click', 'hello', 'world');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.btn);

    const call = spy.getCall(0);

    assert.eventObject(call.args.shift());
    assert.equal(call.args.join(' '), 'hello world');
});


QUnit.test('[FI02] fire delegate event', function(assert) {
    const spy = sinon.spy();

    Events.on(this.box, 'click', '#a-btn', spy);
    Events.fire(this.btn, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.btn);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[FI03] fire special event (mouseenter)', function(assert) {
    const spy = sinon.spy();

    Events.on(this.box, 'mouseenter', '#a-btn', spy);
    Events.fire(this.box.querySelector('#a-btn'), 'mouseenter');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.btn);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[FI04] fire special event (focus)', function(assert) {
    const spy = sinon.spy();

    Events.on(this.form, 'focus', '#username', spy);
    Events.fire(this.form.querySelector('#username'), 'focus');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.username);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});

// apparently in Firefox when the default action is executed
// does not update instantaneously
QUnit.test('[FI05] default action', function(assert) {
    const spy = sinon.spy();
    const done = assert.async();

    Events.on(this.link, 'click', spy);
    Events.fire(this.link, 'click');

    setTimeout(() => {
        sinon.assert.calledOnce(spy);
        assert.equal(window.location.href, this.link.href);
        done();
    }, 0);
});


QUnit.test('[FI06] evt.stopPropagation();', function(assert) {
    const blockedSpy = sinon.spy();
    const spy = sinon.spy();

    Events.on(this.box, 'click', blockedSpy);
    Events.on(this.btn, 'click', function(evt) { spy(); evt.stopPropagation(); });

    Events.fire(this.btn, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.notCalled(blockedSpy);
    assert.expect(0);
});


QUnit.test('[FI07] evt.preventDefault();', function(assert) {
    const spy = sinon.spy();

    Events.on(this.box, 'click', spy);
    Events.on(this.link, 'click', function(evt) { evt.preventDefault(); });

    const route = location.href;

    Events.fire(this.link, 'click');

    sinon.assert.calledOnce(spy);
    assert.equal(location.href, route);
});


QUnit.test('[FI08] return false;', function(assert) {
    const blockedSpy = sinon.spy();
    const spy = sinon.spy();

    Events.on(this.box, 'click', blockedSpy);
    Events.on(this.link, 'click', function() { spy(); return false; });

    const route = location.href;

    Events.fire(this.link, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.notCalled(blockedSpy);
    assert.equal(location.href, route);
});


QUnit.test('[FI09] handler execution blocked by delegate', function(assert) {
    const blockedSpy = sinon.spy();
    const spy = sinon.spy();

    Events.on(this.box, 'click', blockedSpy);
    Events.on(this.box, 'click', '#a-link', function() { spy(); return false; });

    const route = location.href;

    Events.fire(this.link, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.notCalled(blockedSpy);
    assert.equal(location.href, route);
});


QUnit.test('[FI10] fire collateral effect click/submit', function(assert) {
    const spy = sinon.spy();

    Events.on(this.form, 'submit', function(evt){ spy.call(this, evt); return false; });
    Events.fire(this.submitBtn, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.form);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[FI11] fire collateral effect click/delegate submit', function(assert) {
    const spy = sinon.spy();
    const parent = $$('#test-container');

    Events.on(parent, 'submit', '#form', function(evt){ spy.call(this, evt); return false; });
    Events.fire(this.submitBtn, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.form);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[FI12] fire collateral effect click/change', function(assert) {
    const spy = sinon.spy();
    const radios = $$('input[name="gender"]');
    const womanLabel = $$('label[for="female"]');
    const womanRadio = $$('input[name="gender"][value="W"]');

    Events.on(radios, 'change', spy);
    Events.fire(womanLabel, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, womanRadio[0]);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[FI13] fire collateral effect click/delegate change', function(assert) {
    const spy = sinon.spy();
    const womanLabel = $$('label[for="female"]');
    const womanRadio = $$('input[name="gender"][value="W"]');

    Events.on(this.form, 'change', 'input[name="gender"]', spy);
    Events.fire(womanLabel, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, womanRadio[0]);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});
