
import sinon from 'sinon';

import setup from '../utilities/dom-setup';

/**
 * @name Store
 * @description
 * Stores the event listeners set, and exposes methods to modify the collection.
 */
import Store from 'event-store.js';


QUnit.module('EventsStore');


QUnit.test('interface', function(assert) {
    assert.type(Store.get, 'function', 'Store.get must be a function');
    assert.type(Store.add, 'function', 'Store.add must be a function');
    assert.type(Store.del, 'function', 'Store.del must be a function');
    assert.type(Store.run, 'function', 'Store.run must be a function');
});




QUnit.module('EventsStore functionalities', {
    beforeEach: function() {
        const fakeDOM = '\
            <button id="btn">\
                <span class="icon">★</span>\
                <span class="text">Click here</span>\
            </button>';

        setup(fakeDOM);
        this.el = document.getElementById('btn');
    },
    afterEach: function() {
        Store.del(this.el);
        window.addListenerSpy.reset();
        window.delListenerSpy.reset();
    }
});


QUnit.test('[ES01] add/get from events store', function(assert) {
    const noop = function noop() {};
    const addObj = Store.add(this.el, 'click', null, noop);
    const getObj = Store.get(this.el, 'click')[0];

    assert.ok(addObj && addObj === getObj, 'add/get from events store');

    sinon.assert.calledOnce(window.addListenerSpy);
    window.addListenerSpy.reset();

    Store.add(this.el, 'click', '.text', noop);
    const list = Store.get(this.el, 'click');

    assert.equal(list.length, 2);

    sinon.assert.notCalled(window.addListenerSpy);
    window.addListenerSpy.reset();

    Store.add(this.el, 'mouseover', '.icon', noop);
    const all = Store.get(this.el);

    assert.equal(all.mouseover.length, 1);

    sinon.assert.calledOnce(window.addListenerSpy);
});


const noop1 = () => {};
const noop2 = () => {};
const noop3 = () => {};

function setupDeleteTests() {
    Store.add(this.el, 'click', null, noop1);
    Store.add(this.el, 'click', '.add-btn', noop2);
    Store.add(this.el, 'click', '.delete-btn', noop3);
    Store.add(this.el, 'mouseover', null, sinon.spy());
    Store.add(document, 'keyup', null, sinon.spy());
}

QUnit.test('[ES02] del: by event\'s type', function(assert) {
    setupDeleteTests.call(this);

    Store.del(this.el, 'click');

    assert.equal(Store.get(this.el, 'click').length, 0);
    assert.equal(Store.get(this.el, 'mouseover').length, 1);

    sinon.assert.calledOnce(window.delListenerSpy);
    window.delListenerSpy.reset();

    Store.del(this.el, 'mouseover');

    assert.emptyObject(Store.get(this.el));

    sinon.assert.calledOnce(window.delListenerSpy);
});


QUnit.test('[ES03] del: by event\'s name and delegator', function(assert) {
    setupDeleteTests.call(this);

    Store.del(this.el, 'click', '.do-nothing');
    assert.equal(Store.get(this.el, 'click').length, 3);

    Store.del(this.el, 'click', '.delete-btn');
    assert.equal(Store.get(this.el, 'click').length, 2);

    sinon.assert.notCalled(window.delListenerSpy);
});


QUnit.test('[ES04] del: by event\'s name and specified handler', function(assert) {
    setupDeleteTests.call(this);

    Store.del(this.el, 'click', null, sinon.spy());
    assert.equal(Store.get(this.el, 'click').length, 3);

    Store.del(this.el, 'click', null, noop1);
    assert.equal(Store.get(this.el, 'click').length, 2);

    sinon.assert.notCalled(window.delListenerSpy);
});


QUnit.test('[ES05] del: by event\'s name with handler && delegator', function(assert) {
    setupDeleteTests.call(this);

    Store.del(this.el, 'click', '.do-nothing', sinon.spy());
    Store.del(this.el, 'click', '.add-btn', function() {});
    assert.equal(Store.get(this.el, 'click').length, 3);

    Store.del(this.el, 'click', '.add-btn', noop2);
    assert.equal(Store.get(this.el, 'click').length, 2);

    Store.del(this.el, 'click', null,  noop1);
    assert.equal(Store.get(this.el, 'click').length, 1);

    sinon.assert.notCalled(window.delListenerSpy);

    Store.del(this.el, 'click', '.delete-btn', noop3);

    sinon.assert.calledOnce(window.delListenerSpy);
});


QUnit.test('[ES06] del: special listeners [A]', function(assert) {
    Store.add(this.el, 'mouseenter', null, sinon.spy());
    Store.add(this.el, 'mouseenter', '.removed', sinon.spy());
    Store.add(this.el, 'mouseover', null, sinon.spy());

    Store.del(this.el, 'mouseover');

    const mouseoverHandlers = Store.get(this.el, 'mouseover');
    assert.equal(mouseoverHandlers.length, 1);
    assert.equal(mouseoverHandlers[0].origType, 'mouseenter');

    const mouseenterHandlers = Store.get(this.el, 'mouseenter');
    assert.equal(mouseenterHandlers.length, 1);
});


QUnit.test('[ES07] del: special listeners [B]', function(assert) {
    Store.add(this.el, 'mouseenter', null, sinon.spy());
    Store.add(this.el, 'mouseenter', '.removed', sinon.spy());
    Store.add(this.el, 'mouseover', null, sinon.spy());

    Store.del(this.el, 'mouseenter');

    const mouseoverHandlers = Store.get(this.el, 'mouseover');
    assert.equal(mouseoverHandlers.length, 1);
    assert.equal(mouseoverHandlers[0].origType, 'mouseover');

    const mouseenterHandlers = Store.get(this.el, 'mouseenter');
    assert.equal(mouseenterHandlers.length, 0);
});
