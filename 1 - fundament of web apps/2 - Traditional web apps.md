## Traditional Web apps

The homepage of the example site works like a traditional web app. The browser fetches the HTML DOC and text content of the page from the server.

- The server has formed this document somehow. The document can be a static text file saved into the server's directory.
- The server can also form the HTML documents dynamically according to the application code, using, for example, data from a database.
- The HTML code of the example application has been formed dynamically, because it contains information on the number of created notes.
- The HTML code of the homepage is as follows:

```js
const getFrontPageHtml = (noteCount) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created ${noteCount}</p>
          <a href='/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>
`;
};

app.get("/", (req, res) => {
  const page = getFrontPageHtml(notes.length);
  res.send(page);
});
```

- The content of the html page is saved as a template string here which allows for add variables in the midst of strings.
- The dynamically changing part of the homepage, the number of saved notes (in the code noteCount), is replaced by the current number of notes (in the code notes.length) in the template string.
- Writing HTML in the midst of the code is of course not smart, but for old-school PHP-programmers it was a normal practice.
- In traditional web applications the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server.
- A server can be created and this example uses express from nodejs



