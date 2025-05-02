import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2)

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h3>Name: {name}</h3>
      <h3>Location: Pune</h3>
      <h3>Contact: @rishabhmaurya593</h3>
    </div>
  );
};

export default User;
