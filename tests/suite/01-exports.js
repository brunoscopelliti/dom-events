
//
// Events test suite
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

var Events = exports["default"];
var Store = exports.EventsStore;


/**
 * @test interface
 * @description module's interface conformance
 */
test("Events' interface", function (assert) {
    _.typeFn(Events.on, "Events.on");
    _.typeFn(Events.off, "Events.off");
    _.typeFn(Events.fire, "Events.fire");
    _.typeFn(Events.debug, "Events.debug");
});

/**
 * @test interface
 * @description module's interface conformance
 */
test("EventsStore's interface", function (assert) {
    _.typeFn(Store.get, "Store.get");
    _.typeFn(Store.add, "Store.add");
    _.typeFn(Store.del, "Store.del");
    _.typeFn(Store.run, "Store.run");
});