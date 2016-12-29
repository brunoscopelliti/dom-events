
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.on: Test click-like events
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <div id="parent">\
                <p>Click the following button:</p>\
                <button id="child">Child button</button>\
                <a href="#hash"" id="anchor">Child link</a>\
            </div>';

        setup(fakeDOM);

        this.box = $$('#parent')[0];
        this.btn = $$('#child')[0];
    }
});


['mouseup', 'mousedown', 'dblclick'].forEach(function(eventName, i) {
    QUnit.test('[CK0'+(i+1)+'] '+eventName, function(assert) {
        const spy = sinon.spy();

        Events.on(this.btn, eventName, spy);
        trigger(this.btn, eventName);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledOn(spy, this.btn);
        assert.expect(0);
    });

    QUnit.test('[CK0'+(i+2)+'] delegate '+eventName, function(assert) {
        const spy = sinon.spy();

        Events.on(this.box, eventName, '#child', spy);
        trigger(this.btn, eventName);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledOn(spy, this.btn);
        assert.expect(0);
    });
});
