> Make sure you `disable cache` from the network tab. Normally we use console tab but in this module We will use network tab a lot.

# HTTP GET

The website used in this module for example is [here](https://studies.cs.helsinki.fi/exampleapp/)

The server and the browser communicate using the HTTP protocol. This interaction can be viewed in the network tab.

- open the dev tools and go to network tab
- refresh page using ctrl + r or using F5. and this is what happens
  - The browser has fetched the contents of the page studies.cs.helsinki.fi/exampleapp from the server
  - And has downloaded the image kuva.png
- select any of the files show and view headers
- check **general header** and you can see the request to which URL is sent to, using GET method and that the request was successful as the server response has the `status: code 200`

Now let's look at **response header**

- it shows us the size of the response in bytes and exact time of the response
- An important header Content-Type tells us that the response is a text file in utf-8-format, contents of which have been formatted with HTML.
- This way the browser knows the response to be a regular HTML-page, and to render it to the browser 'like a web page'.

Next up, **request header**

- It shows the response data, a regular HTML-page. Whatever content the body section has determines the structure of the webpage that is being displayed.

### **MOVING ON**

Because of the img tag, the browser does a second HTTP-request to fetch the image kuva.png from the server. The details of the request are as follows:

- the request was made to a URL and the type is HTTP GET.
- The response header tells us that the response size is 89350 bytes through `content-length`
- `content-type` is a PNG image (image/png)

The chain of events caused by opening this page on a browser form the following sequence diagram

<img src="./HTTP GET Sequence Diagram.png">

- First the browser sends a HTTP GET request to the server to fetch the HTML code of the page
- Then the img tag in the HTML also sends a GET request to fetch the image.
- The browser first renders the HTML Page and then the image is being fetched from the server. Although this is difficult to notice from user's view.
