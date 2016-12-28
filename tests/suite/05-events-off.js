
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * @method Events.off
 * @signature Events.off(htmlElement[s] [, eventName] [, delegator] [, functionHandler]);
 *
 * Events.off removes an event listener from one (or more) html elements.
 */

import Events from 'index.js';

QUnit.module('dom-events.js', {
    beforeEach: function() {
        const fakeDOM = '\
            <input id="name" value="" />\
            <div id="box-1" class="box">\
                <button id="btn-1" data-val="hello">Say <b>hello</b></button>\
                <button id="btn-2" data-val="ciao">Say <b>ciao</b></button>\
            </div>\
            <div id="box-2" class="box">\
                <button id="btn-3" data-val="thanks">Say <b>thanks</b></button>\
                <button id="btn-4" data-val="grazie">Say <b>grazie</b></button>\
            </div>';

        setup(fakeDOM);

        this.btn1 = $$('#btn-1')[0];
        this.btn2 = $$('#btn-2')[0];
        this.btn3 = $$('#btn-3')[0];
        this.btn4 = $$('#btn-4')[0];
    },
    afterEach: function() {}
});


QUnit.test('[OF01] remove all types of listeners', function(assert) {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();
    const spy3 = sinon.spy();

    Events.on(this.btn1, 'mouseover', spy1);
    Events.on(this.btn1, 'mouseout', spy2);
    Events.on(this.btn1, 'mouseenter', 'b', spy3);

    Events.off(this.btn1);

    trigger(this.btn1, 'mouseover');
    sinon.assert.notCalled(spy1);

    trigger(this.btn1, 'mouseout');
    sinon.assert.notCalled(spy2);

    trigger(this.btn1.querySelector('b'), 'mouseenter');
    sinon.assert.notCalled(spy3);

    assert.emptyObject(Events.debug(this.btn1));
});


QUnit.test('[OF02] remove all types of listeners from document', function(assert) {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();

    Events.on(document, 'click', 'body', spy1);
    Events.on(document, 'keyup', spy2);

    Events.off(document);

    assert.emptyObject(Events.debug(document));
});


QUnit.test('[OF03] remove all listeners of specific type', function(assert) {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();

    Events.on(this.btn1, 'click', spy1);
    Events.on(this.btn1, 'click', spy2);

    Events.off(this.btn1, 'click');
    trigger(this.btn1, 'click');

    sinon.assert.notCalled(spy1);
    sinon.assert.notCalled(spy2);
    assert.expect(0);
});


QUnit.test('[OF04] remove listener from all elements', function(assert) {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();

    const buttons = $$('button');

    Events.on(this.btn1, 'click', spy1);
    Events.on(this.btn1, 'mouseover', spy1);
    Events.on(this.btn2, 'click', spy2);

    Events.off(buttons, 'click');

    trigger(buttons, 'click');

    sinon.assert.notCalled(spy1);
    sinon.assert.notCalled(spy2);

    trigger(this.btn1, 'mouseover');

    sinon.assert.calledOnce(spy1);

    assert.expect(0);
});


QUnit.test('[OF05] remove listener by delegator', function(assert) {
    const spy = sinon.spy();
    const box = $$('#box-1');

    Events.on(box, 'click', '#btn-1', spy);
    Events.off(this.btn1, 'click', '#btn-2');

    trigger(this.btn1, 'click');
    sinon.assert.calledOnce(spy);
    spy.reset();

    Events.off(box, 'click', '#btn-1');

    trigger(this.btn1, 'click');
    sinon.assert.notCalled(spy);

    assert.expect(0);
});


QUnit.test('[OF06] remove listener by handler', function(assert) {
    const spy = sinon.spy();

    Events.on(this.btn3, 'click', spy);
    Events.off(this.btn3, 'click', sinon.spy());

    trigger(this.btn3, 'click');
    sinon.assert.calledOnce(spy);
    spy.reset();

    Events.off(this.btn3, 'click', spy);

    trigger(this.btn3, 'click');
    sinon.assert.notCalled(spy);

    assert.expect(0);
});

QUnit.test('[OF07] remove delegate handler', function(assert) {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();
    const box = $$('#test-container');

    Events.on(box, 'click', 'button', spy1);
    Events.on(this.btn3, 'click', spy2);

    trigger(this.btn1, 'click');
    trigger(this.btn3, 'click');

    sinon.assert.calledTwice(spy1);
    sinon.assert.calledOnce(spy2);
    spy1.reset();
    spy2.reset();

    Events.off(box, 'click');

    trigger(this.btn3, 'click');

    sinon.assert.notCalled(spy1);
    sinon.assert.calledOnce(spy2);

    assert.expect(0);
});
