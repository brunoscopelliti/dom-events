
/**
 * @method Events.on
 * @signature Events.on(htmlElement[s], eventName, functionHandler);
 *
 * Events.on add an event listener on the dom elements passed as parameter.
 * When the event is fired the callback is executed with the element as context (this),
 * and receive the event object as parameter, [ON01].
 *
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
    var btn = $$("#btn")[0];

    Events.on(btn, "click", spy);
    trigger(btn, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(call.calledOn(btn), _.context);
    _.typeEvent(call.args[0]);

});
