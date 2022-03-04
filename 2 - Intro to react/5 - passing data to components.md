## props: passing data to components

It is possible to pass data to components using so called `props`.

**Let's modify the component Hello as follows**

```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};
```

- Now the function defining the component has a parameter `props`. As a parameter, `props` receives an object that contains all key-value pairs the user of the component defines

**The props are defined as follows**

```js
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Charles" />
      <Hello name="Bukowski" />
    </div>
  );
};
```

- Here, `<Hello name="Charles" />` creats a property, `name` with value _`Charles`_ which is then passed to the function that defines the hello component.
- If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

**Let's look at an example where `Hello` are 2 props**

```js
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
```
