
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * @method Events.on, delegate events
 * @signature Events.on(htmlElement, eventName, delegatorSelector, functionHandler);
 *
 * Events.on add an event listener on the dom element passed as parameter,
 * that is a delegate for the event fired on the elements matching the "delegatorSelector" selector.
 *
 * Event handler is executed both when the evt.target == delegatorSelector element ([DEL1]),
 * both when evt.target is inside the target ([DEL2]).
 * If multiple matching targets are found during the bubbling, the event handler is executed multiple times,
 * each time with the matching target as context (this), [DEL5].
 *
 * Events which occurs on disabled delegators do not have effect, [DEL4].
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <ul id="list" class="list-level-1">\
                <li id="matchingEl" class="entry level-1">\
                    <div>\
                        <span>More opportunities</span>\
                        <ul id="countries" class="list-level-2">\
                            <li id="clickedEl" class="entry level-2 country it">\
                                <span>Italy</span>\
                            </li>\
                            <li class="entry level-2 country us">\
                                <span>USA</span>\
                            </li>\
                        </ul>\
                    </div>\
                </li>\
                <li id="btn-row" class="entry level-1">\
                    <span>Click the button</span>\
                    <div id="child">\
                        <button id="btn" disabled>\
                            <span>Click here</span>\
                        </button>\
                    </div>\
                </li>\
            </ul>\
            <p id="colophon">If not enough click\
                <a href="#def" id="matched-link" class="link">\
                    <span id="clicked-link" class="link">here</span>\
                </a>\
            </p>';

        setup(fakeDOM);
    }
});


QUnit.test('[DEL1] evt.target == delegator', function(assert) {
    const spy = sinon.spy();
    const boundEl = $$('#countries');
    const clickedEl = $$('#countries .it')[0];

    Events.on(boundEl, 'click', '.country', spy);
    trigger(clickedEl, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, clickedEl);

    const call = spy.getCall(0);

    assert.eventObject(call.args[0]);
});


QUnit.test('[DEL2] evt.target is inside the delegator', function(assert) {
    const spy = sinon.spy();
    const boundEl = $$('#countries');
    const clickedEl = $$('#countries .it span');
    const delegatorEl = $$('#countries .country.it')[0];

    Events.on(boundEl, 'click', '.country', spy);
    trigger(clickedEl, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, delegatorEl);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);
});


QUnit.test('[DEL3] delegate event listener on the document', function(assert) {
    const spy = sinon.spy();
    const clickedEl = $$('#countries .it')[0];

    Events.on(document, 'click', '.country', spy);
    trigger(clickedEl, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, clickedEl);

    const call = spy.getCall(0);
    assert.eventObject(call.args[0]);

    Events.off(document);
});


// @bug https://bugzilla.mozilla.org/show_bug.cgi?id=218093
// @description if the target is contained by a disabled element, the event in Firefox does not bubble up
// @demo http://codepen.io/brunoscopelliti/pen/dYGbWz
QUnit.skip('[DEL4] delegator is disabled', function(assert) {
    const spyBtn = sinon.spy();
    const spyChild = sinon.spy();
    const boundEl = $$('#btn-row');
    const clickedEl = $$('#btn span');

    Events.on(boundEl, 'click', '#child', spyChild);
    Events.on(boundEl, 'click', '#btn', spyBtn);

    trigger(clickedEl, 'click');

    sinon.assert.notCalled(spyBtn);
    sinon.assert.calledOnce(spyChild);
    assert.expect(0);
});


QUnit.test('[DEL5] multiple matching', function(assert) {
    const spy = sinon.spy();
    const boundEl = $$('#list');
    const clickedEl = $$('#clickedEl')[0];
    const matchingEl = $$('#matchingEl')[0];

    Events.on(boundEl, 'click', '.entry', spy);
    trigger(clickedEl, 'click');

    sinon.assert.calledTwice(spy);

    const call1 = spy.getCall(0);
    sinon.assert.calledOn(call1, clickedEl);
    assert.eventObject(call1.args[0]);

    const call2 = spy.getCall(1);
    sinon.assert.calledOn(call2, matchingEl);
    assert.eventObject(call2.args[0]);
});


QUnit.test('[DEL6] multiple matching and default action', function(assert) {
    const spy = sinon.spy();
    const boundEl = $$('#colophon');
    const clickedEl = $$('#clicked-link')[0];
    const matchingEl = $$('#matched-link')[0];
    const done = assert.async();

    Events.on(boundEl, 'click', '.link', spy);
    trigger(clickedEl, 'click');

    setTimeout(function() {

        sinon.assert.calledTwice(spy);
        assert.equal(location.href, matchingEl.href);

        const call1 = spy.getCall(0);
        sinon.assert.calledOn(call1, clickedEl);
        assert.eventObject(call1.args[0]);

        const call2 = spy.getCall(1);
        sinon.assert.calledOn(call2, matchingEl);
        assert.eventObject(call2.args[0]);

        location.hash = '';

        done();
    }, 0);
});
