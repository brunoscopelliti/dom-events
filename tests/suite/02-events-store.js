
var addSpy = sinon.spy(HTMLElement.prototype, "addEventListener");
var removeSpy = sinon.spy(HTMLElement.prototype, "removeEventListener");

var noop = function noop() {};

QUnit.module( "dom-events.js", {
    beforeEach: function() {
        setup('<button id="btn"><span class="icon">★</span><span class="text">Click here</span></button>');
        this.el = document.getElementById("btn");
    },
    afterEach: function() {

        Store.del(this.el, "click");

        addSpy.reset();
        removeSpy.reset();
    }
});

test("[ES01] add/get from events store", function (assert) {

    var addObj = Store.add(this.el, "click", null, noop);
    var getObj = Store.get(this.el, "click")[0];

    assert.ok(addObj && addObj === getObj, "add/get from events store");
    assert.ok(addSpy.calledOnce, _.one("addEventListener", addSpy.callCount));

    addSpy.reset();

    var addObj2 = Store.add(this.el, "click", ".text", noop);
    var list = Store.get(this.el, "click");

    assert.ok(list.length == 2 && !addSpy.called, _.none("addEventListener", addSpy.callCount));

    addSpy.reset();

    var addObj3 = Store.add(this.el, "mouseover", ".icon", noop);
    var all = Store.get(this.el);

    assert.ok(all.mouseover.length == 1 && addSpy.calledOnce, _.one("addEventListener", addSpy.callCount));

});