# App to internet

When the whole "stack" is finally fixed, the application is transferred to the Internet.

- There are countless different solutions for hosting applications, i.e. "putting them on the Internet". The easiest of these for the application developer are the so-called `PaaS` (i.e. Platform as a Service) services, which take care of installing the database and execution environment on behalf of the application developer.

- For ten years, the number one `PaaS` solution has been **Heroku** . At the end of August 2022, **Heroku** announced that as of November 27, 2022, the platform's free services will end. For this reason, in the following we present not only Heroku but also the promising replacement *Fly.io*. You can use either one as long as you remember that Heroku's free service will end soon. Heroku has promised some kind of free access for students, but you shouldn't count on it too much at this stage.

- For both solutions, the definition of the port used by the application at the end of the file index.js is changed as follows:

```js
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

- Now the port defined in the `PORT` environment variable will be used , or 3001 if the `PORT` environment variable is not defined. Both Fly.io and Heroku configure the application port using an environment variable.

