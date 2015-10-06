
/**
 * @method Events.on
 * @signature Events.on(htmlElement[s], eventName, functionHandler);
 *
 * Events.on add an event listener on the dom elements passed as parameter.
 * When the event is fired the callback is executed with the element as context (this),
 * and receive the event object as parameter, [ON01].
 *
 * When the event occurs on a disabled element, it does not have any effect, [ON02].
 *
 * If the event handler function was bound than the context of execution is the one provided at binding time;
 * in case the binding was made also on arguments, then the event object is the last of the arguments, [ON03].
 */

QUnit.module( "dom-events.js", {
    beforeEach: function() {
        setup('<button id="btn"><span class="icon">★</span><span class="text">Click here</span></button>');
        this.el = document.getElementById("btn");
    },
    afterEach: function() {

    }
});


test("[ON01] add event listener", function (assert) {

    var spy = sinon.spy();

    Events.on(this.el, "click", spy);
    trigger(this.el, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(this.el), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[ON02] listener on disabled element", function (assert) {

    this.el.disabled = true;

    var spy = sinon.spy();

    Events.on(this.el, "click", spy);
    trigger(this.el, "click");

    assert.ok(!spy.called, _.none("Event handler", spy.callCount));

});

test("[ON03] add bound event listener", function (assert) {

    var fakeContext = { val: 42 };
    var spy = sinon.spy();

    Events.on(this.el, "click", spy.bind(fakeContext, "hello", "world"));
    trigger(this.el, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(fakeContext), "Event handler is called with the bound object as 'this'");
    _.typeEvent(call.args.pop());
    assert.equal(call.args.join(" "), "hello world", "Event handler receives the other parameters in the correct positions");

});