
/**
 * @method Events.on, delegate events
 * @signature Events.on(htmlElement, eventName, delegatorSelector, functionHandler);
 *
 * Events.on add an event listener on the dom element passed as parameter,
 * that is a delegate for the event fired on the elements matching the "delegatorSelector" selector.
 *
 */

QUnit.module( "dom-events.js delegation", {
    beforeEach: function() {

        var fakeDOM = "\
            <ul id='list' class='list-level-1'>\
                <li id='matchingEl' class='entry level-1'>\
                    <div>\
                        <span>More opportunities</span>\
                        <ul id='countries' class='list-level-2'>\
                            <li id='clickedEl' class='entry level-2 country it'>\
                                <span>Italy</span>\
                            </li>\
                            <li class='entry level-2 country us'>\
                                <span>USA</span>\
                            </li>\
                        </ul>\
                    </div>\
                </li>\
                <li id='btn-row' class='entry level-1'>\
                    <span>Click the button</span>\
                    <div id='child'>\
                        <button id='btn' disabled>\
                            <span>Click here</span>\
                        </button>\
                    </div>\
                </li>\
            </ul>";

        setup(fakeDOM);
    },
    afterEach: function() {

    }
});


test("[DEL1] evt.target == delegator", function (assert) {

    var spy = sinon.spy();
    var boundEl = $$("#countries");
    var clickedEl = $$("#countries .it")[0];

    Events.on(boundEl, "click", ".country", spy);
    trigger(clickedEl, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(call.calledOn(clickedEl), "Event handler is called with the delegator/target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[DEL2] evt.target is inside the delegator", function (assert) {

    var spy = sinon.spy();
    var boundEl = $$("#countries");
    var clickedEl = $$("#countries .it span");
    var delegatorEl = $$("#countries .country.it")[0];

    Events.on(boundEl, "click", ".country", spy);
    trigger(clickedEl, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one(spy.callCount));
    assert.ok(call.calledOn(delegatorEl), "Event handler is called with the delegator element as this");
    _.typeEvent(call.args[0]);

});