
//
// Events
// Events.on: Test click-like events
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='parent'>\
                <p>Click the following button:</p>\
                <button id='child'>Child button</button>\
                <a href='#hash' id='anchor'>Child link</a>\
            </div>";

        setup(fakeDOM);

        this.box = $$("#parent")[0];
        this.btn = $$("#child")[0];

    },
    afterEach: function() {}
});


["mouseup", "mousedown", "dblclick"].forEach(function(eventName, i) {

    test("[CK0"+(i+1)+"] "+eventName, function (assert) {

        var spy = sinon.spy();

        Events.on(this.btn, eventName, spy);
        trigger(this.btn, eventName);

        assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
        assert.ok(spy.calledOn(this.btn), "Event handler is called with the target element as 'this'");

    });

    test("[CK0"+(i+2)+"] delegate "+eventName, function (assert) {

        var spy = sinon.spy();

        Events.on(this.box, eventName, "#child", spy);
        trigger(this.btn, eventName);

        assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
        assert.ok(spy.calledOn(this.btn), "Event handler is called with the target element as 'this'");

    });

});
