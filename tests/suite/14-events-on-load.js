
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';

/**
 * Events
 * Events.on: Test load event
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <div id="img-box">\
                <img src="https://pbs.twimg.com/profile_images/3278770524/65f8d054943bedc5bf4d8faf89a5eb7a_400x400.jpeg"/>\
            </div>';

        setup(fakeDOM);

        this.box = $$('#img-box')[0];
        this.img = $$('#img-box img')[0];
    }
});


// load does not bubble up
QUnit.test('[LD01] load', function(assert) {
    const img = this.img;
    const done = assert.async();

    Events.on(img, 'load', function(event){
        assert.ok(this === img);
        assert.eventObject(event);
        done();
    });
});


QUnit.test('[LD02] trigger load', function(assert) {
    const spy = sinon.spy();

    Events.on(this.img, 'load', spy);
    Events.fire(this.img, 'load');

    sinon.assert.calledOnce(spy);
    assert.expect(0);
});


QUnit.test('[LD03] trigger delegate-load', function(assert) {
    const spy = sinon.spy();
    const box = this.box;

    Events.on(box, 'load', 'img', spy);
    Events.fire(this.img, 'load');

    sinon.assert.notCalled(spy);
    assert.expect(0);
});
