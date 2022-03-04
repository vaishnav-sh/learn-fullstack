## JSX (JavaScript XML)

It seems as if react components are returning HTML Markup, but that is not the case. The content/layout of react components are written using JSX.

- Although JSX looks like HTML, we are actually dealing with a way to write JavaScript.
- The JSX returned by react components are compiled into JavaScript

**After compiling, our application looks like this:**

```js
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "Hello world, it is ", now.toString()),
    React.createElement("p", null, a, " plus ", b, " is ", a + b)
  );
};
```

- This compilation of JSX into JavaScript is handled by `Babel`.
- Any project created with `create-react-app` gets compiled automatically.
- JSX is a lot like `XML` in the sense that all tags must be closed. For example, to create a line break in HTML, you use:

```
<br>
```

- But when writing in JSX this tag needs to be closed

```
<br />
```
