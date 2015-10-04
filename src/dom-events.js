/**
 * @fileoverview JavaScript DOM event handler micro library.
 * @copyright Bruno Scopelliti 2015
 * @author Bruno Scopelliti <me@brunoscopelliti.com>
 * @license MIT
 *
 * @module src/dom-events
 */


/**
 * @name Store
 * @class
 */
class Store {

    constructor() {
    }

}


/**
 * @name DOMEvents
 */
var DOMEvents = {

    /**
     * @name debug
     * @function
     */
    debug: function debug() {},

    /**
     * @name on
     * @function
     */
    on: function on(){},

    /**
     * @name off
     * @function
     */
    off: function off() {},

    /**
     * @name fire
     * @function
     */
    fire: function fire() {}

};


export default DOMEvents;

// Store is exported to permit test
export { Store as EventsStore };