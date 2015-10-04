
var exports = {};

window.$$ = document.querySelectorAll.bind(document);

var _ = (function() {

    var assert = QUnit.assert;

    function type(subject, subjectName, expectedType){
        assert.equal(typeof subject, expectedType, subjectName + " is " + expectedType);
    };

    function typeFunction(subject, subjectName){
        type(subject, subjectName, "function");
    };


    var exports_ = {
        typeFn: typeFunction
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
