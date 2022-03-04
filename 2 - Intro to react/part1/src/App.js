// ************ NORMAL *****************

// const App = () => {
//   const a = 10;
//   const b = 20;
//   const now = new Date();

//   return (
//     < div >
//       <p>Hello world, it is {now.toString()} </p>
//       <p>
//         {a} + {b} = {a + b}
//       </p>
//     </div >
//   );
// }

// ***************MULTIPLE COMPONENTS******************

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }


// *******************WITH PROP**************************

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="John" />
//       <Hello name="James" />
//     </div>
//   )
// }


// *******************WITH 2 PROPS*********************

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

// **************WRONG WAY TO NAME A COMPONENT**************

// const footer = (props) => {
//   return (
//     <div>
//       greeting app created by <a href="https://github.com/mluukkai">{props.name}</a>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greeting</h1>
//       <footer name="mluukai" value="100" />  
//     </div>
//   )
// }

export default App;
