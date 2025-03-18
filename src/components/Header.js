import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button onClick={() => {
            if(btnNameReact == "Login") {
              setBtnNameReact("Logout")
            } else {
              setBtnNameReact("Login")
            }
            console.log(btnNameReact)
          }}>{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
