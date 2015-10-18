
//
// Events
// Events.on: Test events registered on form / form's field
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <form id='empty-form' action='#noop'>\
                <button type='submit'>Send</button>\
            </form>\
            <form id='form' action='#route'>\
                <fieldset>\
                    <label for='username'>Set username:</label>\
                    <input type='text' id='username' />\
                </fieldset>\
                <fieldset>\
                    <label for='password'>Set password:</label>\
                    <input type='password' id='password' />\
                </fieldset>\
                <fieldset>\
                    <p>Pick the gender</p>\
                    <input type='radio' name='gender' id='male' value='M' checked/>\
                    <label for='male'>man</label>\
                    <input type='radio' name='gender' id='female' value='W'/>\
                    <label for='female'>woman</label>\
                </fieldset>\
                <button type='submit'>Send</button>\
            </form>";

        setup(fakeDOM);

        this.emptyForm = $$("#empty-form")[0];
        this.submitBtn = $$("#empty-form button[type='submit']")[0];

        this.form = $$("#form")[0];
    },
    afterEach: function() {
        Events.off(window);
        Events.off(document);
    }
});

test("[FRM1] submit", function (assert) {

    var spy = sinon.spy();

    Events.on(this.emptyForm, "submit", function(evt){ spy.call(this, evt); return false; });
    trigger(this.emptyForm, "submit");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(this.emptyForm), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[FRM2] delegate submit", function (assert) {

    var spy = sinon.spy();
    var parent = $$("#test-container");

    Events.on(parent, "submit", "#empty-form", function(evt){ spy.call(this, evt); return false; });
    trigger(this.emptyForm, "submit");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(this.emptyForm), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[FRM3] change", function (assert) {

    var spy = sinon.spy();
    var radios = $$("input[name='gender']");
    var womanRadio = $$("input[name='gender'][value='W']");

    Events.on(radios, "change", spy);
    trigger(womanRadio, "change");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(womanRadio[0]), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[FRM4] delegate change", function (assert) {

    var spy = sinon.spy();
    var womanRadio = $$("input[name='gender'][value='W']");

    Events.on(this.form, "change", "input[name='gender']", spy);
    trigger(womanRadio, "change");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(womanRadio[0]), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

});

test("[FRM5] focus", function (assert) {

    var spy = sinon.spy();
    var username = $$("#username");

    Events.on(username, "focus", spy);
    trigger(username, "focus");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));

});

test("[FRM6] blur", function (assert) {

    var spy = sinon.spy();
    var username = $$("#username");

    Events.on(username, "blur", spy);
    trigger(username, "focus");
    trigger(username, "blur");

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));

});



/**
 * Focus & Blur do not bubble up
 * @todo ...
 */


test("[FRM7] delegate focus/blur", function (assert) {

    var spy = sinon.spy();
    var username = $$("#username");

    Events.on(this.form, "focus", "input[type='text']", spy);
    trigger(username, "focus");

    var callFocus = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(callFocus.calledOn(username[0]), "Event handler is called with the target element as 'this'");
    _.typeEvent(callFocus.args[0]);

    spy.reset();

    Events.on(this.form, "blur", "input[type='text']", spy);
    trigger(username, "blur");

    var callBlur = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(callBlur.calledOn(username[0]), "Event handler is called with the target element as 'this'");
    _.typeEvent(callBlur.args[0]);

});

test("[FRM8] delegate focus multiple times", function (assert) {

    var spy = sinon.spy();
    var addListenerSpy = sinon.spy(EventTarget.prototype, "addEventListener");

    var password = $$("#password");

    Events.on(this.form, "focus", "input[type='text']", spy);
    Events.on(document.body, "focus", "input[type='password']", spy);

    assert.ok(addListenerSpy.calledOnce, _.one("HTMLElement#addEventListener", addListenerSpy.callCount));

    trigger(password, "focus");

    var call = spy.getCall(0);

    assert.ok(spy.calledOnce, _.one("Event handler", spy.callCount));
    assert.ok(call.calledOn(password[0]), "Event handler is called with the target element as 'this'");
    _.typeEvent(call.args[0]);

    addListenerSpy.restore();

});

test("[FRM9] remove focus/blur", function (assert) {

    var spy = sinon.spy();
    var removeListenerSpy = sinon.spy(EventTarget.prototype, "removeEventListener");

    var username = $$("#username");

    Events.on(this.form, "focus", "input[type='text']", spy);
    Events.on(this.form, "blur", "input[type='text']", spy);

    Events.off(this.form, "focus");
    assert.ok(removeListenerSpy.calledOnce, _.one("EventTarget#removeEventListener", removeListenerSpy.callCount));

    trigger(username, "focus");
    assert.ok(!spy.called, _.none("Event handler", spy.callCount));

    removeListenerSpy.reset()

    Events.off(this.form, "blur");
    assert.ok(removeListenerSpy.calledOnce, _.one("EventTarget#removeEventListener", removeListenerSpy.callCount));

    _.typeEmptyObject(Events.debug(document), "Events list");

    removeListenerSpy.restore();

});