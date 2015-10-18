
/**
 * @method Events.on, delegate events
 * @signature Events.on(htmlElement, eventName, delegatorSelector, functionHandler);
 *
 * Events.on add an event listener on the dom element passed as parameter,
 * that is a delegate for the event fired on the elements matching the "delegatorSelector" selector.
 *
 * Event handler is executed both when the evt.target == delegatorSelector element ([DEL1]),
 * both when evt.target is inside the target ([DEL2]).
 * If multiple matching targets are found during the bubbling, the event handler is executed multiple times,
 * each time with the matching target as context (this), [DEL5].
 *
 * Events which occurs on disabled delegators do not have effect, [DEL4].
 */

QUnit.module( "dom-events.js", {
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
            </ul>\
            <p id='colophon'>If not enough click <a href='#def' id='matched-link' class='link'><span id='clicked-link' class='link'>here</span></a></p>";

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

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
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

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(delegatorEl), "Event handler is called with the delegator element as this");
    _.typeEvent(call.args[0]);

});

test("[DEL3] delegate event listener on the document", function (assert) {

    var spy = sinon.spy();
    var clickedEl = $$("#countries .it")[0];

    Events.on(document, "click", ".country", spy);
    trigger(clickedEl, "click");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(clickedEl), "Event handler is called with the delegator element as 'this'");
    _.typeEvent(call.args[0]);

    Events.off(document);

});

// @bug https://bugzilla.mozilla.org/show_bug.cgi?id=218093
// @description if the target is contained by a disabled element, the event in Firefox does not bubble up
// @demo http://codepen.io/brunoscopelliti/pen/dYGbWz
test("[DEL4] delegator is disabled", function (assert) {

    var spyBtn = sinon.spy();
    var spyChild = sinon.spy();
    var boundEl = $$("#btn-row");
    var clickedEl = $$("#btn span");

    Events.on(boundEl, "click", "#child", spyChild);
    Events.on(boundEl, "click", "#btn", spyBtn);

    trigger(clickedEl, "click");

    assert.ok(!spyBtn.called, _.none("Event handler", spyBtn.callCount));
    assert.ok(spyChild.calledOnce, _.one("Event handler", spyChild.callCount));

});

test("[DEL5] multiple matching", function (assert) {

    var spy = sinon.spy();
    var boundEl = $$("#list");
    var clickedEl = $$("#clickedEl")[0];
    var matchingEl = $$("#matchingEl")[0];

    Events.on(boundEl, "click", ".entry", spy);
    trigger(clickedEl, "click");

    assert.ok(spy.calledTwice, "Event handler is fired two times");

    var call1 = spy.getCall(0);
    assert.ok(call1.calledOn(clickedEl), "Event handler is called with the delegator element as 'this'");
    _.typeEvent(call1.args[0]);

    var call2 = spy.getCall(1);
    assert.ok(call2.calledOn(matchingEl), "Event handler is called with the delegator element as 'this'");
    _.typeEvent(call2.args[0]);

});

test("[DEL6] multiple matching and default action", function (assert) {

    var spy = sinon.spy();
    var boundEl = $$("#colophon");
    var clickedEl = $$("#clicked-link")[0];
    var matchingEl = $$("#matched-link")[0];

    Events.on(boundEl, "click", ".link", spy);
    trigger(clickedEl, "click");

    stop();

    setTimeout(function() {

        assert.ok(spy.calledTwice, "Event handler is fired two times");
        assert.equal(location.href, matchingEl.href);

        var call1 = spy.getCall(0);
        assert.ok(call1.calledOn(clickedEl), "Event handler is called with the delegator element as 'this'");
        _.typeEvent(call1.args[0]);

        var call2 = spy.getCall(1);
        assert.ok(call2.calledOn(matchingEl), "Event handler is called with the delegator element as 'this'");
        _.typeEvent(call2.args[0]);

        location.hash = "";

        start();
    }, 0);

});