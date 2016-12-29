
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.on: Test events registered on the global window
 *
 * * Scroll event
 *   Is fired when the document view or an element has been scrolled.
 *   It usually does not bubble, but bubbles to the default view when fired on the document.
 * 
 * * Resize event
 *   The resize event is fired when the document view has been resized.
 *   It does not bubble.
 * 
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <div id="high-box" style="height: 5000px;">Hello, I am pretty high...</div>\
            <div id="high-with-child" style="height: 300px;">\
                <div style="height: 600px;"></div>\
            </div>';

        setup(fakeDOM);
    },
    afterEach: function() {
        Events.off(window);
    }
});


QUnit.test('[WIN1] window scroll', function(assert) {
    const spy = sinon.spy();

    Events.on(window, 'scroll', spy);
    trigger(window, 'scroll');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, window);
    assert.expect(0);
});


QUnit.test('[WIN2] element scroll', function(assert) {
    const spy = sinon.spy();
    const highbox = $$('#high-with-child');

    Events.on(highbox, 'scroll', spy);
    trigger(highbox, 'scroll');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, highbox[0]);
    assert.expect(0);
});


QUnit.test('[WIN3] window resize', function(assert) {
    const spy = sinon.spy();

    Events.on(window, 'resize', spy);
    trigger(window, 'resize');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOn(spy, window);
    assert.expect(0);
});
