
import sinon from 'sinon';

import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * @method Events.on
 * @signature Events.on(htmlElement[s], eventName, functionHandler);
 *
 * Events.on adds an event listener on the dom elements passed as parameter.
 * When the event is fired the callback is executed with the element as context (this),
 * and receive the event object as parameter, [ON01].
 *
 * When the event occurs on a disabled element, it does not have any effect, [ON02].
 *
 * If the event handler function was bound than the context of execution is the one provided at binding time;
 * in case the binding was made also on arguments, then the event object is the last of the arguments, [ON03].
 */

import Events from 'index.js';


QUnit.module('dom-events.js', {
    beforeEach: function() {
        const fakeDOM = '\
            <button id="btn">\
                <span class="icon">★</span>\
                <span class="text">Click here</span>\
            </button>';

        setup(fakeDOM);
        this.el = document.getElementById('btn');
    },
    afterEach: function() {}
});


QUnit.test('[ON01] add event listener', function(assert) {
    const spy = sinon.spy();

    Events.on(this.el, 'click', spy);
    trigger(this.el, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, this.el);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[ON02] listener on disabled element', function(assert) {
    this.el.disabled = true;

    const spy = sinon.spy();
    Events.on(this.el, 'click', spy);
    trigger(this.el, 'click');

    sinon.assert.notCalled(spy);
    assert.expect(0);
});


QUnit.test('[ON03] add bound event listener', function(assert) {
    const fakeContext = { val: 42 };
    const spy = sinon.spy();

    Events.on(this.el, 'click', spy.bind(fakeContext, 'hello', 'world'));
    trigger(this.el, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, fakeContext);

    const call = spy.getCall(0);

    assert.eventObject(call.args.pop());
    assert.equal(call.args.join(' '), 'hello world');
});