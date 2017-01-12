/**
 * @fileoverview JavaScript DOM event handler micro library.
 * @copyright Bruno Scopelliti 2015
 * @author Bruno Scopelliti <me@brunoscopelliti.com>
 * @license MIT
 *
 * @module src/dom-events-delegation
 */

import Store from 'event-store';

import loopProps from 'utils/loop-props';

const on = (htmlElements, type, delegator, handler) => {

    // normalize arguments
    const boundElems = toArray_(htmlElements);

    if (typeof handler == 'undefined'){
        [handler, delegator] = [delegator, handler];
    }

    boundElems.forEach(function(boundEl){
        Store.add(boundEl, type, delegator, handler);
    });
};


const off = (htmlElements, type, delegator, handler) => {

    // normalize arguments
    const boundElems = toArray_(htmlElements);

    if (typeof handler == 'undefined' && typeof delegator == 'function'){
        [handler, delegator] = [delegator, handler];
    }

    boundElems.forEach(function(boundEl){
        const events = type == null ? getAllEventTypes_(boundEl) : [type];
        events.forEach(eventName => Store.del(boundEl, eventName, delegator, handler));
    });
};


const fire = (htmlElements, type, ...data) => {
    toArray_(htmlElements)
        .forEach((el) => Store.run(el, type, data));
}


/**
 * @name DOMEvents
 */
const DOMEvents = {

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
    on: on,


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
    off: off,


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
    fire: fire

};

export default DOMEvents;


/*
 *
 * Private methods
 * 
 */


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
const toArray_ = (htmlElements) => {

    if (htmlElements == null) {
        return [];
    }

    // instances of HTMLFormElement have the length property; 
    // it's a read-only property returns the number of input fields in the <form /> element.
    if (htmlElements === window || typeof htmlElements.length == 'undefined' || htmlElements.tagName == 'FORM') {
        return [htmlElements];
    }

    return [...htmlElements];
};


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
const getAllEventTypes_ = (htmlElement) => {

    const listeners = Store.get(htmlElement);
    const uniqueEvents = Object.keys(listeners);

    loopProps(listeners, (obj, evtKey) => {
        const listenersWithTypeChanged = obj.filter(x => x.origType != evtKey);
        listenersWithTypeChanged.reduce((res, currEl) => {
            if (res.indexOf(currEl) < 0){
                res.push(currEl.origType);
            }
            return res;
        }, uniqueEvents);
    });

    return uniqueEvents;
};
