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
 *
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
     * Symbol used to store the guid_ of the handler's objects
     */
    const guid = Symbol("EVStore_guid");



    /**
     * @name eventBase_
     * @description
     * Redefine stopPropagation/preventDefault methods for the custom event object.
     */
    var eventBase_ = Object.create(null, {

        stopPropagation: {
            value: function() {
                this.isPropagationStopped = true;
                if (this.originalEvent) {
                    this.originalEvent.stopPropagation();
                }
            }
        },

        preventDefault: {
            value: function() {
                this.isDefaultPrevented = true;
                if (this.originalEvent){
                    this.originalEvent.preventDefault();
                }
            }
        }

    });


    /**
     * @name special_
     * @description
     * Define special behaviour for a set of events which
     * have need of special attentions
     */
    var special_ = (function() {

        var specials = {};

        // mouse enter/leave do not bubble up ([MOV6])
        // in order to simulate the bubbling we listen for mouse over/out,
        // and then make sure that the handler is executed only when the mouse
        // enter or leave the area of the target
        loopProps_({mouseenter: "mouseover", mouseleave: "mouseout"}, function(fixedEvent, originalEvent) {
            specials[originalEvent] = {
                delegateEvent: fixedEvent,
                decorator: function (func, handlerObj) {
                    return function (event) {
                        var { target, relatedTarget: related } = event;
                        // For mouse enter/leave call the handler if related is outside the target.
                        // NB: No relatedTarget if the mouse left/entered the browser window
                        if (match_(target, handlerObj.delegator) && (!related || !contains_(target, related, true))) {
                            return func.apply(target, [event, ...event.data]);
                        }
                    };
                }
            };
        });


        // focus/blur do not bubble up ([FRM7] to [FRM9])
        // in order to simulate the bubbling we listen for the focusin/focusout
        // on the document, during the capture phase
        // then we use Store.run to simulate the bubbling
        loopProps_({focus: "focusin", blur: "focusout"}, function(fixedEvent, originalEvent) {

            /*
             * @name specialHandler
             * @description
             * Simulate the bubbling of the focusin/focusout events
             *
             * @param {Object} event: the original event object
             *
             * @return {void}
             */
            function specialHandler(event){
                Store.run(event.target, fixedEvent);
            }

            specials[originalEvent] = {
                boundElement: document,
                delegateEvent: fixedEvent,
                setup: function() {
                    this.boundElement.addEventListener(originalEvent, specialHandler, true);
                },
                teardown: function() {
                    this.boundElement.removeEventListener(originalEvent, specialHandler, true);
                }
            };

        });

        return specials;

    }());


    /**
     * @name firedEventType
     * @type String
     * @description
     * When the default action of an event was triggered, it contains the name of the event
     */
    var firedEventType = "";


    /**
     * @name eventsTable_
     * @description
     * A weak map that stores the event listeners; use html element as key
     */
    const eventsTable_ = new WeakMap();


    /*
     * Public api
     */

    function get(el, type = "", /* internal */ isFired) {

        var elListeners = eventsTable_.get(el);

        if (typeof elListeners == "undefined"){
            return [];
        }

        if (!type){
            return elListeners;
        }

        if (!isFired){
            return elListeners[type] || [];
        }

        // if the event was programmatically fired (isFired === true)
        // Events.get returns also the event whose original name is <type>

        let uniqueListeners = new Set(elListeners[type]);

        loopProps_(elListeners, function(obj, evtKey) {
            obj.filter(x => x.origType == type && x.origType != evtKey).forEach(x => uniqueListeners.add(x));
        });

        return [...uniqueListeners];

    }

    
    function add(el, type, delegator, handler) {

        var eventObj = prepareStoreObject_(type, delegator, handler);

        el = getEventsTableFixedKey_(eventObj.origType, eventObj.delegate) || el;

        if(!eventsTable_.has(el)){
            eventsTable_.set(el, {});
        }

        if(!eventsTable_.get(el)[eventObj.type]){
            eventsTable_.get(el)[eventObj.type] = [];
        }

        let handlersCount = eventsTable_.get(el)[eventObj.type].push(eventObj);

        if (handlersCount == 1) {
            if (eventObj.type == eventObj.origType || typeof special_[type].setup == "undefined") {
                addDOMListener_(el, eventObj.type);
            }
            else if (typeof special_[type].setup == "function") {
                special_[type].setup();
            }
        }

        return eventObj;

    }


    function del(el, type, delegator, handler) {

        el = getEventsTableFixedKey_(type, true) || el;

        var listeners = eventsTable_.get(el);

        if (!listeners){
            return;
        }

        // the 'comparison' object is used in order to remove
        // only the handlers which have the same original type of the current event name,
        // and when provided also same delegator, and handler function
        var comparison = { origType: type };

        if (delegator){
            comparison.delegator = delegator;
        }

        if (typeof handler == "function"){
            comparison.handler = handler;
        }

        let fixedType = getFixedEventName_(type, true);
        let eventNames = new Set([type, fixedType]);

        eventNames.forEach(function(currType) {
            if (listeners[currType]){
                listeners[currType] = exclude_(listeners[currType], compare_.bind(null, comparison));
                if (typeof listeners[currType] == "undefined" || listeners[currType].length == 0){
                    delete listeners[currType];
                    if (type == fixedType || typeof special_[type].teardown == "undefined") {
                        removeDOMListener_(el, currType);
                    }
                    else if (typeof special_[type].teardown == "function") {
                        special_[type].teardown();
                    }
                }
            }
        });

    }


    function run(el, type, data) {

        var executeDefault = true;

        var event = { currentTarget: el, data: data, isFired: true, target: el, type: type };
        var domTree = getBubblingPath_(el);

        domTree.every(function(currElem){
            event.currentTarget = currElem;
            let { isPropagationStopped, isDefaultPrevented } = dispatch_(event);
            if (isDefaultPrevented){
                executeDefault = false;
            }
            return !isPropagationStopped;
        });

        if (executeDefault && !isWindow_(el) && typeof el[event.type] == "function"){
            firedEventType = event.type;
            el[event.type]();
            firedEventType = "";
        }
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
         * @param {Boolean} [isFired]: is true when the event was triggered by the code
         *
         * @return {Object|Array} the list of the events set on the specific element
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
         * Remove the event listener for the event on the specified html element.
         *
         * @param {HTMLElement} el: html element for which the event listener should be removed
         * @param {String} type: the name of the event
         * @param {String} [delegator]
         * @param {Function} [handler]
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
     * @name getFixedEventName_
     * @function
     * @private
     * @description
     * Return the name of the event we use to simulate another one
     * (names may differ for events which don't bubble, or have special behaviour)
     *
     * @param {String} type: the name of the event
     * @param {Boolean} [isDelegate]: true when event listener is used through event delegation
     *
     * @return {String}
     */
    function getFixedEventName_(type, isDelegate = false){

        if (!isDelegate || typeof special_[type] == "undefined"){
            return type;
        }

        return special_[type].delegateEvent;
    }


    /**
     * @name getEventsTableFixedKey_
     * @function
     * @private
     * @description
     * Some special event listeners should be attached on particular DOM element;
     * this function returns that element, or null for the normal events.
     *
     * @param {String} type: the name of the event
     * @param {Boolean} [isDelegate]: true when event listener is used through event delegation
     *
     * @return {null|HTMLElement}
     */
    function getEventsTableFixedKey_(type, isDelegate = false){

        if (!isDelegate || typeof special_[type] == "undefined"){
            return null;
        }

        return special_[type].boundElement || null;
    }


    /**
     * @name prepareStoreObject_
     * @function
     * @private
     * @description
     * Returns the object with the main info about the registered event listener;
     * the object then will be stored, and kept in memory until the listener, or the
     * html element are removed.
     *
     * @param {String} type: the name of the event
     * @param {String} delegator: selector of the html elements which should react on the event
     * @param {Function} handler: the function that is executed when the event occurs
     *
     * @return {Object}
     */
    function prepareStoreObject_(type, delegator, handler){

        var id = ++guid_;
        var isDelegate = delegator != null;
        var fixedType = getFixedEventName_(type, isDelegate);

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
         * {String} delegator
         * The delegator selector
         */
        eventObj.delegator = delegator;

        /**
         * {String} origType
         * the original event name
         */
        eventObj.origType = type;

        /**
         * {String} type
         * The event name
         */
        eventObj.type = fixedType;

        /**
         * {Function} handler
         * Function that should be executed when the event is triggered
         */
        eventObj.handler = function(event) {
            return handler.apply(this, [event, ...event.data]);
        };

        // we're putting a mark on the handler function
        // so that when the time comes it will be easy to remove the listener
        if(!handler[guid]){
            handler[guid] = eventObj.handler[guid] = id;
        }
        else {
            eventObj.handler[guid] = handler[guid];
        }

        // if for the current event we've setup a special handler
        // in order to apply that strategy we've to decorate the event handler
        if (type != fixedType){
            if (special_[type] && typeof special_[type].decorator == "function"){
                eventObj.handler = special_[type].decorator(handler, eventObj);
            }
        }

        return eventObj;
    }


    /**
     * @name getBubblingPath_
     * @function
     * @private
     * @description
     * Returns an array with all the parent nodes of the provided element.
     * The first element of the array is the element itself; the latest is the window object.
     *
     * @param {HTMLElement}
     *
     * @return {Array}
     */
    function getBubblingPath_(el){
        var path = [];

        do {
            path.push(el)
        } while((el = el.parentNode));

        if (path[path.length-1] === document){
            path.push(window);
        }

        return path;
    }


    /**
     * @name exclude_
     * @function
     * @private
     * @description
     * The opposite of Array#filter;
     * It returns the elements of collection that predicate does not return truthy for
     *
     * @param {Array} list: the array that should be reverse-filtered
     * @param {Function} predicate: the function that should be used for the filtering
     *
     * @return {Array} the filtered list
     */
    function exclude_(list, predicate){

        return list.filter((val, k, orig) => !predicate.call(this, val, k, orig));

    }


    /**
     * @name compare_
     * @function
     * @private
     * @description
     * Compare the properties of the two object it receives as parameters
     *
     * @param {Object} comparator: the properties on the basis of which we say the two object match; it should be a subset of subjectObj's properties
     * @param {Object} subjectObj: the object that should be compared
     *
     * @return {Boolean} true when the object match
     */
    function compare_(comparator, subjectObj){

        return loopProps_(comparator, (prop, k) => typeof prop == "function" ?
            subjectObj[k][guid] === prop[guid] : subjectObj[k] === prop);

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
     *
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
     *
     * @return {void}
     */
    function removeDOMListener_(el, type){

        el.removeEventListener(type, dispatch_, false);

    }


    /**
     * @name dispatch_
     * @function
     * @private
     * @description
     * Is the function used as handler for the event listener;
     * it controls the execution of all the listeners for the current event.
     *
     * @param {Object} origEvent: the real event object
     *
     * @return {Object} Information about propagation state
     */
    function dispatch_(origEvent){

        // when the default action of a programmatically triggered event is executed,
        // it's necessary to prevent the execution of the handler,
        // otherwise the handlers are executed twice.
        // we check the event type because a programmatically triggered event
        // can be the cause of an event of different type.
        // check test cases [FI08] to [FI11]
        if (isDefaultActionFired_(origEvent.type)) {
            return false;
        }


        const event = prepareEventObject_(origEvent);

        var eventObjs = Store.get(event.currentTarget, event.type, event.isFired);


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
                    eventObj.currentTarget = currElem;
                    runHandler_.call(event, eventObj);
                    delete eventObj.currentTarget;
                }

            });

            // in case the event bubbling was stopped
            // returning false would break domUp_'s rise
            return !event.isPropagationStopped;

        });

        if (event.isPropagationStopped){
            return { isPropagationStopped: true, isDefaultPrevented: event.isDefaultPrevented };
        }

        // ... then executes the directly bound events

        if (!event.currentTarget.disabled || event.type != "click"){
            eventObjs.filter(x => !x.delegate).forEach(runHandler_, event);
        }

        // return info about the propagation state
        return { isPropagationStopped: event.isPropagationStopped, isDefaultPrevented: event.isDefaultPrevented }

    }


    /**
     * @name isDefaultActionFired_
     * @function
     * @private
     * @description
     * Check if the event currently dispatched is caused by
     * the triggering of the event default action.
     * In this case the dispatching should be blocked.
     *
     * @param {String} type: the name of the event
     *
     * @return {Boolean}
     */
    function isDefaultActionFired_(type) {

        return firedEventType == type || getFixedEventName_(firedEventType, true) == type;

    }


    /**
     * @name prepareEventObject_
     * @function
     * @private
     * @description
     * Prepare the custom event object
     *
     * @param {Object} origEvent: original event object
     *
     * @return {Object} Custom event object
     */
    function prepareEventObject_(origEvent){

        var event = Object.create(eventBase_);

        /**
         * {Array} data
         * Additional arguments provided to the handler
         */
        event.data = origEvent.data || [];

        /**
         * {Boolean} isFired
         * Define if the event has been fired programmatically
         */
        event.isFired = origEvent.isFired || false;

        // @todo find out which property good to have;
        // @todo find out a smarter way to make the copy;

        event.currentTarget = origEvent.currentTarget;
        event.relatedTarget = origEvent.relatedTarget;
        event.target = origEvent.target;
        event.type = origEvent.type;

        if (isEventObject_(origEvent)) {
            event.originalEvent = origEvent;
        }

        return event;

    }


    /**
     * @name domUp_
     * @function
     * @private
     * @description
     * Executes the provided function for each DOM element starting from startEl,
     * till stopEl (default window).
     * If the callback return false, the execution is interrupted.
     *
     * @param {HTMLElement} startEl: html element from which the climb the DOM tree starts
     * @param {HTMLElement} stopEl: html element on which the DOM traversing should be interrupted
     * @param {Function} func: function executed for each element; receives the current element as parameter
     *
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
     * @name runHandler_
     * @function
     * @private
     * @description
     * Executes the event handler, and the event default action (if any exists)
     *
     * @param {Object} eventObj: the event object
     *
     * @return {void}
     */
    function runHandler_(eventObj){

        var target = eventObj.currentTarget || this.currentTarget;

        if (eventObj.handler.call(target, this) === false){
            this.stopPropagation();
            this.preventDefault();
        }
    }


}());



