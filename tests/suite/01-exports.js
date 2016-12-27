
//
// Events test suite
//

//
// A good reference about the events,
// and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

import Events from 'index.js';
import Store from 'event-store.js';


/**
 * @test interface
 * @description module's interface conformance
 */
QUnit.test("Events' interface", function (assert) {
    assert.type(Events.on, 'function', 'Events.on must be a function');
    assert.type(Events.off, 'function', 'Events.off must be a function');
    assert.type(Events.fire, 'function', 'Events.fire must be a function');
    assert.type(Events.debug, 'function', 'Events.debug must be a function');
});

/**
 * @test interface
 * @description module's interface conformance
 */
QUnit.test("EventsStore's interface", function (assert) {
    assert.type(Store.get, 'function', 'Store.get must be a function');
    assert.type(Store.add, 'function', 'Store.add must be a function');
    assert.type(Store.del, 'function', 'Store.del must be a function');
    assert.type(Store.run, 'function', 'Store.run must be a function');
});