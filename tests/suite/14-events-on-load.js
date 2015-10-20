
//
// Events
// Events.on: Test load event
//
// A good reference about the events, and their expected behaviour:
// https://developer.mozilla.org/en-US/docs/Web/Events
//

QUnit.module( "dom-events.js", {
    beforeEach: function() {

        var fakeDOM = "\
            <div id='img-box'>\
                <img src='https://pbs.twimg.com/profile_images/3278770524/65f8d054943bedc5bf4d8faf89a5eb7a_400x400.jpeg'/>\
            </div>";

        setup(fakeDOM);

        this.box = $$("#img-box")[0];
        this.img = $$("#img-box img")[0];

    },
    afterEach: function() {}
});


// load does not bubble up
test("[LD01] load", function (assert) {

    var img = this.img;

    Events.on(img, "load", function(evt){

        assert.ok(this === img, "Event handler is called with the target element as 'this'");
        _.typeEvent(evt);

        start();
    });

    stop();

});

test("[LD02] trigger load", function (assert) {

    var spy = sinon.spy();


    Events.on(this.img, "load", spy);
    Events.fire(this.img, "load");

    assert.ok(spy.calledOnce, _.one("Load event handler", spy.callCount));

});

test("[LD03] trigger delegate-load", function (assert) {

    var spy = sinon.spy();
    var box = this.box;

    Events.on(box, "load", "img", spy);
    Events.fire(this.img, "load");

    assert.ok(!spy.called, _.none("Load event handler", spy.callCount));

});