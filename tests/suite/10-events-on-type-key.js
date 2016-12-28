
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.on: Test keyboard related events
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';

QUnit.module('dom-events.js', {
    beforeEach: function() {
        setup('<input id="username" />');
        this.field = $$('#username')[0];
    },
    afterEach: function() {
        Events.off(document);
    }
});


['keyup', 'keydown', 'keypress'].forEach(function(eventName, i) {
    QUnit.test('[KEY'+(i+1)+'] '+eventName, function(assert) {
        const spy = sinon.spy();

        Events.on(document, eventName, spy);
        trigger(document, eventName);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledOn(spy, document);
        assert.expect(0);
    });

    QUnit.test('[KEY'+(i+2)+'] delegate '+eventName, function(assert) {
        const spy = sinon.spy();

        Events.on(document, eventName, '#username', spy);
        trigger(this.field, eventName);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledOn(spy, this.field);
        assert.expect(0);
    });
});
