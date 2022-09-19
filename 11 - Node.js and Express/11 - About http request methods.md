# About HTTP request types

The <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-common-method-properties" target="_blank">HTTP standard</a> talks about two properties related to request types, safety and idempotence.

- The HTTP GET request should be safe:
  - In particular, the convention has been established that the `GET` and `HEAD` methods SHOULD NOT have the significance of taking an action other than retrieval. These methods ought to be considered "safe".

- Safety means that the executing request must not cause any side effects in the server. By side-effects we mean that the state of the database must not change as a result of the request, and the response must only return data that already exists on the server.

- Nothing can ever guarantee that a GET request is actually safe, this is in fact just a recommendation that is defined in the HTTP standard. By adhering to RESTful principles in our API, GET requests are in fact always used in a way that they are safe.

- The HTTP standard also defines the request type <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-head" target="_blank">HEAD</a>, that ought to be safe. In practice HEAD should work exactly like GET but it does not return anything but the status code and response headers. The response body will not be returned when you make a HEAD request.
- All HTTP requests except POST should be idempotent:
    - *Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single request. The methods GET, HEAD, PUT and DELETE share this property*
    - idempotent simply means, an operation that produces the same result when called over and over. An identical request should return an identical result when done twice, two thousand, or two million times.

- This means that if a request does not generate side-effects, then the result should be the same regardless of how many times the request is sent.

- If we make an HTTP PUT request to the url `/api/notes/10` and with the request we send the data `{ content: "no side effects!", important: true }`, the result is the same regardless of how many times the request is sent.

- Like safety for the GET request, idempotence is also just a recommendation in the HTTP standard and not something that can be guaranteed simply based on the request type. However, when our API adheres to RESTful principles, then GET, HEAD, PUT, and DELETE requests are used in such a way that they are idempotent.

- POST is the only HTTP request type that is neither *safe* nor *idempotent*. If we send 5 different HTTP POST requests to `/api/notes` with a body of `{content: "many same", important: true}`, the resulting 5 notes on the server will all have the same content.


