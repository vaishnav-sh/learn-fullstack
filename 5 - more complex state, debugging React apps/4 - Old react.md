## Old React

- In this course we use the state hook to add state to our React components, which is part of the newer versions of React and is available from version 16.8.0 onwards.

- Before the addition of hooks, there was no way to add state to functional components.

- Components that required state had to be defined as `class` components, using the JavaScript class syntax. like so:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- Even though functional components are the future of React, it is still important to learn the class syntax, as there are billions of lines of legacy React code that you might end up maintaining someday.

- The same applies to documentation and examples of React that you may stumble across on the internet.

- We will be learning about React class components in the coming lessons
