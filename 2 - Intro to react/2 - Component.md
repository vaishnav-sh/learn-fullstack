## Component

The file App.js now defines a React component with the name App.

- The last line in index.js renders its content into div-element defined in the file public/index.html, having the id value 'root'.
- By default the file public/index.html doesn't contain any HTML markup that is visible to us in the browser. You can manually add it by adding to it.
- However in React, all content that needs to be rendered is created as React components.

> **NOTE** : It is recommended to used capitalized identifiers while naming components

### **Let's dive in with code that defines a component**

This code creates a component which is a `div` that wraps a `p` tag that has text content as _Hello World_

```js
const App = () => (
  <div>
    <p>Hello World</p>
  </div>;
  );    // normal paranthesis, not curly braces
```

- Technically a component is defined as a JS function. And in this case, this function doesn't take any parameters.
- The function is then assigned to a constant variable `App`
- You can also write the above code as this but now with Arrow function in ES6 this is not necessary.

```js
const App = () => {
  console.log("this is also possible just in case you were wondering");
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}; // curly braces for js, paranthesis for html markup
```

- we can also add JS code inside a component's definition and render dynamic content inside the element

```js
const App = () => {
  const a = 10;
  const b = 20;
  const now = new Date();

  return (
    <div>
      <p>Hello world, it is {now.toString()} </p>
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  );
};
```

- Any JS code within curly braces is evaluated first and then result of the evaluation is embedded into the HTML produced by the component.
