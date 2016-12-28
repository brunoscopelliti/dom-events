
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * @method Events.on
 * @signature Events.on(htmlElement, eventName, [delegatorSelector], functionHandler);
 *
 * Events are always registered to be listened in the bubble phase;
 * this means that the event handler set on the inner element
 * should be executed before other handlers on outer elements, [EP01].
 *
 * This is still true for event delegations,
 * however here more complex scenarios are possible: [EP04] to [EP07].
 *
 * In case the same element listens for both directly bound events, both delegate events,
 * the execution of the former is always postponed to the execution of the delegate handlers, [EP03].
 *
 *
 * Event propagation could be blocked from an event handler;
 * there are two ways in which event propagation can be interrupted: invoking the event.stopPropagation
 * method, [EP08], or with 'return false;' from an event handler, [EP09].
 * However both the two methods have no effect once the event has reached its target, [EP10].
 *
 *
 * Note: 'return false;' is a shortcut for event.preventDefault && event.stopPropagation, [EP09] && [EP17].
 */

import Events from 'index.js';

QUnit.module('dom-events.js', {
    beforeEach: function() {

        this.stopPropagationSpy = sinon.spy(Event.prototype, 'stopPropagation');
        this.preventDefaultSpy = sinon.spy(Event.prototype, 'preventDefault');

        const fakeDOM = '\
            <div id="parent">\
                <div id="child">\
                    <p>Click the following button:</p>\
                    <button id="btn">Child button</button>\
                </div>\
                <a href="#hash"" id="anchor">Child link</a>\
            </div>';

        setup(fakeDOM);
    },
    afterEach: function() {
        this.stopPropagationSpy.restore();
        this.preventDefaultSpy.restore();
    }
});


QUnit.test('[EP01] event bubbles up', function(assert) {
    const spyParent = sinon.spy();
    const spyChild1 = sinon.spy();
    const spyChild2 = sinon.spy();
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(child, 'click', spyChild1);
    Events.on(parent, 'click', spyParent);
    Events.on(child, 'click', spyChild2);
    trigger(child, 'click');

    sinon.assert.calledOnce(spyParent);
    sinon.assert.calledOnce(spyChild1);
    sinon.assert.calledOnce(spyChild2);
    sinon.assert.callOrder(spyChild1, spyChild2, spyParent);
    assert.expect(0);
});


QUnit.test('[EP02] bubbling vs delegation [A]', function(assert) {
    // handlers on the innermost html element are always executed before handlers on the outer elements

    const spyNoDelegate = sinon.spy();
    const spyDelegate = sinon.spy();
    const mainContainer = $$('#test-container');
    const button = $$('#parent button');

    Events.on(mainContainer, 'click', 'button', spyDelegate);
    Events.on(button, 'click', spyNoDelegate);

    trigger(button, 'click');

    sinon.assert.calledOnce(spyDelegate);
    sinon.assert.calledOnce(spyNoDelegate);
    sinon.assert.callOrder(spyNoDelegate, spyDelegate);
    assert.expect(0);
});


QUnit.test('[EP03] bubbling vs delegation [B]', function(assert) {
    // in case the same element has both a directly bound event listener, both a delegated event listener
    // the execution of the former is always postponed to the execution of the latter;
    // the delegated event listener handler could also block the event propagation, so that the
    // directly bound event listener handler is never executed (see [EP11], [EP12]).

    const spyNoDelegate = sinon.spy();
    const spyDelegate = sinon.spy();
    const mainContainer = $$('#test-container')[0];
    const button = $$('#parent button');

    Events.on(mainContainer, 'click', spyNoDelegate);
    Events.on(mainContainer, 'click', 'button', spyDelegate);

    trigger(button, 'click');

    sinon.assert.calledOnce(spyDelegate);
    sinon.assert.calledOnce(spyNoDelegate);
    sinon.assert.callOrder(spyDelegate, spyNoDelegate);
    assert.expect(0);
});


