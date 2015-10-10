
/**
 * @method Events.fire
 * @signature Events.fire(htmlElement[s], eventName, ...data);
 *
 * Events.fire simulate the triggering of a particular event, on the elements .
 * It executes the handlers attached on the elements,
 * and simulate the bubbling of the event, on their parents.
 *
 * It's possible to specify additional parameters that the event handler
 * should receive when is executed.
 */

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='outer-box' class='box'>\
                <button id='a-btn'>Click <b>here</b></button>\
                <a id='a-link' href='#a-real-route'>Click here perhaps</a>\
            </div>";

        setup(fakeDOM);

        this.box = $$("#outer-box")[0];
        this.btn = $$("#a-btn")[0];
        this.link = $$("#a-link")[0];
    },
    afterEach: function() {

        location.hash = "";

    }
});


test("[FI01] fire event", function (assert) {

    var spy = sinon.spy();

    Events.on(this.btn, "click", spy);
    Events.fire(this.btn, "click", "hello", "world");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(this.btn), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);
    assert.equal(call.args[1], "hello", "Additional arguments ok");
    assert.equal(call.args[2], "world", "Additional arguments ok");

});

test("[FI02] fire delegate event", function (assert) {

    var spy = sinon.spy();

    Events.on(this.box, "click", "#a-btn", spy);
    Events.fire(this.btn, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(this.btn), "Event handler is called with the delegator/target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[FI03] default action", function (assert) {

    var spy = sinon.spy();

    Events.on(this.link, "click", spy);
    Events.fire(this.link, "click");

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.equal(location.href, this.link.href, "Default action performed");

});

xtest("[FI04] evt.stopPropagation();", function (assert) {

    var blockedSpy = sinon.spy();
    var spy = sinon.spy();

    Events.on(this.box, "click", blockedSpy);
    Events.on(this.btn, "click", function(evt) { spy(); evt.stopPropagation(); });

    Events.fire(this.btn, "click");

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(!blockedSpy.called, _.none(blockedSpy.callCount));

});

xtest("[FI05] evt.preventDefault();", function (assert) {

    var spy = sinon.spy();

    Events.on(this.box, "click", spy);
    Events.on(this.link, "click", function(evt) { evt.preventDefault(); });

    var route = location.href;

    Events.fire(this.link, "click");

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.equal(location.href, route, "Default action was blocked");

});

xtest("[FI06] return false;", function (assert) {

    var blockedSpy = sinon.spy();
    var spy = sinon.spy();

    Events.on(this.box, "click", blockedSpy);
    Events.on(this.link, "click", function() { spy(); return false; });

    var route = location.href;

    Events.fire(this.link, "click");

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(!blockedSpy.called, _.none(blockedSpy.callCount));
    assert.equal(location.href, route, "Default action was blocked");

});

xtest("[FI07] handler execution blocked by delegate", function (assert) {

    var blockedSpy = sinon.spy();
    var spy = sinon.spy();

    Events.on(this.box, "click", blockedSpy);
    Events.on(this.box, "click", "#a-link", function() { spy(); return false; });

    var route = location.href;

    Events.fire(this.link, "click");

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(!blockedSpy.called, _.none(blockedSpy.callCount));
    assert.equal(location.href, route, "Default action was blocked");

});