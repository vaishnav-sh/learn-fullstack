# Lint

Before we move on to the next part, we will take a look at an important tool called lint. Wikipedia says the following about lint:

>Generically, lint or a linter is any tool that detects and flags errors in programming languages, including stylistic errors. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.

- In compiled statically typed languages like Java, IDEs like NetBeans can point out errors in the code, even ones that are more than just compile errors. Additional tools for performing <a href="https://en.wikipedia.org/wiki/Static_program_analysis">static analysis</a> like <a href="https://checkstyle.sourceforge.io/">checkstyle</a>, can be used for expanding the capabilities of the IDE to also point out problems related to style, like indentation.

- In the JavaScript universe, the current leading tool for static analysis aka. "linting" is <a href="https://eslint.org/">ESlint</a>.

- Let's install ESlint as a development dependency to the backend project with the command:

```
npm install eslint --save-dev
```

- After this we can initialize a default ESlint configuration with the command:

```
npx eslint --init
```

- We will answer all of the questions:

<img src="./lint questions.png" alt="terminal showing questions that lint asks before configuration">

- The configuration will be saved in the .eslintrc.js file:

```js
module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
```

- Let's immediately change the rule concerning indentation, so that the indentation level is two spaces.

```js
"indent": [
    "error",
    2
],
```

- Inspecting and validating a file like index.js can be done with the following command:

```
npx eslint index.js
```

- It is recommended to create a separate npm script for linting:

```json
{
  // ...
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    // ...
    "lint": "eslint ."
  },
  // ...
}
```

- Now the `npm run lint` command will check every file in the project.

- Also the files in the build directory get checked when the command is run. We do not want this to happen, and we can accomplish this by creating an `.eslintignore` file in the project's root with the following contents:

```
build
```

- This causes the entire build directory to not be checked by ESlint.

- Lint has quite a lot to say about our code:

<img src="./lint errors.png" alt="lint errors">

- Let's not fix these issues just yet.

- A better alternative to executing the linter from the command line is to configure a eslint-plugin to the editor, that runs the linter continuously. By using the plugin you will see errors in your code immediately.

- The VS Code ESlint plugin will underline style violations with a red line:

- ESlint has a vast array of rules that are easy to take into use by editing the .eslintrc.js file.

- Let's add the `eqeqeq` rule that warns us, if equality is checked with anything but the triple equals operator. The rule is added under the rules field in the configuration file.

```js
{
  // ...
  'rules': {
    // ...
   'eqeqeq': 'error',
  },
}
```

- While we're at it, let's make a few other changes to the rules.

- Let's prevent unnecessary trailing spaces at the ends of lines, let's require that there is always a space before and after curly braces, and let's also demand a consistent use of whitespaces in the function parameters of arrow functions.

```js
{
  // ...
  'rules': {
    // ...
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ]
  },
}
```

- Our default configuration takes a bunch of predetermined rules into use from eslint:recommended:

```js
'extends': 'eslint:recommended',
```

-  This includes a rule that warns about console.log commands. Disabling a rule can be accomplished by defining its "value" as 0 in the configuration file. Let's do this for the no-console rule in the meantime.

```js
{
  // ...
  'rules': {
    // ...
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
    'no-console': 0
  },
}
```

>  when you make changes to the `.eslintrc.js` file, it is recommended to run the linter from the command line. This will verify that the configuration file is correctly formatted:

<img src="./after config changes for lint.png" alt="after config changes for lint">

- Many companies define coding standards that are enforced throughout the organization through the ESlint configuration file. It is not recommended to keep reinventing the wheel over and over again, and it can be a good idea to adopt a ready-made configuration from someone else's project into yours. Recently many projects have adopted the Airbnb Javascript style guide by taking <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">Airbnb's ESlint configuration</a> into use.
