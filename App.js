import React from 'react'
import ReactDOM from 'react-dom/client'


// React Element
const heading = (
  <h1 id="heading" className='head'>
  Namaste React!
  </h1>
)

// React Component 
// Class Based Component
// React Functional Component- just javascript function

const Title = () => (
  <h1 className='head' tabIndex="5">
    Namaste React using JSX
  </h1>
)

// Component Composition - using a component inside a component known as Component Composition
const HeadingComponent = () => {
  return (
    <div id='container'>
      <h1 className='header'>Namaste React functional component</h1>
      <Title />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// this is the way to render a component
root.render(<HeadingComponent />)

