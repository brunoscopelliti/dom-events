
import sinon from 'sinon';

// EventTarget is undefined in Safari, and
// addEventListener/removeEventListener are defined on Node.prototype
if (typeof EventTarget != 'undefined'){
    window.addListenerSpy = sinon.spy(EventTarget.prototype, 'addEventListener');
    window.delListenerSpy = sinon.spy(EventTarget.prototype, 'removeEventListener');
}
else{
    window.addListenerSpy = sinon.spy(Node.prototype, 'addEventListener');
    window.delListenerSpy = sinon.spy(Node.prototype, 'removeEventListener');
}