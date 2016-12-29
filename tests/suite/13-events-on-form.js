
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.on: Test events registered on form / form's field
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <form id="empty-form" action="#noop">\
                <button type="submit">Send</button>\
            </form>\
            <form id="form" action="#route">\
                <fieldset>\
                    <label for="username">Set username:</label>\
                    <input type="text" id="username" />\
                </fieldset>\
                <fieldset>\
                    <label for="password">Set password:</label>\
                    <input type="password" id="password" />\
                </fieldset>\
                <fieldset>\
                    <p>Pick the gender</p>\
                    <input type="radio" name="gender" id="male" value="M" checked/>\
                    <label for="male">man</label>\
                    <input type="radio" name="gender" id="female" value="W"/>\
                    <label for="female">woman</label>\
                </fieldset>\
                <button type="submit">Send</button>\
            </form>';

        setup(fakeDOM);

        this.emptyForm = $$('#empty-form')[0];
        this.submitBtn = $$('#empty-form button[type="submit"]')[0];

        this.form = $$('#form')[0];
    },
    afterEach: function() {
        Events.off(window);
        Events.off(document);
        window.addListenerSpy.reset();
        window.delListenerSpy.reset();
    }
});


QUnit.test('[FRM1] submit', function(assert) {
    const spy = sinon.spy();

    Events.on(this.emptyForm, 'submit', function(evt){ spy.call(this, evt); return false; });

    trigger(this.emptyForm, 'submit');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.emptyForm);
    assert.eventObject(spy.getCall(0).args[0]);
});


QUnit.test('[FRM2] delegate submit', function(assert) {
    const spy = sinon.spy();
    const parent = $$('#test-container');

    Events.on(parent, 'submit', '#empty-form', function(evt){ spy.call(this, evt); return false; });

    trigger(this.emptyForm, 'submit');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.emptyForm);
    assert.eventObject(spy.getCall(0).args[0]);
});


QUnit.test('[FRM3] change', function(assert) {
    const spy = sinon.spy();
    const radios = $$('input[name="gender"]');
    const womanRadio = $$('input[name="gender"][value="W"]');

    Events.on(radios, 'change', spy);

    trigger(womanRadio, 'change');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, womanRadio[0]);
    assert.eventObject(spy.getCall(0).args[0]);
});


QUnit.test('[FRM4] delegate change', function(assert) {
    const spy = sinon.spy();
    const womanRadio = $$('input[name="gender"][value="W"]');

    Events.on(this.form, 'change', 'input[name="gender"]', spy);

    trigger(womanRadio, 'change');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, womanRadio[0]);
    assert.eventObject(spy.getCall(0).args[0]);
});


// skip [FRM5] to [FRM8]
// cause when launched headless fail on Firefox, and make the build fail

QUnit.skip('[FRM5] focus', function(assert) {
    const spy = sinon.spy();
    const username = $$('#username');

    Events.on(username, 'focus', spy);

    trigger(username, 'focus');
    sinon.assert.calledOnce(spy);

    assert.expect(0);
});


QUnit.skip('[FRM6] blur', function(assert) {
    const spy = sinon.spy();
    const username = $$('#username');

    Events.on(username, 'blur', spy);

    trigger(username, 'focus');
    trigger(username, 'blur');

    sinon.assert.calledOnce(spy);

    assert.expect(0);
});


/**
 * Focus & Blur do not bubble up
 * In order to simulate the bubbling we listen for the focusin/focusout
 * on the document, during the capture phase, then we use Store.run to simulate the bubbling
 */

QUnit.skip('[FRM7] delegate focus/blur', function(assert) {
    const spy = sinon.spy();
    const username = $$('#username');

    Events.on(this.form, 'focus', 'input[type="text"]', spy);

    trigger(username, 'focus');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, username[0]);
    assert.eventObject(spy.getCall(0).args[0]);

    spy.reset();

    Events.on(this.form, 'blur', 'input[type="text"]', spy);

    trigger(username, 'blur');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, username[0]);
    assert.eventObject(spy.getCall(0).args[0]);
});


QUnit.skip('[FRM8] delegate focus multiple times', function(assert) {
    const spy = sinon.spy();
    const addDocListenerSpy = window.addListenerSpy;

    const password = $$('#password');

    Events.on(this.form, 'focus', 'input[type="text"]', spy);
    Events.on(document.body, 'focus', 'input[type="password"]', spy);

    sinon.assert.calledOnce(addDocListenerSpy);

    trigger(password, 'focus');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, password[0]);
    assert.eventObject(spy.getCall(0).args[0]);

    addDocListenerSpy.restore();
});


QUnit.test('[FRM9] remove focus/blur', function(assert) {
    const spy = sinon.spy();
    const delDocListenerSpy = window.delListenerSpy;

    const username = $$('#username');

    Events.on(this.form, 'focus', 'input[type="text"]', spy);
    Events.on(this.form, 'blur', 'input[type="text"]', spy);

    Events.off(this.form, 'focus');

    sinon.assert.calledOnce(delDocListenerSpy);

    trigger(username, 'focus');
    sinon.assert.notCalled(spy);

    delDocListenerSpy.reset();

    Events.off(this.form, 'blur');
    sinon.assert.calledOnce(delDocListenerSpy);

    assert.emptyObject(Events.debug(document));

    delDocListenerSpy.restore();
});
