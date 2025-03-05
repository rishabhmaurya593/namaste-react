import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" className="head">
    Namaste React!
  </h1>
);

// React Component
// Class Based Component
// React Functional Component- just javascript function

const elem = <span>React Element</span>;

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      {/* way to put react element inside a element */}
      {elem}
      Namaste React using JSX
    </h1>
  );
};

// Component Composition - using a component inside a component known as Component Composition
const HeadingComponent = () => {
  const number = 10000;

  return (
    <div id="container">
      {/* way to put react element inside a component */}
      <Title />

      {/* we can write like this also */}
      {Title()}
      <h2>{number}</h2>
      <h1 className="header">Namaste React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is the way to render a component
root.render(<HeadingComponent />);
