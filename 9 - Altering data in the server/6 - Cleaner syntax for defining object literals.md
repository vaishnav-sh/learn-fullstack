# Cleaner syntax for defining for object literals

The module defining note related services currently exports an object with the properties getAll, create, and update that are assigned to functions for handling notes.

The module definition was:

```js
import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
```

- The module exports the following, rather peculiar looking, object:

```js
{
  getAll: getAll,
  create: create,
  update: update
}
```

- The labels to the left of the colon in the object definition are the keys of the object, whereas the ones to the right of it are variables that are defined inside of the module.

- Since the names of the keys and the assigned variables are the same, we can write the object definition with a more compact syntax:

```js
{
  getAll, create, update;
}
```

- As a result, the module definition gets simplified into the following form:

```js
import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
```

- In defining the object using this shorter notation, we make use of a new feature that was introduced to JavaScript through ES6, enabling a slightly more compact way of defining objects using variables.

- To demonstrate this feature, let's consider a situation where we have the following values assigned to variables:

```js
const name = "Leevi";
const age = 0;
```

- In older versions of JavaScript we had to define an object like this:

```js
const person = {
  name: name,
  age: age,
};
```

- However, since both the property fields and the variable names in the object are the same, it's enough to simply write the following in ES6 JavaScript:

```js
const person = { name, age };
```

- The result is identical for both expressions. They both create an object with a `name` property with the value _`Leevi`_ and an `age` property with the value _`0`_.
