# The entire application for the Internet

- When the production version of the application "taken to the Internet" is found to work locally, the frontend production version is committed to the backend repository and the code is pushed again to Heroku or, in the case of Fly.io, the command is given

```
fly launch
```

- Your application should work now, except for changing the importance of the note, which has not yet been implemented in the backend:

- The information stored by our application is not permanent forever, as the application stores the notes in a variable. If the application crashes or is restarted, all data will be lost.

- We need a database for our application. Before implementing the database, however, there are still a few things to consider.

- The application in production looks like this:

<img src="./fullstack app diagram.png" alt="our app's current workflow">

- So now node/express-backend is located on Fly.io's/Heroku's server. When the browser goes to the "root address" of the application, which (when using Heroku) is of the form https://glacial-ravine-74819.herokuapp.com/ , the browser starts executing React code, which in turn retrieves data in JSON format from Fly.io/Heroku.


