# REST

Let's expand our application so that it provides the same RESTful HTTP API as json-server.

- **Representational State Transfer**, aka **REST**, was introduced in 2000 in Roy Fielding's dissertation. REST is an architectural style meant for building scalable web applications.

- We are not going to dig into Fielding's definition of REST or spend time pondering about what is and isn't RESTful. Instead, we take a more <a href="https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services" target="_blank">narrow view</a> by only concerning ourselves with how RESTful APIs are typically understood in web applications. The original definition of REST is in fact not even limited to web applications.

- In <a href="https://fullstackopen.com/en/part2/altering_data_in_server#rest" target="_blank">previous part</a>, We mentioned that singular things like notes in the case of our application, are called resources in RESTful thinking. Every resource has an associated URL which is the resource's unique address.

- One convention is to create the unique address for resources by combining the name of the resource type with the resource's unique identifier.

- Let's assume that the root URL of our service is *www.example.com/api*.

- If we define the resource type of note to be notes, then the address of a note resource with the identifier 10, has the unique address *www.example.com/api/notes/10*.

- The URL for the entire collection of all note resources is www.example.com/api/notes.

- We can execute different operations on resources. The operation to be executed is defined by the HTTP verb:

| URL      |  verb  |                                                    Functionality |
| -------- | :----: | ---------------------------------------------------------------: |
| notes/10 |  GET   |                                        fetches a single resource |
| notes    |  GET   |                          fetches all resources in the collection |
| notes    |  POST  |                 creates a new resource based on the request data |
| notes/10 | DELETE |                                  removes the identified resource |
| notes/10 |  PUT   |    replaces the entire identified resource with the request data |
| notes/10 | PATCH  | replaces a part of the identified resource with the request data |

- This is how we manage to roughly define what REST refers to as a <a href="https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints" target="_blank">uniform interface</a>, which means a consistent way of defining interfaces that makes it possible for systems to co-operate.

- This way of interpreting REST falls under the second level of RESTful maturity in the Richardson Maturity Model. According to the definition provided by Roy Fielding, we have not actually defined a REST API. In fact, a large majority of the world's purported "REST" APIs do not meet Fielding's original criteria outlined in his dissertation.

- In some places (see e.g. Richardson, Ruby: RESTful Web Services) you will see our model for a straightforward CRUD API, being referred to as an example of **resource oriented architecture** instead of **REST**. We will avoid getting stuck arguing semantics and instead return to working on our application.




