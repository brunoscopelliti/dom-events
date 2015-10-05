
var exports = {};

window.$$ = document.querySelectorAll.bind(document);

var _ = (function() {

    var assert = QUnit.assert;

    var dict_ = {
        once: "${who} should be called only one time [called ${n}]",
        never: "${who} should be never called [called ${n}]"
    };
    function type(subject, subjectName, expectedType){
        assert.equal(typeof subject, expectedType, subjectName + " is " + expectedType);
    };

    function typeFunction(subject, subjectName){
        type(subject, subjectName, "function");
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
    };

    return exports_;

}());



/**
 * @name setup
 * @description A simple utility to prepare the page's content
 * @param {String} dom: the page's new content
 */
function setup(dom){
    document.body.innerHTML = '<div id="test-container"></div>';
    $$("#test-container")[0].innerHTML = dom;
}

/**
 * @name xtest
 * @description It's a noop function; useful to skip a test
 * @param {String} name: test name
 */
function xtest(name){
    console.log('SKIPPED', name);
}
