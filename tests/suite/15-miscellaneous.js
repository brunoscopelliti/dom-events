
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.js: miscellaneous test
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events');


QUnit.test('[MI01] click on checkbox', function(assert) {
    setup('<input type="checkbox" value="pizza" id="cb" />');

    const spy = sinon.spy();
    const el = $$('#cb');

    Events.on(el, 'click', spy);
    trigger(el, 'click');

    sinon.assert.calledOnce(spy);
    assert.ok($$('#cb')[0].checked);
});
