## Summing-up

Let's go over the main principles of how an application works once more.

- When the application is run, the code in `App` component is executed.

- This code uses a **useState** hook that sets a state for the application and also initializes the variable `counter` with 0.

- This component has a `Display` component that renders the counter's value: 0 on the webpage

- It also has three `Button` components that renders `plus`, `reset` and `minus` buttons on the webpage

- All these buttons have event handlers which changes the state of the counter using `setCounter`

- When the button is clicked, the event handler is executed which changes the state of the `App` component using the `setCounter` function.

- Calling a function that changes the state of the component results in re-rendering of that component.

- All sub-components of `App` like `Display`, `Button` are also re-rendered as a result of this.

- So if a user clicks a button, event handler executes and changes the value of counter and the `App` component is re-rendered.

- `Display` receives and renders new value of counter(using `props` argument) every time `App` component is re-rendered(whenever the state changes because of a button click)

For the solution, **refer: `counter final` folder in the same directory**