QUnit.test('[EP04] delegate handlers are executed starting from the innermost element [A]', function(assert) {
    // [A] target element is the same, bound elements are different

    const spyTestContainer = sinon.spy();
    const spyParent = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', 'button', spyTestContainer);
    Events.on(parent, 'click', 'button', spyParent);

    trigger(child, 'click');

    sinon.assert.calledOnce(spyParent);
    sinon.assert.calledOnce(spyTestContainer);
    sinon.assert.callOrder(spyParent, spyTestContainer);
    assert.expect(0);
});


QUnit.test('[EP05] delegate handlers are executed starting from the innermost element [B]', function(assert) {
    // [B] target elements are different, bound elements is the same

    const spyParent = sinon.spy();
    const spyChild = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', '#parent', spyParent);
    Events.on(mainContainer, 'click', 'button', spyChild);

    trigger(child, 'click');

    sinon.assert.calledOnce(spyParent);
    sinon.assert.calledOnce(spyChild);
    sinon.assert.callOrder(spyChild, spyParent);
    assert.expect(0);
});


QUnit.test('[EP06] delegate handlers are executed starting from the innermost element [C1]', function(assert) {
    // [C1] different bound elements, and different targets

    const spyParent = sinon.spy();
    const spyChild = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', '#parent', spyParent);
    Events.on(parent, 'click', 'button', spyChild);

    trigger(child, 'click');

    sinon.assert.calledOnce(spyParent);
    sinon.assert.calledOnce(spyChild);
    sinon.assert.callOrder(spyChild, spyParent);
    assert.expect(0);
});


QUnit.test('[EP07] delegate handlers are executed starting from the innermost element [C2]', function(assert) {
    // [C2] different bound elements, and different targets

    const spyParent = sinon.spy();
    const spyChild = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#child');
    const btn = $$('#btn');

    Events.on(mainContainer, 'click', '#btn', spyParent);
    Events.on(parent, 'click', '#child', spyChild);

    trigger(btn, 'click');

    sinon.assert.calledOnce(spyParent);
    sinon.assert.calledOnce(spyChild);
    sinon.assert.callOrder(spyChild, spyParent);
    assert.expect(0);
});



/**
 * Stop event propagation
 */

QUnit.test('[EP08] stop event propagation (with event.stopPropagation method call)', function(assert) {
    const spyParent = sinon.spy();
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(parent, 'click', spyParent);
    Events.on(child, 'click', function(evt){
        evt.stopPropagation();
    });

    trigger(child, 'click');

    sinon.assert.calledOnce(this.stopPropagationSpy);
    sinon.assert.notCalled(spyParent);
    assert.expect(0);
});


QUnit.test('[EP09] stop event propagation (with return false)', function(assert) {
    const spyChild = sinon.spy();
    const spyParent = sinon.spy();
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(parent, 'click', spyParent);
    Events.on(child, 'click', function(){ spyChild(); return false; });

    trigger(child, 'click');

    sinon.assert.calledOnce(spyChild);
    sinon.assert.notCalled(spyParent);
    assert.expect(0);
});


// It's possible to implement a jQuery style event.stopImmediatePropagation method;
// However, since until now I've never had the need to use jQuery's stopImmediatePropagation,
// I am not really interested in having this feature in dom-events.
QUnit.test('[EP10] stop event propagation has no effect once the event has reached its target', function(assert) {
    const spyOne = sinon.spy();
    const spyTwo = sinon.spy();
    const spyThree = sinon.spy();
    const child = $$('#parent button');

    Events.on(child, 'click', function(evt) { spyOne(); evt.stopPropagation(); });
    Events.on(child, 'click', function() { spyTwo(); return false; });
    Events.on(child, 'click', spyThree);

    trigger(child, 'click');

    sinon.assert.calledOnce(spyOne);
    sinon.assert.calledOnce(spyTwo);
    sinon.assert.calledOnce(spyThree);
    sinon.assert.callOrder(spyOne, spyTwo, spyThree);
    assert.expect(0);
});


