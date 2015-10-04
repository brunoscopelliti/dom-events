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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function Store() {
  _classCallCheck(this, Store);
}

/**
 * @name DOMEvents
 */
;

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
  on: function on() {},

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

exports["default"] = DOMEvents;

// Store is exported to permit test
exports.EventsStore = Store;
