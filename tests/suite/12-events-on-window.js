
//
// Events
// Events.on: Test events registered on the global window
//
// * Scroll event
//   Is fired when the document view or an element has been scrolled.
//   It usually does not bubble, but bubbles to the default view when fired on the document.
//
// * Resize event
//   The resize event is fired when the document view has been resized.
//   It does not bubble.
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='high-box' style='height: 5000px;'>Hello, I am pretty high...</div>\
            <div id='high-with-child' style='height: 300px;'>\
                <div style='height: 600px;'></div>\
            </div>";

        setup(fakeDOM);
    },
    afterEach: function() {
        Events.off(window);
    }
});

test("[WIN1] window scroll", function (assert) {

    var spy = sinon.spy();

    Events.on(window, "scroll", spy);
    trigger(window, "scroll");

    assert.ok(spy.called, _.one("Event handler", spy.callCount));
    assert.ok(spy.calledOn(window), "Event handler is called with the target element as 'this'");

});

test("[WIN2] element scroll", function (assert) {

    var spy = sinon.spy();
    var highbox = $$("#high-with-child");

    Events.on(highbox, "scroll", spy);
    trigger(highbox, "scroll");

    assert.ok(spy.called, _.one("Event handler", spy.callCount));
    assert.ok(spy.calledOn(highbox[0]), "Event handler is called with the target element as 'this'");

});

test("[WIN3] window resize", function (assert) {

    var spy = sinon.spy();

    Events.on(window, "resize", spy);
    trigger(window, "resize");

    assert.ok(spy.called, _.one("Event handler", spy.callCount));
    assert.ok(spy.calledOn(window), "Event handler is called with the target element as 'this'");

});