QUnit.test('[EP11] delegate handler stops propagation (with event.stopPropagation)', function(assert) {
    // in this case there are both a delegate listener, both a directly bound event listener
    // on the same html element
    // check [EP03] for further info

    const spyDirect = sinon.spy();
    const mainContainer = $$('#test-container')[0];
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', spyDirect);
    Events.on(mainContainer, 'click', 'button', function(e) {e.stopPropagation(); });

    trigger(child, 'click');

    sinon.assert.calledOnce(this.stopPropagationSpy);
    sinon.assert.notCalled(spyDirect);
    assert.expect(0);
});


QUnit.test('[EP12] delegate handler stops propagation (with return false)', function(assert) {
    // in this case there are both a delegate listener, both a directly bound event listener
    // on the same html element
    // check [EP03] for further info

    const spyDirect = sinon.spy();
    const mainContainer = $$('#test-container')[0];
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', spyDirect);
    Events.on(mainContainer, 'click', 'button', function() { return false; });

    trigger(child, 'click');

    sinon.assert.notCalled(spyDirect);
    assert.expect(0);
});


QUnit.test('[EP13] delegate handler stops propagation (with event.stopPropagation)', function(assert) {
    // in this case the delegate listener, and the directly bound event listener
    // are on different dom elements
    // check [EP03] for further info

    const spyNoDelegate = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', spyNoDelegate);
    Events.on(parent, 'click', 'button', function(evt) { evt.stopPropagation(); });

    trigger(child, 'click');

    sinon.assert.calledOnce(this.stopPropagationSpy);
    sinon.assert.notCalled(spyNoDelegate);
    assert.expect(0);
});


QUnit.test('[EP14] delegate handler stops propagation (with return false)', function(assert) {
    // in this case the delegate listener, and the directly bound event listener
    // are on different dom elements
    // check [EP03] for further info

    const spyNoDelegate = sinon.spy();
    const mainContainer = $$('#test-container');
    const parent = $$('#parent');
    const child = $$('#parent button');

    Events.on(mainContainer, 'click', spyNoDelegate);
    Events.on(parent, 'click', 'button', function() { return false; });

    trigger(child, 'click');

    sinon.assert.notCalled(spyNoDelegate);
    assert.expect(0);
});



/**
 * Prevent default action
 */

QUnit.test('[EP15] prevent default (with event.preventDefault)', function(assert) {
    const currentHash = location.hash;
    const link = $$('#anchor');

    Events.on(link, 'click', function(evt){ evt.preventDefault(); });
    trigger(link, 'click');

    sinon.assert.calledOnce(this.preventDefaultSpy);
    assert.equal(location.hash, currentHash);
});


QUnit.test('[EP16] delegate handler prevent default (with event.preventDefault)', function(assert) {
    const currentHash = location.hash;
    const parent = $$('#parent');
    const link = $$('#anchor');

    Events.on(parent, 'click', '#anchor', function(evt){ evt.preventDefault(); });
    trigger(link, 'click');

    sinon.assert.calledOnce(this.preventDefaultSpy);
    assert.equal(location.hash, currentHash);
});


QUnit.test('[EP17] prevent default (with return false)', function(assert) {
    const currentHash = location.hash;
    const link = $$('#anchor');

    Events.on(link, 'click', function(){ return false; });
    trigger(link, 'click');

    assert.equal(location.hash, currentHash);
});


QUnit.test('[EP18] delegate prevent default (with return false)', function(assert) {
    const currentHash = location.hash;
    const parent = $$('#parent');
    const link = $$('#anchor');

    Events.on(parent, 'click', '#anchor', function(){ return false; });
    trigger(link, 'click');

    assert.equal(location.hash, currentHash);
});