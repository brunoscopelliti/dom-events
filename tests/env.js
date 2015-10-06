
var exports = {};

window.$$ = document.querySelectorAll.bind(document);

var _ = (function() {

    var assert = QUnit.assert;

    var dict_ = {
        once: "${who} should be called only one time [called ${n}]",
        never: "${who} should be never called [called ${n}]"
    };

    function duckCheck_(subject, props){
        var quack = true;
        props.forEach(function(prop){
            if (typeof subject[prop] == "undefined"){ quack = false; }
        });
        return quack;
    };



    function type(subject, subjectName, expectedType){
        assert.equal(typeof subject, expectedType, subjectName + " is " + expectedType);
    };

    function typeFunction(subject, subjectName){
        type(subject, subjectName, "function");
    };

    function typeEventObject(subject){
        var isEventObject = subject.originalEvent instanceof Event || duckCheck_(subject, ["currentTarget", "target", "type"]);
        assert.ok(isEventObject, "The parameter is an event object");
    };

    function one(subjectName, callNumber){
        return dict_.once.replace("${who}", subjectName).replace("${n}", callNumber);
    };

    function none(subjectName, callNumber){
        return dict_.never.replace("${who}", subjectName).replace("${n}", callNumber);
    };



    var exports_ = {
        one: one,
        none: none,
        typeFn: typeFunction,
        typeEvent: typeEventObject
    };

    return exports_;

}());



/**
 * @name xtest
 * @description
 * It's a noop function; useful to skip a test
 *
 * @param {String} name: test name
 */
function xtest(name){
    console.log('SKIPPED', name);
}


/**
 * @name setup
 * @description
 * A simple utility to prepare the page's content
 *
 * @param {String} dom: the page's new content
 */
function setup(dom){
    document.body.innerHTML = '<div id="test-container"></div>';
    $$("#test-container")[0].innerHTML = dom;
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
    var elems = htmlElements === window || typeof htmlElements.length == "undefined" ? [htmlElements] : Array.from(htmlElements);
    elems.forEach(function(el) {
        var fakeEvent;
        switch(type){
            case "click":
            case "submit":
            case "focus":
            case "blur":
                return el[type]();
            case "mousedown":
            case "mouseup":
            case "dblclick":
            case "mouseover":
            case "mouseout":
            case "mousemove":
                fakeEvent = new MouseEvent(type, { bubbles: true, cancelable: true, view: window });
                break;
            case "mouseenter":
            case "mouseleave":
                fakeEvent = new MouseEvent(type, { bubbles: false, cancelable: false, view: window });
                break;
            case "scroll":
            case "resize":
                fakeEvent = new UIEvent(type, { view: window });
                break;
            case "keydown":
            case "keyup":
            case "keypress":
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