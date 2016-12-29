
import Events from 'index.js';

/**
 * @name Events
 * @description
 * Exposes methods to set/remove event listeners on DOM elements
 */
QUnit.module('Events');


QUnit.test('interface', function(assert) {
    assert.type(Events.on, 'function', 'Events.on must be a function');
    assert.type(Events.off, 'function', 'Events.off must be a function');
    assert.type(Events.fire, 'function', 'Events.fire must be a function');
    assert.type(Events.debug, 'function', 'Events.debug must be a function');
});
