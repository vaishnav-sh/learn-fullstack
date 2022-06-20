## A deep dive into the example

- Open the notes page from the example
- now you'll see `4 requests in the network tab` and all of them have different types
- The first req type is document. it is the HTML Code of the page
- it doesn't contain the lists because all that is coming from the main.js file

```js
var xhttp = new XMLHttpRequest(); // creates a new HTTP request

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText); // 'this' here refers to the response from the server
    console.log(data);

    var ul = document.createElement("ul");
    ul.setAttribute("class", "notes");

    data.forEach(function (note) {
      var li = document.createElement("li");

      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content));
    });

    document.getElementById("notes").appendChild(ul);
  }
};

xhttp.open("GET", "/data.json", true);
xhttp.send();
// These last two lines define that the browser does an HTTP GET request to the server's address /data.json:
```
