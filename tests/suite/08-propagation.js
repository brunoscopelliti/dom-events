
/**
 * @method Events.on
 * @signature Events.on(htmlElement, eventName, [delegatorSelector], functionHandler);
 *
 * Events are always registered to be listened in the bubble phase;
 * this means that the event handler set on the inner element
 * should be executed before other handlers on outer elements, [EP01].
 *
 * This is still true for event delegations,
 * however here more complex scenarios are possible: [EP04] to [EP07].
 *
 * In case the same element listens for both directly bound events, both delegate events,
 * the execution of the former is always postponed to the execution of the delegate handlers, [EP03].
 *
 *
 * Event propagation could be blocked from an event handler;
 * there are two ways in which event propagation can be interrupted: invoking the event.stopPropagation
 * method, [EP08], or with 'return false;' from an event handler, [EP09].
 * However both the two methods have no effect once the event has reached its target, [EP10].
 *
 *
 * Note: 'return false;' is a shortcut for event.preventDefault && event.stopPropagation, [EP09] && [EP17].
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
    var button = $$("#parent button");

    Events.on(mainContainer, "click", "button", spyDelegate);
    Events.on(button, "click", spyNoDelegate);

    trigger(button, "click");

    assert.ok(spyDelegate.calledOnce && spyNoDelegate.calledOnce, "Event handlers are fired one time");
    assert.ok(spyNoDelegate.calledBefore(spyDelegate), "Handlers for the innermost element are always executed before");

});

test("[EP03] bubbling vs delegation [B]", function (assert) {

    // in case the same element has both a directly bound event listener, both a delegated event listener
    // the execution of the former is always postponed to the execution of the latter;
    // the delegated event listener handler could also block the event propagation, so that the
    // directly bound event listener handler is never executed (see [EP11], [EP12]).

    var spyNoDelegate = sinon.spy();
    var spyDelegate = sinon.spy();
    var mainContainer = $$("#test-container")[0];
    var button = $$("#parent button");

    Events.on(mainContainer, "click", spyNoDelegate);
    Events.on(mainContainer, "click", "button", spyDelegate);

    trigger(button, "click");

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



/**
 * Stop event propagation
 */

test("[EP08] stop event propagation (with event.stopPropagation method call)", function (assert) {

    var spyParent = sinon.spy();
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(parent, "click", spyParent);
    Events.on(child, "click", function(evt){
        evt.stopPropagation();
    });
    trigger(child, "click");

    assert.ok(this.stopPropagationSpy.calledOnce, _.one("Event#stopPropagation", this.stopPropagationSpy.callCount));
    assert.ok(!spyParent.called, _.none("Event handler", spyParent.callCount));


});

test("[EP09] stop event propagation (with return false)", function (assert) {

    var spyChild = sinon.spy();
    var spyParent = sinon.spy();
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(parent, "click", spyParent);
    Events.on(child, "click", function(){ spyChild(); return false; });
    trigger(child, "click");

    assert.ok(spyChild.calledOnce && !spyParent.called, _.none("Event handler", spyParent.callCount));

});

// @todo It's possible to implement a jQuery style event.stopImmediatePropagation method
test("[EP10] stop event propagation has no effect once the event has reached its target", function (assert) {

    var spyOne = sinon.spy();
    var spyTwo = sinon.spy();
    var spyThree = sinon.spy();
    var child = $$("#parent button");

    Events.on(child, "click", function(evt) { spyOne(); evt.stopPropagation(); });
    Events.on(child, "click", function() { spyTwo(); return false; });
    Events.on(child, "click", spyThree);

    trigger(child, "click");

    assert.ok(spyOne.calledOnce && spyTwo.calledOnce && spyThree.calledOnce, "Event handlers are fired one time");
    assert.ok(spyOne.calledBefore(spyTwo) && spyTwo.calledBefore(spyThree), "The handlers are executed in the order of registration");

});

