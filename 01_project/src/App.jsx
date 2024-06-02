// import React from 'react'
// import "./App.css"

// const App = () => {
//   const Name = "villan"
//   return (
//     <h1>Hello, { Name }</h1>
//   )
// };

// export default App

// // This is behind the scene working
// import React from 'react'
// import "./App.css"

// const App = () => {
//   return (
//     React.createElement("h1", null, "Hello Villan")
//   )
// }

// export default App


// // Jsx Console code
// import React from 'react'
// import "./App.css"

// const App = () => {
//   console.log(React.createElement("h1", null, "Hello Villan"));
//   return (
//     React.createElement("h1", null, "Hello Villan") 
//   )
//   }

// export default App


// USE OF TERNARRY OPERATOR.
import React from 'react'
import "./App.css"

const App = () => {
  const DisplayNames = true
  return (
    <h1>Hello, { DisplayNames? "Villan" : "Life"}</h1>
  )
};

export default App