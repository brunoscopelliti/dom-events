A JavaScript delegation event micro library.

## about

dom-events (dom-events-delegation on npm) is written as an ECMAScript2015 module, and uses ECMAScript2015 features such destructuring, default values, weak map; it's possible to use in the browser today through the combo jspm package loader and babeljs.

When the module is transpiled (with some polyfill installed such as `Array.from`, `Symbol`, `Weakmap`), it proved to work until IE10 (never tested with IE9). 

In case you need another module format there are several projects which can do automatically the conversion.

## install

```
npm install --save dom-events-delegation
```

## CI report

[![Sauce Test Status](https://saucelabs.com/browser-matrix/brunoscopelliti.svg)](https://saucelabs.com/u/brunoscopelliti)

**known issues**

* `[DEL4]` fails on Firefox, cause https://bugzilla.mozilla.org/show_bug.cgi?id=218093 . Same issue affects jQuery too.

* CI skips tests, about focus/blur events, from `[FRM5]` to `[FRM8]` cause when launched headless they fail on Firefox... however they pass when launched in the browser.

## api and usages

For the examples in the current section I consider the following DOM tree:

```
<section id="main">
 <h1>Choose a pillow:</h1>
 <ul>
  <li>
   <input id="opt1" type="radio" name="colour" value="red"/>
   <label for="opt1">red</label>
  </li>
  <li>
   <input id="opt2" type="radio" name="colour" value="blue"/>
   <label for="opt2">blue</label>
  </li>  
 </ul>
 <button id="btn">Pick the pillow</button>
</section>
```

**Events.on**

```
on: function on(htmlElements, type, [delegator, ] handler);
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be set
 - {String} type: the name of the event
 - {String} [delegator]: the selector of the elements which should react on the event
 - {Function} handler: the function that should be called when the event is triggered
```

Add an event listener on the DOM elements passed as parameter.

If we want to add a listener on the button, we could simply write something like:

```
var btn = document.getElementById("btn");
// not really need this step (http://www.2ality.com/2012/08/ids-are-global.html), but for clarity sake.

Events.on(btn, 'click', function() { /* do your stuff here */ });
```

Or using event delegation:

```
var main = document.getElementById("main");
Events.on(main, 'click', '#btn', function() { /* do your stuff here */ });
```

Of course this is more useful in case you want to attach the same handler on several targets.


**Events.off**

```
off: function off(htmlElements, [type, ] [delegator, ] [handler] );
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be removed
 - {String} [type]: the name of the event
 - {String} [delegator]
 - {Function} [handler]
```

Remove the event listeners which match the parameters from the DOM elements passed as first argument.

So if you want to remove the previous listeners:

```
Events.off(btn); // remove all the listener attached on btn
Events.off(btn, 'click'); // remove all the click listener attached on btn
// ...
// it's even possible to remove only the listeners with a specific delegator, or handler, or both.
```


**Events.fire**

```
fire: function fire(htmlElements, type, ...data)
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which simulate the event
 - {String} type: the name of the event
 - {Any} [data]: additional arguments for the event handler
```

Simulate the triggering of the event `type` on the elements `htmlElements`.
It executes the handlers attached on `htmlElements`, and simulate the bubbling of the event, on their parents.

Let's try to simulate the click on the button.

```
Events.fire(btn, 'click'); 

// ... and we can also pass additional custom data, which will be available as arguments in the event handler function.

Events.on(btn, 'click', function(evt, ...args) {
 console.log(args); // ['foo', 'bar']
});

Events.fire(btn, 'click', 'foo', 'bar');
```

**Events.debug**

```
debug: function debug(htmlElement, type = "")
 
 - {HTMLElement} htmlElement: the html element for which to get events' information
 - {String} [type]: the name of the event
```

Get the list of the event listeners registered on a particular html element.
If the event type is not specified it returns all the events set on that particular dom element.