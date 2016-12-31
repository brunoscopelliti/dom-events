
// EventTarget is undefined in Safari, and
// addEventListener/removeEventListener are defined on Node.prototype
const shouldUseEventTarget = typeof EventTarget != 'undefined';

const addListenerSpy = shouldUseEventTarget ?
    sinon.spy(EventTarget.prototype, 'addEventListener') : sinon.spy(Node.prototype, 'addEventListener');

const delListenerSpy = shouldUseEventTarget ?
    sinon.spy(EventTarget.prototype, 'removeEventListener') : sinon.spy(Node.prototype, 'removeEventListener');

export {
    addListenerSpy,
    delListenerSpy
};