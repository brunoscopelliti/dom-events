
QUnit.assert.type = function(subject, expectedType, message) {
    const currentType = typeof subject;
    const result = currentType == expectedType;

    this.push(result, currentType, expectedType, message);
};



QUnit.assert.emptyObject = function(subject) {
    const result = isEmptyObject_(subject);
    this.push(result, JSON.stringify(subject), '{}', 'The object was expected to be empty.');
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
    const result = isEventObject_(subject);
    this.push(result, JSON.stringify(subject), '[object Event]', 'Expecting an Event instance');
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


