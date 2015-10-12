
//
// Events
// Events.on: Test mouse movement related events
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='box-outer' style='background: #ccc; width:250px; height:250px; position:relative; margin: 100px auto;'>\
                <div id='box-middle' style='background: #999; width:200px; height:200px; position:absolute; top: 25px; left: 25px;'>\
                    <div id='box-inner' style='background: #555; width:100px; height:100px; position:absolute; top: 50px; left: 50px;'></div>\
                </div>\
            </div>";

        setup(fakeDOM);

        this.outer = $$("#box-outer")[0];
        this.middle = $$("#box-middle")[0];
        this.inner = $$("#box-inner")[0];
    },
    afterEach: function() {}
});

test("[MOV1] mouse over/out", function (assert) {

    var spyOver = sinon.spy();
    var spyOut = sinon.spy();

    Events.on(this.outer, "mouseover", spyOver);
    Events.on(this.outer, "mouseout", spyOut);

    trigger(this.outer, "mouseover");
    assert.ok(spyOver.calledOnce, _.one("Mouseover event handler", spyOver.callCount));

    trigger(this.outer, "mouseout");
    assert.ok(spyOut.calledOnce, _.one("Mouseout event handler", spyOut.callCount));

});

test("[MOV2] delegate mouse over/out", function (assert) {

    var spyOver = sinon.spy();
    var spyOut = sinon.spy();

    Events.on(this.outer, "mouseover", "#box-inner", spyOver);
    Events.on(this.outer, "mouseout", "#box-inner", spyOut);

    trigger(this.inner, "mouseover");
    assert.ok(spyOver.calledOnce, _.one("Mouseover event handler", spyOver.callCount));

    trigger(this.inner, "mouseout");
    assert.ok(spyOut.calledOnce, _.one("Mouseout event handler", spyOut.callCount));

});

test("[MOV3] mousemove", function (assert) {

    var spyMove = sinon.spy();

    Events.on(this.outer, "mousemove", spyMove);

    trigger(this.outer, "mousemove");
    assert.ok(spyMove.calledOnce, _.one("Mousemove event handler", spyMove.callCount));

});

test("[MOV4] delegate mousemove", function (assert) {

    var spyMove = sinon.spy();

    Events.on(this.outer, "mousemove", "#box-inner", spyMove);
    trigger(this.inner, "mousemove");

    assert.ok(spyMove.calledOnce, _.one("Mousemove event handler", spyMove.callCount));

});

test("[MOV5] mouse enter/leave", function (assert) {

    var spyEnter = sinon.spy();
    var spyLeave = sinon.spy();

    Events.on(this.outer, "mouseenter", spyEnter);
    Events.on(this.outer, "mouseleave", spyLeave);

    trigger(this.outer, "mouseenter");
    assert.ok(spyEnter.calledOnce, _.one("Mouseenter event handler", spyEnter.callCount));

    trigger(this.outer, "mouseleave");
    assert.ok(spyLeave.calledOnce, _.one("Mouseleave event handler", spyLeave.callCount));

});

/**
 * Mouseenter & Mouseleave do not bubble up
 * In order to simulate the bubbling of the mouseenter/mouseleave event
 * we register the event as mouseover/mouseout,
 * and we make sure that the handler is executed only when the mouse
 * enter or leave the area of the target
 */

test("[MOV6] delegate mouse enter/leave", function (assert) {

    var spyEnter = sinon.spy();
    var spyLeave = sinon.spy();

    Events.on(this.outer, "mouseenter", "#box-middle", spyEnter);
    Events.on(this.outer, "mouseleave", "#box-middle", spyLeave);

    trigger(this.middle, "mouseover");

    assert.ok(spyEnter.calledOnce, "Mouseenter event handler is fired one time");
    assert.ok(spyEnter.calledOn(this.middle), "Event handler is called with the target element as 'this'");
    _.typeEvent(spyEnter.getCall(0).args[0]);

    spyEnter.reset();

    trigger(this.inner, "mouseover");
    assert.ok(!spyEnter.called, "Mouseenter event handler is not fired when the mouse is already inside the target");

    trigger(this.inner, "mouseout");
    assert.ok(!spyLeave.called, "Mouseleave event handler is not fired until the mouse exits the target");

    spyLeave.reset();

    trigger(this.middle, "mouseout");
    assert.ok(spyLeave.calledOnce, "Mouseleave event handler is fired one time");
    assert.ok(spyLeave.calledOn(this.middle), "Event handler is called with the target element as 'this'");
    _.typeEvent(spyLeave.getCall(0).args[0]);

});

