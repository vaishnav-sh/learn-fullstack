## Destructuring

In our previous code in `component helper functions` we has to use `props.age` and `props.name` to access them as they were part of the `props` object.

```js
props = {
  name: "George Orwell",
  age: 48,
};
```

- Instead of using the object, we can directly assign these value to a variable of its own, like so:

```js
const Hello = (props) => {
  const name = props.name; // variables declared and initialized here
  const age = props.age;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
```

- **Or, with ES6 we can destructure the object `props` in just a single line like this:**

```js
const { name, age } = props;
```

- Also with the help of ES6 arrow function, if the function is returning only a single expression then we can reduce it to just one line, remove the curly brackets and omit the `return` keyword.
- In other words we can write the `bornYear()` function in two ways:

```js
const bornYear = () => new Date().getFullYear() - age;

//or

const bornYear = () => {
  return new Date().getFullYear() - age;
};
```

### **MOVING ON**

We can take destructuring to the next level by doing,

```js
const Hello = ({ name, age }) => {
  // destructuring is done here
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
```

- This means that instead of assigning the entire `props` object into a variable called props and then assigning its properties into the variables `name` and `age`
- The component will be capable of taking any object as an argument and then destructure it directly into variables `name` and `age`.
