# Introduction

There are several different ways of adding styles to your react app and we will take a look at the other methods later on. First, we will add CSS to our application the old-school way; in a single file without using a CSS preprocessor (although this is not entirely true as we will learn later on).

- Let's add a new index.css file under the src directory and then add it to the application by importing it in the `index.js` file:

```js
import "./index.css";
```

- Let's add the following CSS rule to the index.css file:

```css
h1 {
  color: green;
}
```

> **Note**: when the content of the file `index.css` changes, React might not notice that automatically, so you may need to refresh the browser to see your changes!

- CSS rules comprise of selectors and declarations. The selector defines which elements the rule should be applied to. The selector above is h1, which will match all of the h1 header tags in our application.

- The declaration sets the `color` property to the value _green_.

- One CSS rule can contain an arbitrary number of properties. Let's modify the previous rule to make the text cursive, by defining the font style as italic:

```css
h1 {
  color: green;
  font-style: italic;
}
```

- There are many ways of matching elements by using different types of CSS selectors.

- If we wanted to target, let's say, each one of the notes with our styles, we could use the selector `li`, as all of the notes are wrapped inside `li` tags:

```js
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};
```

```css
li {
  color: grey;
  padding-top: 3px;
  font-size: 15px;
}
```

- Using element types for defining CSS rules is slightly problematic. If our application contained other li tags, the same style rule would also be applied to them.

- If we want to apply our style specifically to notes, then it is better to use class selectors.

- In regular HTML, classes are defined as the value of the class attribute:

```html
<li class="note">some text...</li>
```

- In React we have to use the `className` attribute instead of the class attribute. With this in mind, let's make the following changes to our Note component:

```js
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};
```

- Class selectors are defined with the .classname syntax:

```css
.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}
```

- If you now add other li elements to the application, they will not be affected by the style rule above.


