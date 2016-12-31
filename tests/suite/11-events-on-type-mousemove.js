
import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';

/**
 * Events
 * Events.on: Test mouse movement related events
 *
 * A good reference about the events, and their expected behaviour:
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

import Events from 'index.js';


QUnit.module('Events', {
    beforeEach: function() {
        const fakeDOM = '\
            <div id="box-outer" style="background: #ccc; width:250px; height:250px; position:relative; margin: 100px auto;">\
                <div id="box-middle" style="background: #999; width:200px; height:200px; position:absolute; top: 25px; left: 25px;">\
                    <div id="box-inner" style="background: #555; width:100px; height:100px; position:absolute; top: 50px; left: 50px;"></div>\
                </div>\
            </div>';

        setup(fakeDOM);

        this.outer = $$('#box-outer')[0];
        this.middle = $$('#box-middle')[0];
        this.inner = $$('#box-inner')[0];
    }
});


QUnit.test('[MOV1] mouse over/out', function(assert) {
    const spyOver = sinon.spy();
    const spyOut = sinon.spy();

    Events.on(this.outer, 'mouseover', spyOver);
    Events.on(this.outer, 'mouseout', spyOut);

    trigger(this.outer, 'mouseover');
    sinon.assert.calledOnce(spyOver);

    trigger(this.outer, 'mouseout');
    sinon.assert.calledOnce(spyOut);

    assert.expect(0);
});


QUnit.test('[MOV2] delegate mouse over/out', function(assert) {
    const spyOver = sinon.spy();
    const spyOut = sinon.spy();

    Events.on(this.outer, 'mouseover', '#box-inner', spyOver);
    Events.on(this.outer, 'mouseout', '#box-inner', spyOut);

    trigger(this.inner, 'mouseover');
    sinon.assert.calledOnce(spyOver);

    trigger(this.inner, 'mouseout');
    sinon.assert.calledOnce(spyOut);

    assert.expect(0);
});


QUnit.test('[MOV3] mousemove', function(assert) {
    const spyMove = sinon.spy();

    Events.on(this.outer, 'mousemove', spyMove);

    trigger(this.outer, 'mousemove');
    sinon.assert.calledOnce(spyMove);

    assert.expect(0);
});


QUnit.test('[MOV4] delegate mousemove', function(assert) {
    const spyMove = sinon.spy();

    Events.on(this.outer, 'mousemove', '#box-inner', spyMove);
    trigger(this.inner, 'mousemove');

    sinon.assert.calledOnce(spyMove);

    assert.expect(0);
});


QUnit.test('[MOV5] mouse enter/leave', function(assert) {
    const spyEnter = sinon.spy();
    const spyLeave = sinon.spy();

    Events.on(this.outer, 'mouseenter', spyEnter);
    Events.on(this.outer, 'mouseleave', spyLeave);

    trigger(this.outer, 'mouseenter');
    sinon.assert.calledOnce(spyEnter);

    trigger(this.outer, 'mouseleave');
    sinon.assert.calledOnce(spyLeave);

    assert.expect(0);
});


/**
 * Mouseenter & Mouseleave do not bubble up
 * In order to simulate the bubbling of the mouseenter/mouseleave event
 * we register the event as mouseover/mouseout,
 * and we make sure that the handler is executed only when the mouse
 * enter or leave the area of the target
 */

QUnit.test('[MOV6] delegate mouse enter/leave', function(assert) {
    const spyEnter = sinon.spy();
    const spyLeave = sinon.spy();

    Events.on(this.outer, 'mouseenter', '#box-middle', spyEnter);
    Events.on(this.outer, 'mouseleave', '#box-middle', spyLeave);

    trigger(this.middle, 'mouseover');
    sinon.assert.calledOnce(spyEnter);
    sinon.assert.calledOn(spyEnter, this.middle);
    assert.eventObject(spyEnter.getCall(0).args[0]);

    spyEnter.reset();

    trigger(this.inner, 'mouseover');
    sinon.assert.notCalled(spyEnter);

    trigger(this.inner, 'mouseout');
    sinon.assert.notCalled(spyLeave);

    spyLeave.reset();

    trigger(this.middle, 'mouseout');
    sinon.assert.calledOnce(spyLeave);
    sinon.assert.calledOn(spyLeave, this.middle);
    assert.eventObject(spyLeave.getCall(0).args[0]);
});
