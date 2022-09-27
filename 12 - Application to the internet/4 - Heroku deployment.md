# Heroku Deployment

1. Create an account on heroku.com

2. login from terminal using the following command:
```bash
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
```

3. Create an app using this command:
```
heroku apps:create <app-name>
```

4. Change current directory to server and inititalize it server as a git repository
```
git init
```

5. set the remote to the heroku app 
```
heroku git:remote -a <app-name>

git remote -v
```

6. git add and commit
```
git add .
git commit -m "<message>"
```

7. push the code to the remote heroku app
```
git push heroku main
```

***Your server app has been deployed successfully!***

<img src="./heroku deployed.png" alt="heroku deployment">

> **NOTE:** Heroku is stopping free service by November 2022. An alternative platform to heroku is fly.io

- In case you run into problems while deployement you can check the logs using:
```
heroku logs
```

- at least in the beginning, it makes sense to monitor the logs of the application on Heroku all the time. The best way to do this is to issue the command `heroku logs -t` , so that the logs come to the console when something happens on the server.

- The frontend also works with the help of the backend in Heroku. You can verify this by changing the address of the backend defined in the frontend to refer to the backend in Heroku instead of http://localhost:3001 .

- The next question arises: how do we also get the frontend on the Internet? There are several options, but let's go through one of them next.


