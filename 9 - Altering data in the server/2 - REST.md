# REST

- In REST terminology, we refer to individual data objects, such as the notes in our application, as resources.

- Every resource has a unique address associated with it - its URL.

- According to a general convention used by json-server, we would be able to locate an individual note at the resource URL notes/3, where 3 is the id of the resource.

- The notes url, on the other hand, would point to a resource collection containing all the notes.

- Resources are fetched from the server with HTTP GET requests.

- For instance, an HTTP GET request to the URL notes/3 will return the note that has the id number 3. An HTTP GET request to the notes URL would return a list of all notes.

- Creating a new resource for storing a note is done by making an HTTP POST request to the notes URL according to the REST convention that the json-server adheres to.

- **The data for the new note resource is sent in the body of the request.**

- `json-server` requires all data to be sent in JSON format. What this means in practice is that the data must be a correctly formatted string, and that the request must contain the Content-Type request header with the value application/json.
