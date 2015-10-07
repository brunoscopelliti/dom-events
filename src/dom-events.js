/**
 * @fileoverview JavaScript DOM event handler micro library.
 * @copyright Bruno Scopelliti 2015
 * @author Bruno Scopelliti <me@brunoscopelliti.com>
 * @license MIT
 *
 * @module src/dom-events
 */


/**
 * @name match_
 * @private
 * @description
 * Determine if the element would be selected by the specified selector string
 *
 * @param {HTMLElement} elem: The html element for which the test should be executed
 * @param {String} selector: The selector that should be used for the test
 * @return {Boolean}
 */
var match_ = (function(el) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;

    return function(elem, selector) {
        if (isWindow_(elem)){
            return selector == "window";
        }
        if (elem == document){
            return selector == "document";
        }
        return matcher.call(elem, selector);
    };
}(document.body));


/**
 * @name Store
 * @description
 * Stores the event listeners set, and exposes methods to modify the collection.
 */
var Store = (function() {

    /**
     * @name guid_
     * @description
     * An unique id for a listener entry in the Store's registry
     */
    var guid_ = 0;


    /**
     * @name guid
     * @description
     * Symbol used to store the id of the handler's objects
     */
    const guid = Symbol("EVStore_guid");


    /**
     * @name eventsTable_
     * @description
     * A weak map that stores the event listeners; use html element as key
     */
    const eventsTable_ = new WeakMap();


    /*
     * Public api
     */

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


    function del(el, type, delegator, handler) {

        throw "to be implemented";

    }


    function run(el, type, data) {

        // throw "to be implemented";

        var fakeEvent = {
            currentTarget: el,
            data: data,
            target: el,
            type: type
        };

        simulateBubbling_(fakeEvent);

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
         * Simulate the triggering of the event 'type' on the element 'el'.
         * It executes the handlers attached on 'el', and simulate the bubbling of the event.
         *
         * @param {HTMLElement} el: the html element for which execute the event listener
         * @param {String} type: the name of the event
         * @param {Array} data: additional arguments for the event handler
         *
         * @return {void}
         */
        run: run

    };


    /*
     * Private methods
     */


    /**
     * @name prepareEventObject_
     * @function
     * @private
     * @description
     * @todo
     *
     * @param {String} type: the name of the event
     * @param {String} delegator: selector of the html elements which should react on the event
     * @param {Function} handler: the function that is executed when the event occurs
     * @return {Object}
     */
    function prepareEventObject_(type, delegator, handler){

        var id = ++guid_;
        var isDelegate = delegator != null;

        var eventObj = Object.create(null);



        /**
         * {Number} guid
         * Unique id for this entry
         */
        eventObj[guid] = id;

        /**
         * {Boolean} delegate
         * It is true for delegated listener
         */
        eventObj.delegate = isDelegate;

        /**
         * {Function} handler
         * Function that should be executed when the event is triggered
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
         * The delegator selector
         */
        eventObj.delegator = delegator;

        /**
         * {HTMLElement} delegatorEl
         * The delegator element on which the event occurred
         */
        eventObj.delegatorEl = null;

        /**
         * {String} type
         * The event name
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


}());







/**
 * @name domUp_
 * @private
 * @description
 * Executes the provided function for each dom element starting from startEl,
 * till stopEl (default window).
 * If the callback return false, the execution is interrupted.
 *
 * @param {HTMLElement} startEl: html element from which the climb the DOM tree starts
 * @param {HTMLElement} stopEl: html element on which the DOM traversing should be interrupted
 * @param {Function} func: function executed for each element; receives the current element as paramenter
 * @return {void}
 */
function domUp_(startEl, stopEl, func){

    if (typeof stopEl == "function"){
        [func, stopEl] = [stopEl, window];
    }

    let visitorEl = startEl;
    let repeat = true;

    do {
        repeat = func.call(visitorEl, visitorEl);
    } while(repeat !== false && visitorEl != stopEl && (visitorEl = visitorEl.parentNode));

}



/**
 * @name dispatch_
 * @private
 * @description
 * Is the function used as handler for the event listener;
 * it controls the execution of all the listeners for the current event.
 *
 * @param {Object} evt: the real event object
 *
 * @returns {void}
 */
function dispatch_(event){

    // all the events (both delegates, both directly bound)
    // registered on the event current target
    var eventObjs = Store.get(event.currentTarget, event.type);

    // here we're rising the DOM tree, starting from the target element,
    // till we reach the element on which the event was bound.
    // for each element we check if it is the "delegator" of a registered event;
    // in this case the the corresponding handler object is executed.
    domUp_(event.target, event.currentTarget, function(currElem) {

        if (currElem.disabled && event.type == "click"){
            return;
        }

        eventObjs.forEach(function findMatchOnTheCurrentNode_(eventObj) {

            if (!eventObj.delegate || (eventObj.delegate && !contains_(currElem, eventObj.delegator))){
                // in case the element on which the event was triggered does not contain the delegator
                // exit soon
                return;
            }

            if (match_(currElem, eventObj.delegator)) {

                // @todo handle stop propagation


                decorateEventObject_(eventObj, event);

                eventObj.handler.call(currElem, eventObj);
            }
        });

    });

    // ... then add the directly bound events

    eventObjs.filter(x => !x.delegate).forEach(function(eventObj) {

        if (event.currentTarget.disabled && event.type == "click"){
            return;
        }

        decorateEventObject_(eventObj, event);

        eventObj.handler.call(event.currentTarget, eventObj);
    });

}


function getBubblingPath_(el){
    var path = [];

    do {
        path.push(el)
    } while((el = el.parentNode));

    if (path[path.length-1]===document){
        path.push(window);
    }

    return path;
}

function simulateBubbling_(event){
    var domTree = getBubblingPath_(event.target);
    domTree.forEach(function(el){
        event.currentTarget = el;
        dispatch_(event);
    });
}






/**
 * @name DOMEvents
 */
var DOMEvents = {

    /**
     * @name debug
     * @function
     * @memberOf DOMEvents
     */
    debug: function debug() {},

    /**
     * @name on
     * @function
     * @memberOf DOMEvents
     * @description
     * Add an event listener on the dom elements passed as parameter.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be set
     * @param {String} type: the name of the event
     * @param {String} delegator: the selector of the elements which should react on the event
     * @param {Function} handler: the function that should be called when the event is triggered
     * @return {void}
     */
    on: function on(htmlElements, type, delegator, handler){

        // normalize arguments
        var boundElems = toArray_(htmlElements);

        if (typeof handler == "undefined"){
            [handler, delegator] = [delegator, handler];
        }

        boundElems.forEach(function(boundEl){
            Store.add(boundEl, type, delegator, handler);
        });

    },

    /**
     * @name off
     * @function
     * @memberOf DOMEvents
     */
    off: function off() {},

    /**
     * @name fire
     * @function
     * @memberOf DOMEvents
     *
     *
     * @todo
     *
     */
    fire: function fire(htmlElements, type, data) {

        // normalize arguments
        var elems = toArray_(htmlElements);

        elems.forEach(function(el) {

            // @todo check if the event bubbles up

            Store.run(el, type, data);

        });

    }

};



/**
 * @name toArray_
 * @private
 * @description
 * Returns the html element(s) it receives as arguments as an array
 *
 * @param {Any} htmlElements: @todo
 * @return {Array}
 */
function toArray_(htmlElements) {
    if (htmlElements == null) {
        return [];
    }
    if (isWindow_(htmlElements) || typeof htmlElements.length == "undefined") {
        return [htmlElements];
    }
    return Array.from(htmlElements);
}


/**
 * @name isWindow_
 * @private
 * @description
 * Return true if the parameter is the browser global object, window
 *
 * @param {Any} obj
 * @return {Boolean}
 */
function isWindow_(obj){
    return obj === window;
}


function isEventObject_(obj){
    return /Event]$/.test(Object.prototype.toString.call(obj));
}


function decorateEventObject_(obj, event){

    if (isEventObject_(obj)) {
        obj.originalEvent = event;
    }

    obj.currentTarget = event.currentTarget;
    obj.target = event.target;

}



/**
 * @name contains_
 * @private
 * @description
 * Returns a Boolean value indicating whether 'contained' is a descendant of 'container'.
 * When 'strictly' is falsy, 'contained' is considered a descendant of 'container' even if they are the same element.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement|String} contained
 * @param {Boolean} strictly: when container = contained, define if contains_ should return true or false
 * @return {Boolean}
 */
function contains_(container, contained, strictly){
    if (typeof contained == "string"){
        let box = strictly ? container : container.parentNode || document;
        return box.querySelectorAll(contained).length > 0;
    }
    return (!strictly || container !== contained) && container.contains(contained);
}


export default DOMEvents;

// Store is exported to permit test
export { Store as EventsStore };