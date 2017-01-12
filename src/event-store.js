
import loopProps from 'utils/loop-props';


/**
 * @name eventsTable_
 * @description
 * A weak map that stores the event listeners; use html element as key
 */
const eventsTable_ = new WeakMap();


const get = (el, type = '', /* internal */ isFired) => {

    const elListeners = eventsTable_.get(el);

    if (typeof elListeners == 'undefined'){
        return [];
    }

    if (!type){
        return elListeners;
    }

    const listenersByType = elListeners[type] || [];

    if (!isFired){
        return listenersByType;
    }

    // if the event was programmatically fired (isFired === true)
    // Events.get returns also the event whose original name is `type`

    loopProps(elListeners, function(obj, evtKey) {
        const listenerMatchingOrigType = obj.filter(x => x.origType == type && x.origType != evtKey);
        listenerMatchingOrigType.reduce((res, currEl) =>
            !~res.indexOf(currEl) ? (res.push(currEl), res) : res, listenersByType);
    });

    return listenersByType;

};

const add = (el, type, delegator, handler) => {

    const eventObj = prepareStoreObject_(type, delegator, handler);

    const eventTarget = getEventsTableFixedKey_(eventObj.origType, eventObj.delegate) || el;

    if(!eventsTable_.has(eventTarget)){
        eventsTable_.set(eventTarget, {});
    }

    if(!eventsTable_.get(eventTarget)[eventObj.type]){
        eventsTable_.get(eventTarget)[eventObj.type] = [];
    }

    const handlersCount = eventsTable_.get(eventTarget)[eventObj.type].push(eventObj);

    if (handlersCount == 1) {
        if (eventObj.type == eventObj.origType || typeof special_[type].setup == 'undefined') {
            addDOMListener_(eventTarget, eventObj.type);
        }
        else if (typeof special_[type].setup == 'function') {
            special_[type].setup();
        }
    }

    return eventObj;

};

const del = (el, type, delegator, handler) => {

    const eventTarget = getEventsTableFixedKey_(type, true) || el;

    const listeners = eventsTable_.get(eventTarget);

    if (!listeners){
        return;
    }

    // the 'comparison' object is used in order to remove
    // only the handlers which have the same original type of the current event name,
    // and when provided also same delegator, and handler function
    const comparison = { origType: type };

    if (delegator){
        comparison.delegator = delegator;
    }

    if (typeof handler == 'function'){
        comparison.handler = handler;
    }

    const fixedType = getFixedEventName_(type, true);
    const eventNames = type == fixedType ? [type] : [type, fixedType];

    eventNames.forEach(function(currType) {
        if (listeners[currType]){
            listeners[currType] = exclude_(listeners[currType], compare_.bind(null, comparison));
            if (typeof listeners[currType] == 'undefined' || listeners[currType].length == 0){
                delete listeners[currType];
                if (type == fixedType || typeof special_[type].teardown == 'undefined') {
                    removeDOMListener_(eventTarget, currType);
                }
                else if (typeof special_[type].teardown == 'function') {
                    special_[type].teardown();
                }
            }
        }
    });

};


/**
 * @name firedEventType
 * @type String
 * @description
 * When the default action of an event was triggered, it contains the name of the event
 */
let firedEventType = '';

const run = (el, type, data) => {

    let executeDefault = true;

    const event = { currentTarget: el, data: data, isFired: true, target: el, type: type };
    const domTree = typeof special_[type] == 'undefined' || special_[type].bubbles ? getBubblingPath_(el) : [el];

    domTree.every(function(currElem){
        event.currentTarget = currElem;
        let { isPropagationStopped, isDefaultPrevented } = dispatch_(event);
        if (isDefaultPrevented){
            executeDefault = false;
        }
        return !isPropagationStopped;
    });

    if (executeDefault && el !== window && typeof el[event.type] == 'function'){
        firedEventType = event.type;
        el[event.type]();
        firedEventType = '';
    }
};


/**
 * @name Store
 * @description
 * Stores the event listeners set, and exposes methods to modify the collection.
 */
