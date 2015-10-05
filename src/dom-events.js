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
 *
 */
var Store = (function() {

    /**
     * @name guid_
     * @description an unique id for a listener entry in the Store's registry
     */
    var guid_ = 0;


    /**
     * @name guid
     * @description symbol used to store the id of the handler's objects
     */
    const guid = Symbol("EVStore_guid");


    /**
     * @name eventsTable_
     * @description
     * A weak map that stores the event listeners; use html element as key
     */
    const eventsTable_ = new WeakMap();




    function get(el, type = "") {

        var elListeners = eventsTable_.get(el);

        if (typeof elListeners == "undefined"){
            return [];
        }

        if (type){
            return elListeners[type] || [];
        }

        return elListeners;

    }

    
    function add(el, type, delegator, handler) {

        var eventObj = prepareEventObject_(type, delegator, handler);




        if(!eventsTable_.has(el)){
            eventsTable_.set(el, {});
        }

        if(!eventsTable_.get(el)[type]){
            eventsTable_.get(el)[type] = [];
        }

        let handlersCount = eventsTable_.get(el)[type].push(eventObj);

        if (handlersCount == 1){
            addDOMListener_(el, type);
        }

        return eventObj;

    }


    function del(el, type, delegator, handler) {}


    function run(el, type, data) {}




    function prepareEventObject_(type, delegator, handler){

        var id = ++guid_;
        var isDelegate = delegator != null;

        var eventObj = Object.create(null);



        /**
         * {Number} guid
         * unique id for this entry
         */
        eventObj[guid] = id;

        /**
         * {Boolean} delegate
         * it is true for delegated listener
         */
        eventObj.delegate = isDelegate;

        /**
         * {Function} handler
         * the function that should be executed when the event is triggered
         */
        eventObj.handler = function(event) {
            return handler.call(this, event);
        };

        // we're putting a mark on the handler function
        // so that when the time comes it will be easy to remove the listener
        if(!handler[guid]){
            handler[guid] = eventObj.handler[guid] = id;
        }
        else {
            eventObj.handler[guid] = handler[guid];
        }

        /**
         * {String} delegator
         * the delegator selector
         */
        eventObj.delegator = delegator;

        /**
         * {String} type
         * the event name
         */
        eventObj.type = type;

        return eventObj;
    }






    /**
     * @name addDOMListener_
     * @function
     * @private
     * @description
     * Add the event listener on the html element for the specified event.
     *
     * @param {HTMLElement} el: the html element for which add the event listener
     * @param {String} type: the name of the event
     * @return {void}
     */
    function addDOMListener_(el, type){

        el.addEventListener(type, dispatch_, false);

    }


    /**
     * @name removeDOMListener_
     * @function
     * @private
     * @description
     * Remove the listener of the specified event from the html element.
     *
     * @param {HTMLElement} el: the html element for which remove the event listener
     * @param {String} type: the name of the event
     * @return {void}
     */
    function removeDOMListener_(el, type){

        el.removeEventListener(type, dispatch_, false);

    }





    return {

        /**
         * @name get
         * @function
         * @memberOf Store
         * @description
         * Get the list of the event listeners registered on a particular html element.
         * Optionally the list is filtered by event type.
         *
         * @param {HTMLElement} el: the html element for which to get the events
         * @param {String} [type]: name of the event
         *
         * @return {Array} the list of the events set on the specific element
         */
        get: get,


        /**
         * @name add
         * @function
         * @memberOf Store
         * @description
         * Register a new listener for the event on the specified html element.
         *
         * @param {HTMLElement} el: html element on which the event listener is set
         * @param {String} type: name of the event
         * @param {String} [delegator]: selector of the html elements which should react on the event
         * @param {Function} handler: the function that is executed when the event occurs
         *
         * @return {Object} the event's object
         */
        add: add,


        /**
         * @name del
         * @function
         * @memberOf Store
         * @description
         * @todo
         *
         * @param {HTMLElement} el: html element for which the event listener should be removed
         * @param {String} type: the name of the event
         * @param {String} [delegator]: @todo
         * @param {Function} [handler]: @todo
         *
         * @return {void}
         */
        del: del,


        /**
         * @name run
         * @method
         * @memberOf Store
         * @description
         * @todo
         *
         * @param {HTMLElement} el: the html element for which execute the event listener
         * @param {String} type: the name of the event
         * @param {Array} data: additional arguments for the event handler
         *
         * @return {void}
         */
        run: run

    }

}());
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