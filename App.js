import React from 'react'
import ReactDOM from 'react-dom/client'


// JSX => HTML like or XML like syntax.
// JSX => Babel transpiles it to React.createElement => React Element-JS object => HTML Element

const root = ReactDOM.createRoot(document.getElementById("root"));


// we need to wrap in parenthesis our JSX if we want to write in multiple lines.
const jsxHeading = (
<h1 id="heading" className='head'>
  Namaste React!
  </h1>
)

console.log(jsxHeading)
root.render(jsxHeading)