const Store = {

    /**
     * @name get
     * @function
     * @memberof Store
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
     * @memberof Store
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
     * @memberof Store
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
     * @memberof Store
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

export default Store;


/*
 *
 * Private methods
 * 
 */


/**
 * @name matches
 * @private
 * @description
 * Determine if the element would be selected by the specified selector string
 *
 * @param {HTMLElement} elem: The html element for which the test should be executed
 * @param {String} selector: The selector that should be used for the test
 *
 * @return {Boolean}
 */
const matches = (function(el) {

    const matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;

    return (elem, selector) => {
        if (elem === window){
            return selector == 'window';
        }
        if (elem == document){
            return selector == 'document';
        }
        return matcher.call(elem, selector);
    };

}(document.body));



/**
 * @name special_
 * @description
 * Define special behaviour for a set of events which
 * have need of special attentions
 */
const special_ = {};

// load events don't bubble up.
special_.load = { bubbles: false };


/*
 * mouse enter/leave do not bubble up ([MOV6])
 * in order to simulate the bubbling we listen for mouse over/out,
 * and then make sure that the handler is executed only when the mouse
 * enter or leave the area of the target
 */
loopProps({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function(fixedEvent, originalEvent) {
    special_[originalEvent] = {
        delegateEvent: fixedEvent,
        bubbles: true,
        decorator: function (func, handlerObj) {
            return function (event) {
                const { target, relatedTarget: related } = event;
                // For mouse enter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (matches(target, handlerObj.delegator) && (!related || !contains_(target, related, true))) {
                    return func.apply(target, [event, ...event.data]);
                }
            };
        }
    };
});

/*
 * focus/blur do not bubble up ([FRM7] to [FRM9])
 * in order to simulate the bubbling we listen for the focusin/focusout
 * on the document, during the capture phase
 * then we use Store.run to simulate the bubbling
 */
loopProps({ focus: 'focusin', blur: 'focusout' }, function(fixedEvent, originalEvent) {

    /*
     * @name specialHandler
     * @description
     * Simulate the bubbling of the focusin/focusout events
     *
     * @param {Object} event: the original event object
     *
     * @return {void}
     */
    const specialHandler = (event) => Store.run(event.target, fixedEvent);

    special_[originalEvent] = {
        boundElement: document,
        delegateEvent: fixedEvent,
        bubbles: true,
        setup: function() {
            this.boundElement.addEventListener(originalEvent, specialHandler, true);
        },
        teardown: function() {
            this.boundElement.removeEventListener(originalEvent, specialHandler, true);
        }
    };

});



/**
 * @name guid_
 * @description
 * An unique id for a listener entry in the Store's registry
 */
let guid_ = 0;


/**
 * @name guid
 * @description
 * Symbol used to store the guid_ of the handler's objects
 */
const guid = Symbol('EVStore_guid');


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
const prepareStoreObject_ = (type, delegator, handler) => {

    const id = ++guid_;
    const isDelegate = delegator != null;
    const fixedType = getFixedEventName_(type, isDelegate);

    const eventObj = Object.create(null);

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
        if (special_[type] && typeof special_[type].decorator == 'function'){
            eventObj.handler = special_[type].decorator(handler, eventObj);
        }
    }

    return eventObj;
};


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
const getFixedEventName_ = (type, isDelegate = false) => {

    if (!isDelegate || typeof special_[type] == 'undefined'){
        return type;
    }

    return special_[type].delegateEvent;
};


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
const getEventsTableFixedKey_ = (type, isDelegate = false) => {

    if (!isDelegate || typeof special_[type] == 'undefined'){
        return null;
    }

    return special_[type].boundElement || null;
};


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
const addDOMListener_ = (el, type) => el.addEventListener(type, dispatch_, false);


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
const removeDOMListener_ = (el, type) => el.removeEventListener(type, dispatch_, false);



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
const dispatch_ = (origEvent) => {

    /*
     * when the default action of a programmatically triggered event is executed,
     * it's necessary to prevent the execution of the handler,
     * otherwise the handlers are executed twice.
     * we check the event type because a programmatically triggered event
     * can be the cause of an event of different type.
     * test cases [FI08] to [FI11]
     */
    if (isDefaultActionFired_(origEvent.type)) {
        return false;
    }


    const event = prepareEventObject_(origEvent);

    const eventObjs = Store.get(event.currentTarget, event.type, event.isFired);


    /*
     * here we're rising the DOM tree, starting from the target element,
     * till we reach the element on which the event was bound.
     * for each element we check if it is the "delegator" of a registered event;
     * in this case the the corresponding handler object is executed.
     */
    domUp_(event.target, event.currentTarget, function(currElem) {

        if (currElem.disabled && event.type == 'click'){
            return;
        }

        eventObjs.forEach(function findMatchOnTheCurrentNode_(eventObj) {

            if (!eventObj.delegate || (eventObj.delegate && !contains_(currElem, eventObj.delegator))){
                // in case the element on which the event was triggered does not contain the delegator
                // exit soon
                return;
            }

            if (matches(currElem, eventObj.delegator)) {
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

    if (!event.currentTarget.disabled || event.type != 'click'){
        eventObjs.filter(x => !x.delegate).forEach(runHandler_, event);
    }

    // return info about the propagation state
    return { isPropagationStopped: event.isPropagationStopped, isDefaultPrevented: event.isDefaultPrevented };

};


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
const isDefaultActionFired_ = (type) => firedEventType == type || getFixedEventName_(firedEventType, true) == type;


/**
 * @name eventBase_
 * @description
 * Redefine stopPropagation/preventDefault methods for the custom event object.
 */
const eventBase_ = Object.create(null, {

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
const prepareEventObject_ = (origEvent) => {

    const event = Object.create(eventBase_);

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

    event.currentTarget = origEvent.currentTarget;
    event.relatedTarget = origEvent.relatedTarget;
    event.target = origEvent.target;
    event.type = origEvent.type;

    if (isEventObject_(origEvent)) {
        event.originalEvent = origEvent;
    }

    return event;

};


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
const isEventObject_ = (obj) => /Event]$/.test(Object.prototype.toString.call(obj));


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
const domUp_ = (startEl, stopEl, func) => {

    if (typeof stopEl == 'function'){
        [func, stopEl] = [stopEl, window];
    }

    let visitorEl = startEl;
    let repeat = true;

    do {
        repeat = func.call(visitorEl, visitorEl);
    } while(repeat !== false && visitorEl != stopEl && (visitorEl = visitorEl.parentNode));

};


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
const contains_ = (container, contained, strictly) => {
    if (typeof contained == 'string'){
        const box = strictly ? container : container.parentNode || document;
        return box.querySelectorAll(contained).length > 0;
    }
    return (!strictly || container !== contained) && container.contains(contained);
};


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

    const target = eventObj.currentTarget || this.currentTarget;

    if (eventObj.handler.call(target, this) === false){
        this.stopPropagation();
        this.preventDefault();
    }
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
const exclude_ = (list, predicate) => list.filter((val, k, orig) => !predicate(val, k, orig));


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
const compare_ = (comparator, subjectObj) => 
    loopProps(comparator, (prop, k) => 
        typeof prop == 'function' ? subjectObj[k][guid] === prop[guid] : subjectObj[k] === prop);


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
const getBubblingPath_ = (el) => {

    const path = [];

    do {
        path.push(el);
    } while((el = el.parentNode));

    if (path[path.length-1] === document){
        path.push(window);
    }

    return path;
};
