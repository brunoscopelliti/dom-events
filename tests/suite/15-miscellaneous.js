//
// Events
// Events.js: miscellaneous test
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {},
    afterEach: function() {}
});


test("[MI01] click on checkbox", function (assert) {

    setup('<input type="checkbox" value="pizza" id="cb" />');

    var spy = sinon.spy();
    var el = $$("#cb");

    Events.on(el, "click", spy);
    trigger(el, "click");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok($$("#cb")[0].checked, "Checkbox is checked");

});
