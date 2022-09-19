# Postman

HTTP GET requests are easy to make from the browser. We could write some JavaScript for testing deletion, but writing test code is not always the best solution in every situation.

Many tools exist for making the testing of backends easier. One of these is a command line program curl. However, instead of curl, we will take a look at using Postman for testing the application.

<img src="./postman delete.png" alt="postman delete">

- Using Postman is quite easy in this situation. It's enough to define the url and then select the correct request type (DELETE).

- The backend server appears to respond correctly. By making an HTTP GET request to http://localhost:3001/api/notes we see that the note with the id 2 is no longer in the list, which indicates that the deletion was successful.

- Because the notes in the application are only saved to memory, the list of notes will return to its original state when we restart the application.


