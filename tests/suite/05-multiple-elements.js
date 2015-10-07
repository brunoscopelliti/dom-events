
QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='box-1' class='box'>\
                <button id='btn-1' data-val='hello'>Say <b>hello</b></button>\
                <button id='btn-2' data-val='ciao'>Say <b>ciao</b></button>\
            </div>\
            <div id='box-2' class='box'>\
                <button id='btn-3' data-val='thanks'>Say <b>thanks</b></button>\
                <button id='btn-4' data-val='grazie'>Say <b>grazie</b></button>\
            </div>";

        setup(fakeDOM);
    },
    afterEach: function() {}
});

test("[MUL1] multiple event listeners", function (assert) {

    var spy = sinon.spy();
    var buttons = $$("button");
    var btn1 = $$("#btn-1");
    var btn2 = $$("#btn-2");

    Events.on(buttons, "click", function(){ var val = this.dataset ? this.dataset.val : this.getAttribute("data-val"); spy(val); });

    trigger(btn1, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.equal(spy.getCall(0).args[0], "hello", "Event handler is called with the correct target element as 'this'");

    spy.reset();

    trigger(btn2, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.equal(spy.getCall(0).args[0], "ciao", "Event handler is called with the correct target element as 'this'");

});

test("[MUL2] delegate on multiple elements", function (assert) {

    var spy = sinon.spy();
    var box = $$(".box");
    var btn1 = $$("#btn-1 b");
    var btn2 = $$("#btn-2");
    var btn3 = $$("#btn-3");

    Events.on(box, "click", "button", function(){ var val = this.dataset ? this.dataset.val : this.getAttribute("data-val"); spy(val); });

    trigger(btn1, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.equal(spy.getCall(0).args[0], "hello", "Event handler is called with the correct target element as 'this'");

    spy.reset();

    trigger(btn2, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.equal(spy.getCall(0).args[0], "ciao", "Event handler is called with the correct target element as 'this'");

    spy.reset();

    trigger(btn3, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.equal(spy.getCall(0).args[0], "thanks", "Event handler is called with the correct target element as 'this'");

});