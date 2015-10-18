
/**
 * @method Events.off
 * @signature Events.off(htmlElement[s] [, eventName] [, delegator] [, functionHandler]);
 *
 * Events.off removes an event listener from one (or more) html elements.
 */


QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <input id='name' value=''/>\
            <div id='box-1' class='box'>\
                <button id='btn-1' data-val='hello'>Say <b>hello</b></button>\
                <button id='btn-2' data-val='ciao'>Say <b>ciao</b></button>\
            </div>\
            <div id='box-2' class='box'>\
                <button id='btn-3' data-val='thanks'>Say <b>thanks</b></button>\
                <button id='btn-4' data-val='grazie'>Say <b>grazie</b></button>\
            </div>";

        setup(fakeDOM);

        this.btn1 = $$("#btn-1")[0];
        this.btn2 = $$("#btn-2")[0];
        this.btn3 = $$("#btn-3")[0];
        this.btn4 = $$("#btn-4")[0];
    },
    afterEach: function() {}
});


test("[OF01] remove all types of listeners", function (assert) {

    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    var spy3 = sinon.spy();

    Events.on(this.btn1, "mouseover", spy1);
    Events.on(this.btn1, "mouseout", spy2);
    Events.on(this.btn1, "mouseenter", "b", spy3);

    Events.off(this.btn1);

    trigger(this.btn1, "mouseover");
    assert.ok(!spy1.called, _.none("Event handler", spy1.callCount));

    trigger(this.btn1, "mouseout");
    assert.ok(!spy2.called, _.none("Event handler", spy2.callCount));

    trigger(this.btn1.querySelector("b"), "mouseenter");
    assert.ok(!spy3.called, _.none("Event handler", spy3.callCount));

    _.typeEmptyObject(Events.debug(this.btn1), "Events list");

});

test("[OF02] remove all types of listeners from document", function (assert) {

    var spy1 = sinon.spy();
    var spy2 = sinon.spy();

    Events.on(document, "click", "body", spy1);
    Events.on(document, "keyup", spy2);

    Events.off(document);

    _.typeEmptyObject(Events.debug(document), "Events list");

});

test("[OF03] remove all listeners of specific type", function (assert) {

    var spy1 = sinon.spy();
    var spy2 = sinon.spy();

    Events.on(this.btn1, "click", spy1);
    Events.on(this.btn1, "click", spy2);

    Events.off(this.btn1, "click");
    trigger(this.btn1, "click");

    assert.ok(!spy1.called, _.none("Event handler", spy1.callCount));
    assert.ok(!spy2.called, _.none("Event handler", spy2.callCount));

});

test("[OF04] remove listener from all elements", function (assert) {

    var spy1 = sinon.spy();
    var spy2 = sinon.spy();

    var buttons = $$("button");

    Events.on(this.btn1, "click", spy1);
    Events.on(this.btn1, "mouseover", spy1);
    Events.on(this.btn2, "click", spy2);

    Events.off(buttons, "click");

    trigger(buttons, "click");

    assert.ok(!spy1.called, _.none("Event handler", spy1.callCount));
    assert.ok(!spy2.called, _.none("Event handler", spy2.callCount));

    trigger(this.btn1, "mouseover");

    assert.ok(spy1.calledOnce, _.one("Event handler", spy1.callCount));

});

test("[OF05] remove listener by delegator", function (assert) {

    var spy = sinon.spy();
    var box = $$("#box-1");

    Events.on(box, "click", "#btn-1", spy);
    Events.off(this.btn1, "click", "#btn-2");

    trigger(this.btn1, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    spy.reset();

    Events.off(box, "click", "#btn-1");

    trigger(this.btn1, "click");

    assert.ok(!spy.called, _.none("Event handler", spy.callCount));

});

test("[OF06] remove listener by handler", function (assert) {

    var spy = sinon.spy();

    Events.on(this.btn3, "click", spy);
    Events.off(this.btn3, "click", sinon.spy());

    trigger(this.btn3, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    spy.reset();

    Events.off(this.btn3, "click", spy);

    trigger(this.btn3, "click");

    assert.ok(!spy.called, _.none("Event handler", spy.callCount));

});

test("[OF07] remove delegate handler", function (assert) {

    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    var box = $$("#test-container");

    Events.on(box, "click", "button", spy1);
    Events.on(this.btn3, "click", spy2);

    trigger(this.btn1, "click");
    trigger(this.btn3, "click");

    assert.ok(spy1.calledTwice, "Event handler should be called twice [called "+spy1.callCount+"]");
    assert.ok(spy2.calledOnce, _.one("Event handler", spy2.callCount));
    spy1.reset();
    spy2.reset();

    Events.off(box, "click");

    trigger(this.btn3, "click");

    assert.ok(!spy1.called, _.none("Event handler", spy1.callCount));
    assert.ok(spy2.calledOnce, _.one("Event handler", spy2.callCount));

});
