# Proxy

As a result of the changes made to the frontend, when we run the frontend in application development mode, i.e. by starting it with the command `npm start` , the connection to the backend does not work:

<img src="./without proxy.png" alt="without proxy"> 

- The reason for this is that the address of the backend was changed to be defined relative:

```js
const baseUrl = '/api/notes'
```

- Since the frontend works at *localhost:3000* , requests to the backend go to the wrong address *localhost:3000/api/notes*. However, the backend works at *localhost:3001* .

- In projects created with `create-react-app`, the problem is easy to solve. It is enough to add the following definition to the `package.json` file of the frontend repository:

```json
{
  "dependencies": {
    // ...
  },
  "scripts": {
    // ...
  },
  "proxy": "http://localhost:3001"
}
```

- After the restart, React's application development environment acts as a proxy . If the React code makes an HTTP request to the server http://localhost:3000 to an address that is not the responsibility of the React application (i.e. it is not about loading the application's JavaScript code or CSS), the request is forwarded to http: // to the server at localhost:3001 .

- Now the frontend is also fine. It works both in application development mode and in production together with the server.

- One negative aspect of the approach we use is that taking a new version of the application into production requires generating a production version of the frontend code in a separate repository. 

- This, in turn, complicates the implementation of an automated <a href="https://martinfowler.com/bliki/DeploymentPipeline.html" target="_blank">Deployment pipeline</a> . Deployment pipeline refers to an automated and controlled way of taking the code from the application developer's machine through various tests and quality control steps to the production environment. The topic is introduced in <a href="https://fullstackopen.com/en/part11" target="_blank">part 11</a> of the course .

- There are several different solutions for this as well (e.g. placing both frontend and backend in the same repository ), however we will not go into them now. Deploying the frontend code as its own application can also make sense in some situations. For apps created with create-react-app , it's straight forward .

**For reference you can check out the `notes deployed` folder in the same directory**