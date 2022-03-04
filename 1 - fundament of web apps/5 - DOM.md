## DOM

We can think of an HTML page as an implicit tree structure.

```
html
  head
    link
    script
  body
    div
      h1
      div
        ul
          li
          li
          li
      form
        input
        input
```

- Each element in this tree is known as a node.
- The topmost node of the DOM tree of an HTML document is called the document object
- We can perform various operations on a web-page using the DOM-API
- **Document Object Model, or DOM, is an Application Programming Interface (API) which enables programmatic modification of the element trees corresponding to web-pages.**

## Manipulating the document-object from console

Let's add a new note to the page from the console.

First, we'll get the list of notes from the page. The list is in the first ul-element of the page:

```js
list = document.getElementsByTagName("ul")[0];
```

Then create a new li-element and add some text content to it:

```js
newElement = document.createElement("li");
newElement.textContent = "Page manipulation from console is easy";
```

And add the new li-element to the list:

```js
list.appendChild(newElement);
```
