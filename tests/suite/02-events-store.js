
var noop = function noop() {};

QUnit.module( "dom-events.js", {
    beforeEach: function() {
        setup('<button id="btn"><span class="icon">★</span><span class="text">Click here</span></button>');
        this.el = document.getElementById("btn");

        this.addSpy = sinon.spy(HTMLElement.prototype, "addEventListener");
        this.removeSpy = sinon.spy(HTMLElement.prototype, "removeEventListener");
    },
    afterEach: function() {

        Store.del(this.el);

        this.addSpy.restore();
        this.removeSpy.restore();
    }
});

test("[ES01] add/get from events store", function (assert) {

    var addObj = Store.add(this.el, "click", null, noop);
    var getObj = Store.get(this.el, "click")[0];

    assert.ok(addObj && addObj === getObj, "add/get from events store");
    assert.ok(this.addSpy.calledOnce, _.one("addEventListener", this.addSpy.callCount));

    this.addSpy.reset();

    var addObj2 = Store.add(this.el, "click", ".text", noop);
    var list = Store.get(this.el, "click");

    assert.ok(list.length == 2 && !this.addSpy.called, _.none("addEventListener", this.addSpy.callCount));

    this.addSpy.reset();

    var addObj3 = Store.add(this.el, "mouseover", ".icon", noop);
    var all = Store.get(this.el);

    assert.ok(all.mouseover.length == 1 && this.addSpy.calledOnce, _.one("addEventListener", this.addSpy.callCount));

});


function noop1() {}
function noop2() {}
function noop3() {}

function setupDeleteTests(){

    Store.add(this.el, "click", null, noop1);
    Store.add(this.el, "click", ".add-btn", noop2);
    Store.add(this.el, "click", ".delete-btn", noop3);

    Store.add(this.el, "mouseover", null, sinon.spy());

    Store.add(document, "keyup", null, sinon.spy());

}

test("[ES02] del: by event's type", function (assert) {

    setupDeleteTests.call(this);

    Store.del(this.el, "click");

    assert.equal(Store.get(this.el, "click").length, 0, "All click handler were removed");
    assert.ok(this.removeSpy.calledOnce, "DOM listener was removed");
    assert.equal(Store.get(this.el, "mouseover").length, 1, "Mouseover handler is untouched");

    Store.del(this.el, "mouseover");

    _.typeEmptyObject(Store.get(this.el), "Events store for the element");
    assert.ok(this.removeSpy.calledTwice, "DOM listener was removed");

});

test("[ES03] del: by event's name and delegator", function (assert) {

    setupDeleteTests.call(this);

    Store.del(this.el, "click", ".do-nothing");
    assert.equal(Store.get(this.el, "click").length, 3, "Handlers are untouched");

    Store.del(this.el, "click", ".delete-btn");
    assert.equal(Store.get(this.el, "click").length, 2, "The delegator's event handler was removed");

    assert.ok(!this.removeSpy.called, "DOM listener was not touched");

});

test("[ES04] del: by event's name and specified handler", function (assert) {

    setupDeleteTests.call(this);

    Store.del(this.el, "click", null, sinon.spy());
    assert.equal(Store.get(this.el, "click").length, 3, "Handlers are untouched");

    Store.del(this.el, "click", null, noop1);
    assert.equal(Store.get(this.el, "click").length, 2, "The handler's event listener was removed");

    assert.ok(!this.removeSpy.called, "DOM listener was not touched");

});

test("[ES05] del: by event's name with handler && delegator", function (assert) {

    setupDeleteTests.call(this);

    Store.del(this.el, "click", ".do-nothing", sinon.spy());
    Store.del(this.el, "click", ".add-btn", function() {});
    assert.equal(Store.get(this.el, "click").length, 3, "Handlers are untouched");

    Store.del(this.el, "click", ".add-btn", noop2);
    assert.equal(Store.get(this.el, "click").length, 2, "The handler's event listener was removed");

    Store.del(this.el, "click", null,  noop1);
    assert.equal(Store.get(this.el, "click").length, 1, "The handler's event listener was removed");

    assert.ok(!this.removeSpy.called, "DOM listener was not touched");

    Store.del(this.el, "click", ".delete-btn", noop3);

    assert.ok(this.removeSpy.calledOnce, "DOM listener was removed");

});

test("[ES06] del: special listeners [A]", function (assert) {

    Store.add(this.el, "mouseenter", null, sinon.spy());
    Store.add(this.el, "mouseenter", ".removed", sinon.spy());
    Store.add(this.el, "mouseover", null, sinon.spy());

    Store.del(this.el, "mouseover");

    var mouseoverHandlers = Store.get(this.el, "mouseover");
    assert.equal(mouseoverHandlers.length, 1, "Only one handler was removed");
    assert.equal(mouseoverHandlers[0].origType, "mouseenter", "Mouseover handler was removed");

    var mouseenterHandlers = Store.get(this.el, "mouseenter");
    assert.equal(mouseenterHandlers.length, 1, "Mouseenter handler was untouched");

});

test("[ES07] del: special listeners [B]", function (assert) {

    Store.add(this.el, "mouseenter", null, sinon.spy());
    Store.add(this.el, "mouseenter", ".removed", sinon.spy());
    Store.add(this.el, "mouseover", null, sinon.spy());

    Store.del(this.el, "mouseenter");

    var mouseoverHandlers = Store.get(this.el, "mouseover");
    assert.equal(mouseoverHandlers.length, 1, "Only one handler was removed");
    assert.equal(mouseoverHandlers[0].origType, "mouseover", "Mouseenter handler was removed");

    var mouseenterHandlers = Store.get(this.el, "mouseenter");
    assert.equal(mouseenterHandlers.length, 0, "Both mouseenter handlers were removed");

});
