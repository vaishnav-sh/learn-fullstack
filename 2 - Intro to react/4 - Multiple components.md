## Multiple components

Let's modify the App.js file in our part1 app as follows

```js
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
    // embeds 'Hello' component in App component
  );
};
```

- We have defined a new Component `Hello` which is then embedded inside the `App` component.
- Generally, a component can be embedded multiple times like so:

```js
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};
```

- As a result of this, writing a React component is easy and it makes maintaining large scale apps with a lot of components maintainable and easy to work with.
- Core philosophy of React is to build apps from many specialized reusable components.
- _Another strong convention is the idea of a root component called `App` at the top of the component tree of the application. Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within an appropriate utility component._
