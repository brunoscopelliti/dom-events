
// work around to make the test run
// on old version (IE11) internet explorer

if (typeof MouseEvent !== 'function') {
    window.MouseEvent = function (type, dict){
        const event = document.createEvent('MouseEvents');
        event.initMouseEvent(
            type,
            (typeof dict.bubbles == 'undefined') ? true : !!dict.bubbles,
            (typeof dict.cancelable == 'undefined') ? false : !!dict.cancelable,
            dict.view || window,
            dict.detail | 0,
            dict.screenX | 0,
            dict.screenY | 0,
            dict.clientX | 0,
            dict.clientY | 0,
            !!dict.ctrlKey,
            !!dict.altKey,
            !!dict.shiftKey,
            !!dict.metaKey,
            dict.button | 0,
            dict.relatedTarget || null
        );
        return event;
    }
}

if (typeof KeyboardEvent !== 'function'){
    window.KeyboardEvent = function (type, dict){
        const event = document.createEvent('KeyboardEvent');
        event.initKeyboardEvent(
            type,
            (typeof dict.bubbles == 'undefined') ? true : !!dict.bubbles,
            (typeof dict.cancelable == 'undefined') ? false : !!dict.cancelable,
            dict.view || window,
            !!dict.ctrlKey,
            !!dict.altKey,
            !!dict.shiftKey,
            !!dict.metaKey,
            dict.keyCode,
            dict.charCode
        );
        return event;
    }

}

if (typeof UIEvent !== 'function'){
    window.UIEvent = function(type, dict) {
        const event = document.createEvent('UIEvent');
        event.initUIEvent(type, !!dict.bubbles, !!dict.cancellable, dict.view, 1);
        return event;
    }
}

if (typeof Event !== 'function'){
    const eventProto = Event.prototype;
    window.Event = function(type, dict) {
        const event = document.createEvent('Event');
        event.initEvent(type, !!dict.bubbles, !!dict.cancellable);
        return event;
    }
    window.Event.prototype = eventProto;
}




/**
 * @name trigger
 * @description
 * A simple utility to trigger events
 *
 * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements on which the event should be triggered
 * @param {String} type: the name of the event that should be triggered
 * @return {void}
 */
function trigger(htmlElements, type) {

    const elems = htmlElements === window || typeof htmlElements.length == 'undefined' || htmlElements.tagName == 'FORM' ?
        [htmlElements] : Array.from(htmlElements);

    elems.forEach(function(el) {

        let fakeEvent;

        switch(type){

            case 'click':
            case 'focus':
            case 'blur':
                return el[type]();

            case 'mousedown':
            case 'mouseup':
            case 'dblclick':
            case 'mouseover':
            case 'mouseout':
            case 'mousemove':
                fakeEvent = new MouseEvent(type, { bubbles: true, cancelable: true, view: window });
                break;

            case 'mouseenter':
            case 'mouseleave':
                fakeEvent = new MouseEvent(type, { bubbles: false, cancelable: false, view: window });
                break;

            case 'scroll':
            case 'resize':
                fakeEvent = new UIEvent(type, { view: window });
                break;

            case 'keydown':
            case 'keyup':
            case 'keypress':
                // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
                fakeEvent = new KeyboardEvent(type, { bubbles: true, cancelable: true, which: 66 });
                break;

            default:
                fakeEvent = new Event(type, { bubbles: true, cancelable: true, view: window });
                break;

        }

        return el.dispatchEvent(fakeEvent);

    });

}

export default trigger;