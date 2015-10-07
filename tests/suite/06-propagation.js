
/**
 * @method Events.on
 * @signature Events.on(htmlElement, eventName, [delegatorSelector], functionHandler);
 *
 * Events are always registered to be listened in the bubble phase;
 * this means that the event handler set on the inner element
 * should be executed before other handlers on outer elements, [EP01].
 *
 * In case the same element listens for both directly bound events, both delegate events,
 * the execution of the former is always postponed to the execution of the delegate handlers, [EP03].
 *
 */

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        this.stopPropagationSpy = sinon.spy(Event.prototype, "stopPropagation");
        this.preventDefaultSpy = sinon.spy(Event.prototype, "preventDefault");

        var fakeDOM = "\
            <div id='parent'>\
                <div id='child'>\
                    <p>Click the following button:</p>\
                    <button id='btn'>Child button</button>\
                </div>\
                <a href='#hash' id='anchor'>Child link</a>\
            </div>";

        setup(fakeDOM);
    },
    afterEach: function() {
        this.stopPropagationSpy.restore();
        this.preventDefaultSpy.restore();
    }
});


test("[EP01] event bubbles up", function (assert) {

    var spyParent = sinon.spy();
    var spyChild1 = sinon.spy();
    var spyChild2 = sinon.spy();
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(child, "click", spyChild1);
    Events.on(parent, "click", spyParent);
    Events.on(child, "click", spyChild2);
    trigger(child, "click");

    assert.ok(spyParent.calledOnce && spyChild1.calledOnce && spyChild2.calledOnce, "Event handlers are fired one time");
    assert.ok(spyChild1.calledBefore(spyChild2), "The handlers of the inner element are executed in the order of registration");
    assert.ok(spyChild1.calledBefore(spyParent) && spyChild2.calledBefore(spyParent), "The handlers of the inner element are executed before the handler of the outer element");

});

test("[EP02] bubbling vs delegation [A]", function (assert) {

    // handlers on the innermost html element are always executed before handlers on the outer elements

    var spyNoDelegate = sinon.spy();
    var spyDelegate = sinon.spy();
    var mainContainer = $$("#test-container");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", "button", spyDelegate);
    Events.on(child, "click", spyNoDelegate);

    trigger(child, "click");

    assert.ok(spyDelegate.calledOnce && spyNoDelegate.calledOnce, "Event handlers are fired one time");
    assert.ok(spyNoDelegate.calledBefore(spyDelegate), "Handlers for the innermost element are always executed before");

});

test("[EP03] bubbling vs delegation [B]", function (assert) {

    // in case the same element has both a directly bound event listener, both a delegated event listener
    // the execution of the former is always postponed to the execution of the latter;
    // the delegated event listener handler could also block the event propagation, so that the
    // directly bound event listener handler is never executed (see [****A]).

    var spyNoDelegate = sinon.spy();
    var spyDelegate = sinon.spy();
    var mainContainer = $$("#test-container")[0];
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyNoDelegate);
    Events.on(mainContainer, "click", "button", spyDelegate);

    trigger(child, "click");

    assert.ok(spyDelegate.calledOnce && spyNoDelegate.calledOnce, "Event handlers are fired one time");
    assert.ok(spyDelegate.calledBefore(spyNoDelegate), "Delegated handler is executed before");

});

test("[EP04] delegate handlers are executed starting from the innermost element [A]", function (assert) {

    // [A] target element is the same, bound elements are different

    var spyTestContainer = sinon.spy();
    var spyParent = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", "button", spyTestContainer);
    Events.on(parent, "click", "button", spyParent);

    trigger(child, "click");

    assert.ok(spyParent.calledOnce && spyTestContainer.calledOnce, "Event handlers are fired one time");
    assert.ok(spyParent.calledBefore(spyTestContainer), "The handler of the inner bound element is executed before the handler of the outer bound element");

});

test("[EP05] delegate handlers are executed starting from the innermost element [B]", function (assert) {

    // [B] target elements are different, bound elements is the same

    var spyParent = sinon.spy();
    var spyChild = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", "#parent", spyParent);
    Events.on(mainContainer, "click", "button", spyChild);

    trigger(child, "click");

    assert.ok(spyParent.calledOnce && spyChild.calledOnce, "Event handlers are fired one time");
    assert.ok(spyChild.calledBefore(spyParent), "The handler of the inner element is executed before the handler of the outer element");

});

test("[EP06] delegate handlers are executed starting from the innermost element [C1]", function (assert) {

    // [C1] different bound elements, and different targets

    var spyParent = sinon.spy();
    var spyChild = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", "#parent", spyParent);
    Events.on(parent, "click", "button", spyChild);

    trigger(child, "click");

    assert.ok(spyParent.calledOnce && spyChild.calledOnce, "Event handlers are fired one time");
    assert.ok(spyChild.calledBefore(spyParent), "The handler of the inner element is executed before the handler of the outer element");

});

test("[EP07] delegate handlers are executed starting from the innermost element [C2]", function (assert) {

    // [C2] different bound elements, and different targets

    var spyParent = sinon.spy();
    var spyChild = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#child");
    var btn = $$("#btn");

    Events.on(mainContainer, "click", "#btn", spyParent);
    Events.on(parent, "click", "#child", spyChild);

    trigger(btn, "click");

    assert.ok(spyParent.calledOnce && spyChild.calledOnce, "Event handlers are fired one time");
    assert.ok(spyChild.calledBefore(spyParent), "The handler of the inner element is executed before the handler of the outer element");

});




// @todo stop propagation should be implemented
xtest("[****A] stop propagation", function (assert) {

    // check [EP03] for reference

    var spyDirect = sinon.spy();
    var mainContainer = $$("#test-container")[0];
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyDirect);
    Events.on(mainContainer, "click", "button", function(e) {e.stopPropagation(); });

    trigger(child, "click");

    assert.ok(this.stopPropagationSpy.calledOnce, _.one("Event#stopPropagation", this.stopPropagationSpy.callCount));
    assert.ok(!spyDirect.called, _.none("Direct bound event handler", spyDirect.callCount));

});
