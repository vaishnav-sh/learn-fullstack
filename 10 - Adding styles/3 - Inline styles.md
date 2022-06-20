# Inline styles

React also makes it possible to write styles directly in the code as so-called inline styles.

- The idea behind defining inline styles is extremely simple. Any React component or element can be provided with a set of CSS properties as a JavaScript object through the style attribute.

- CSS rules are defined slightly differently in JavaScript than in normal CSS files. Let's say that we wanted to give some element the color green and italic font that's 16 pixels in size. In CSS, it would look like this:

```css
 {
  color: green;
  font-style: italic;
  font-size: 16px;
}
```

- But as a React inline style object it would look like this:

```css
{
  color: 'green',
  fontStyle: 'italic',
  fontSize: 16
}
```

- Every CSS property is defined as a separate property of the JavaScript object. Numeric values for pixels can be simply defined as integers. One of the major differences compared to regular CSS, is that hyphenated (kebab case) CSS properties are written in camelCase.

- Next, we could add a "bottom block" to our application by creating a Footer component and defining the following inline styles for it:

```js
const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2022
      </em>
    </div>
  );
};

const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      // ...
      <Footer />
    </div>
  );
};
```

- Inline styles come with certain limitations. For instance, so-called pseudo-classes can't be used straightforwardly.

- Inline styles and some of the other ways of adding styles to React components go completely against the grain of old conventions.

- Traditionally, it has been considered best practice to entirely separate CSS from the content (HTML) and functionality (JavaScript). According to this older school of thought, the goal was to write CSS, HTML, and JavaScript into their separate files.

- **The philosophy of React is, in fact, the polar opposite of this. Since the separation of CSS, HTML, and JavaScript into separate files did not seem to scale well in larger applications, React bases the division of the application along the lines of its logical functional entities.**

- The structural units that make up the application's functional entities are React components.

- A React component defines the HTML for structuring the content, the JavaScript functions for determining functionality, and also the component's styling; all in one place. This is to create individual components that are as independent and reusable as possible.

**For referance, check out `notes with inline` file in the same directory**
