# dom-events
A JavaScript event handler micro library.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/brunoscopelliti.svg)](https://saucelabs.com/u/brunoscopelliti)

## install

```
npm install --save dom-events-delegation
```

## api

**Events.on**

```
on: function on(htmlElements, type, [delegator, ] handler);
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be set
 - {String} type: the name of the event
 - {String} [delegator]: the selector of the elements which should react on the event
 - {Function} handler: the function that should be called when the event is triggered
```

Add an event listener on the DOM elements passed as parameter.

**Events.off**

```
off: function off(htmlElements, [type, ] [delegator, ] [handler] );
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be removed
 - {String} [type]: the name of the event
 - {String} [delegator]
 - {Function} [handler]
```

Remove the event listeners which match the parameters from the DOM elements passed as first argument.

**Events.fire**

```
fire: function fire(htmlElements, type, ...data)
 
 - {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which simulate the event
 - {String} type: the name of the event
 - {Any} [data]: additional arguments for the event handler
```

Simulate the triggering of the event `type` on the elements `htmlElements`.
It executes the handlers attached on `htmlElements`, and simulate the bubbling of the event, on their parents.

**Events.debug**

```
debug: function debug(htmlElement, type = "")
 
 - {HTMLElement} htmlElement: the html element for which to get events' information
 - {String} [type]: the name of the event
```

Get the list of the event listeners registered on a particular html element.
If the event type is not specified it returns all the events set on that particular dom element.