/**
 * @name DOMEvents
 */
var DOMEvents = {

    /**
     * @name debug
     * @function
     * @memberOf DOMEvents
     * @description
     * Get the list of the event listeners registered on a particular html element.
     * Exposes Store.get method.
     *
     * @param {HTMLElement} htmlElement: the html element for which to get events' information
     * @param {String} type: the name of the event
     *
     * @return {Array} the list of the events set on the element
     */
    debug: Store.get,


    /**
     * @name on
     * @function
     * @memberOf DOMEvents
     * @description
     * Add an event listener on the DOM elements passed as parameter.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be set
     * @param {String} type: the name of the event
     * @param {String} delegator: the selector of the elements which should react on the event
     * @param {Function} handler: the function that should be called when the event is triggered
     *
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
     * @description
     * Remove the event listeners which match the parameters
     * from the DOM elements passed as first argument.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be removed
     * @param {String} [type]: the name of the event
     * @param {String} [delegator]
     * @param {Function} [handler]
     *
     * @return {void}
     */
    off: function off(htmlElements, type, delegator, handler) {

        // normalize arguments
        var boundElems = toArray_(htmlElements);

        if (typeof handler == "undefined" && typeof delegator == "function"){
            [handler, delegator] = [delegator, handler];
        }

        boundElems.forEach(function(boundEl){
            var events = type == null ? getAllEventTypes_(boundEl) : [type];
            events.forEach(eventName => Store.del(boundEl, eventName, delegator, handler));
        });

    },


    /**
     * @name fire
     * @function
     * @memberOf DOMEvents
     * @description
     * Simulate the triggering of the event 'type' on the elements 'htmlElements'.
     * It executes the handlers attached on 'htmlElements', and simulate the bubbling of the event, on their parents.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which simulate the event
     * @param {String} type: the name of the event
     * @param {Any} data: additional arguments for the event handler
     *
     * @return {void}
     */
    fire: function fire(htmlElements, type, ...data) {

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
 * @function
 * @private
 * @description
 * Returns the html element(s) it receives as arguments as an array
 *
 * @param {Any} htmlElements: it could be the window, an Array-like with HTMLElement, more...
 *
 * @return {Array}
 */
function toArray_(htmlElements) {

    if (htmlElements == null) {
        return [];
    }

    // instances of HTMLFormElement have the length property; it's a read-only property returns the number of controls in the <form> element.
    if (isWindow_(htmlElements) || typeof htmlElements.length == "undefined" || htmlElements.tagName == "FORM") {
        return [htmlElements];
    }

    return Array.from(htmlElements);
}


/**
 * @name isWindow_
 * @function
 * @private
 * @description
 * Return true if the parameter is the browser global object, window
 *
 * @param {Any} obj
 *
 * @return {Boolean}
 */
function isWindow_(obj){
    return obj === window;
}


/**
 * @name isEventObject_
 * @function
 * @private
 * @description
 * Determine if the parameter provided is an event object (instanceof Event).
 * Returns true if 'obj' is an event object.
 *
 * @param {Object} obj: the object subject of the test
 *
 * @return {Boolean}
 */
function isEventObject_(obj){
    return /Event]$/.test(Object.prototype.toString.call(obj));
}


/**
 * @name contains_
 * @function
 * @private
 * @description
 * Returns a Boolean value indicating whether 'contained' is a descendant of 'container'.
 * When 'strictly' is falsy, 'contained' is considered a descendant of 'container' even if they are the same element.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement|String} contained
 * @param {Boolean} strictly: when container = contained, define if contains_ should return true or false
 *
 * @return {Boolean}
 */
function contains_(container, contained, strictly){
    if (typeof contained == "string"){
        let box = strictly ? container : container.parentNode || document;
        return box.querySelectorAll(contained).length > 0;
    }
    return (!strictly || container !== contained) && container.contains(contained);
}


/**
 * @name getAllEventTypes_
 * @function
 * @private
 * @description
 * Return the list of all the event types set on a particular DOM element.
 *
 * @param {HTMLElement} htmlElement: the element on which search for the listeners
 *
 * @return {Array} the list of all the events set on a particular DOM element
 */
function getAllEventTypes_(htmlElement){

    var listeners = Store.get(htmlElement);
    var uniqueEvents = new Set(Object.keys(listeners));

    loopProps_(listeners, function(obj, evtKey) {
        obj.filter(x => x.origType != evtKey).forEach(x => uniqueEvents.add(x.origType));
    });

    return [...uniqueEvents];
}


/**
 * @name loopProps_
 * @private
 * @description
 * Loop over the properties of the target object executing the iterator function;
 * break the loop when iterator returns false; returns true if the loop is completed.
 *
 * @param {Object} obj: target object
 * @param {Function} iterator: the function that should be executed for each property
 * @param {Object} [context]: the context of execution for the iterator
 *
 * @return {Boolean} false if the loop was interrupted
 */
function loopProps_(obj, iterator, context = this){
    for (let k in obj){
        if (Object.prototype.hasOwnProperty.call(obj, k)){
            if (iterator.call(context, obj[k], k, obj) === false){
                return false;
            }
        }
    }
    return true;
}



export default DOMEvents;

// Store is exported to permit test
export { Store as EventsStore };