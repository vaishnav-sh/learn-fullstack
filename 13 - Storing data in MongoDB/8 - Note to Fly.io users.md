# Note to Fly.io users

- Because GitHub is not used with Fly.io, the file .env also gets to the Fly.io servers when the app is deployed. Because of this, the env variables defined in the file will be available there.

- However, a better option is to prevent .env from being copied to Fly.io by creating in the project root the file .dockerignore, with the following contents


```
.env
```

- and set the env value from the command line with the command:

```sh
fly secrets set MONGODB_URI='mongodb+srv://fullstack:<password>@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority'
```

- Since the PORT also is defined in our .env it is actually essential to ignore the file in Fly.io since otherwise the app starts in the wrong port.

- When using Render, the database url is given by defining the proper env in the dashboard:

<img src="note for flyio.png" alt="render page to set env values after pushing to fly.io">

