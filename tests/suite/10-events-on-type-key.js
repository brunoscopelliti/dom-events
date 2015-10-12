
//
// Events
// Events.on: Test keyboard related events
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {
        setup('<input id="username" />');
        this.field = $$("#username")[0];
    },
    afterEach: function() {
        Events.off(document);
    }
});


["keyup", "keydown", "keypress"].forEach(function(eventName, i) {

    test("[KEY"+(i+1)+"] "+eventName, function (assert) {

        var spy = sinon.spy();

        Events.on(document, eventName, spy);
        trigger(document, eventName);

        assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
        assert.ok(spy.calledOn(document), "Event handler is called with the target element as 'this'");

    });

    test("[KEY"+(i+2)+"] delegate "+eventName, function (assert) {

        var spy = sinon.spy();

        Events.on(document, eventName, "#username", spy);
        trigger(this.field, eventName);

        assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
        assert.ok(spy.calledOn(this.field), "Event handler is called with the target element as 'this'");

    });

});