test("[EP11] delegate handler stops propagation (with event.stopPropagation)", function (assert) {

    // in this case there are both a delegate listener, both a directly bound event listener
    // on the same html element
    // check [EP03] for further info

    var spyDirect = sinon.spy();
    var mainContainer = $$("#test-container")[0];
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyDirect);
    Events.on(mainContainer, "click", "button", function(e) {e.stopPropagation(); });

    trigger(child, "click");

    assert.ok(this.stopPropagationSpy.calledOnce, _.one("Event#stopPropagation", this.stopPropagationSpy.callCount));
    assert.ok(!spyDirect.called, _.none("Direct bound event handler", spyDirect.callCount));

});

test("[EP12] delegate handler stops propagation (with return false)", function (assert) {

    // in this case there are both a delegate listener, both a directly bound event listener
    // on the same html element
    // check [EP03] for further info

    var spyDirect = sinon.spy();
    var mainContainer = $$("#test-container")[0];
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyDirect);
    Events.on(mainContainer, "click", "button", function() { return false; });

    trigger(child, "click");

    assert.ok(!spyDirect.called, _.none("Direct bound event handler", spyDirect.callCount));

});

test("[EP13] delegate handler stops propagation (with event.stopPropagation)", function (assert) {

    // in this case the delegate listener, and the directly bound event listener
    // are on different dom elements
    // check [EP03] for further info

    var spyNoDelegate = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyNoDelegate);
    Events.on(parent, "click", "button", function(evt) { evt.stopPropagation(); });

    trigger(child, "click");

    assert.ok(this.stopPropagationSpy.calledOnce, _.one("Event#stopPropagation", this.stopPropagationSpy.callCount));
    assert.ok(!spyNoDelegate.called, "When delegate handler stops propagation, bound handler is never executed");

});

test("[EP14] delegate handler stops propagation (with return false)", function (assert) {

    // in this case the delegate listener, and the directly bound event listener
    // are on different dom elements
    // check [EP03] for further info

    var spyNoDelegate = sinon.spy();
    var mainContainer = $$("#test-container");
    var parent = $$("#parent");
    var child = $$("#parent button");

    Events.on(mainContainer, "click", spyNoDelegate);
    Events.on(parent, "click", "button", function() { return false; });

    trigger(child, "click");

    assert.ok(!spyNoDelegate.called, "When delegate handler return false, bound handler is never executed");

});



/**
 * Prevent default action
 */

test("[EP15] prevent default (with event.preventDefault)", function (assert) {

    var currentHash = location.hash;
    var link = $$("#anchor");

    Events.on(link, "click", function(evt){ evt.preventDefault(); });
    trigger(link, "click");

    assert.ok(this.preventDefaultSpy.called, _.one("Event#preventDefault", this.preventDefaultSpy.callCount));
    assert.equal(location.hash, currentHash, "default action was blocked");

});

test("[EP16] delegate handler prevent default (with event.preventDefault)", function (assert) {

    var currentHash = location.hash;
    var parent = $$("#parent");
    var link = $$("#anchor");

    Events.on(parent, "click", "#anchor", function(evt){ evt.preventDefault(); });
    trigger(link, "click");

    assert.ok(this.preventDefaultSpy.called, _.one("Event#preventDefault", this.preventDefaultSpy.callCount));
    assert.equal(location.hash, currentHash, "default action was blocked");

});

test("[EP17] prevent default (with return false)", function (assert) {

    var currentHash = location.hash;
    var link = $$("#anchor");

    Events.on(link, "click", function(){ return false; });
    trigger(link, "click");

    assert.equal(location.hash, currentHash, "default action was blocked");

});

test("[EP18] delegate prevent default (with return false)", function (assert) {

    var currentHash = location.hash;
    var parent = $$("#parent");
    var link = $$("#anchor");

    Events.on(parent, "click", "#anchor", function(){ return false; });
    trigger(link, "click");

    assert.equal(location.hash, currentHash, "default action was blocked");

});