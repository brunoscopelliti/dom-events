
function AssertionResult(result, actual, expected, message){
    this.result = result;
    this.actual = actual;
    this.expected = expected;
    this.message = message;
}

QUnit.assert.type = function(subject, expectedType, message) {
    const currentType = typeof subject;
    const assertionResult = new AssertionResult(currentType == expectedType, currentType, expectedType, message);
    this.pushResult(assertionResult);
};




QUnit.assert.emptyObject = function(subject) {
    const assertionResult = new AssertionResult(isEmptyObject_(subject), JSON.stringify(subject), '{}', 'Object must be empty');
    this.pushResult(assertionResult);
};

function isEmptyObject_(obj) {
    if (!obj || typeof obj != 'object'){
        return false;
    }
    for (var prop in obj){
        return false;
    }
    // there is no need for this in my use case,
    // if (typeof Symbol == 'function' && Object.getOwnPropertySymbols(obj).length){
    //     return false;
    // }
    return Object.prototype.toString.call(obj) == '[object Object]';
}





QUnit.assert.eventObject = function(subject) {
    const assertionResult = new AssertionResult(isEventObject_(subject), JSON.stringify(subject), '[object Event]', 'Object must be an Event instance');
    this.pushResult(assertionResult);
};

function isEventObject_(subject){
    return subject.originalEvent instanceof Event ||
        duckCheck_(subject, ['currentTarget', 'target', 'type']);
}

function duckCheck_(subject, props){
    return props.every(function(prop) {
        return typeof subject[prop] != 'undefined';
    });
}


