# Express

Making server code directly on top of Node's built-in web server `http` is possible. However, it is tedious, especially if the application grows a bit larger.

To facilitate the programming of web applications on Node, several libraries have been developed that offer a more pleasant programming interface than `http` . By far the most popular of these is `Express`.

Let's enable Express by defining it as a dependency of our project with the command

```
npm install express
```

Express version `4.18.1` was installed in the project. In package.json, there is a bar in front of the version mark, so the format is

```json
"express": "^4.18.1"
```

In connection with npm, the so-called <a href="https://docs.npmjs.com/about-semantic-versioning" target="_blank">**semantic versioning**</a>. The marking `^4.18.1` means that if the project's dependencies are updated, a version of Express that is at least `4.18.1` will be installed, but a version with a patch i.e. the last number or minor i.e. the middle number may be installed. However, the main version or major must still be the same.

We can update project dependencies with the command

```
npm update
```

If we start coding the project on another machine, we can retrieve up-to-date dependencies compatible with the ***package.json*** definition with the command

```
npm install
```

If the major version number of the dependency does not change, newer versions should be backward compatible , i.e. if our program were to use e.g. Express version 4.99.175 in the future, the code in this part should still work without changes. Instead, Express 5.0.0, which will be released sometime in the future, may contain such changes that our code would no longer work.

