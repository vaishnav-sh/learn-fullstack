# Debugging node applications

Debugging applications made with Node is somewhat more difficult than JavaScript running in a browser. The good old method is of course printing to the console. It's always worth it. There are opinions according to which a more advanced method should be preferred instead of printing to the console, but that is not the whole truth. Even the world's very elite open source developers use this <a href="https://swizec.com/blog/javascript-debugging-slightly-beyond-consolelog/" target="_blank">method</a> .

## Visual studio code

Visual Studio Code's debugger can be useful in some cases. You can start the application in debug mode as follows:

<img src="./vscode debug start.png" alt="vs code debug start">

- **Note that the application must not be running "normally" from the console at the same time, because then the port used by the application is reserved.**

- In the following screenshot, where the code is stopped in the middle of adding a new note:

<img src="./debug console vscode.png" alt="debug console vscode">

- The code has stopped at the breakpoint on line 63 and the value of the variable note has been evaluated in the console . In the window on the left, you can also see all the values ​​of the variables of the program.

- The progress of debugging can be controlled from the arrows etc. at the top.

- For some reason, I rarely use Visual Studio Code's debugger.

## DevTools for Chrome

- Debugging is also possible in Chrome's developer console by starting the application with the command:

```
node --inspect index.js
```

- You can access the debugger by clicking on the green icon that appeared in Chrome's developer console:

<img src="./node --inspect.png" alt="node icon on devtools">

- The debug view works like when debugging React code. For example, breakpoints can be set on the Sources tab, i.e. points where the execution stops:

<img src="./devtools node.png" alt="devtools node">

- The values ​​of the program's variables can be evaluated in the watch window on the right.

- All `console.log` output from the application goes to the Console tab of the debugger. You can also examine variable values ​​there and execute arbitrary JavaScript code:

<img src="./console in node devtools.png" alt="console of node devtools">


## Doubt everything

- Debugging Full Stack applications seems very difficult at first. When a database also comes into the picture, and the frontend is connected to the backend, there are a lot of potential error sources.

- When the application "doesn't work", you have to find out where the problem is. It is very common that the fault is in a place that you cannot suspect at all, and it takes minutes, hours or even days before the real source of the problems is found.

- The key is systematicity. Since the error can be almost anywhere, everything must be suspected , and efforts should be made to exclude those parts where there is at least no error. Writing to the console, Postman, debugger and experience help.

- When errors appear , by far the worst strategy is to keep writing code. It's a guarantee that soon there will be ten more problems in the code and it will be even more difficult to find out their cause. The principle of the Toyota Production System , Stop and fix , works better than well in this context as well.
