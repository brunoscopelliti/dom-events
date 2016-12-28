
import sinon from 'sinon';

import $$ from '../utilities/dom-query';
import setup from '../utilities/dom-setup';
import trigger from '../utilities/trigger';


import Events from 'index.js';

QUnit.module('dom-events.js', {
    beforeEach: function() {
        const fakeDOM = '\
            <div id="box-1" class="box">\
                <button id="btn-1" data-val="hello">Say <b>hello</b></button>\
                <button id="btn-2" data-val="ciao">Say <b>ciao</b></button>\
            </div>\
            <div id="box-2" class="box">\
                <button id="btn-3" data-val="thanks">Say <b>thanks</b></button>\
                <button id="btn-4" data-val="grazie">Say <b>grazie</b></button>\
            </div>';

        setup(fakeDOM);
    },
    afterEach: function() {}
});


QUnit.test('[MUL1] multiple event listeners', function(assert) {
    const spy = sinon.spy();
    const buttons = $$('button');
    const btn1 = $$('#btn-1');
    const btn2 = $$('#btn-2');

    Events.on(buttons, 'click', function() { const val = this.dataset ? this.dataset.val : this.getAttribute('data-val'); spy(val); });

    trigger(btn1, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'hello');
    spy.reset();

    trigger(btn2, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'ciao');

    assert.expect(0);
});


QUnit.test('[MUL2] delegate on multiple elements', function(assert) {
    const spy = sinon.spy();
    const box = $$('.box');
    const btn1 = $$('#btn-1 b');
    const btn2 = $$('#btn-2');
    const btn3 = $$('#btn-3');

    Events.on(box, 'click', 'button', function() { const val = this.dataset ? this.dataset.val : this.getAttribute('data-val'); spy(val); });

    trigger(btn1, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'hello');
    spy.reset();

    trigger(btn2, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'ciao');
    spy.reset();

    trigger(btn3, 'click');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'thanks');

    assert.expect(0);
});