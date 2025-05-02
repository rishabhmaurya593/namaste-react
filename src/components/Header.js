import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect called on only initial render(just once)
  // if there is a dependency array then useEffect only be called when dependency changes

  useEffect(() => {
    console.log("useEffect called")
  }, [btnNameReact])

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
          <li>Online Status {onlineStatus ? "🟢": "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="">Cart</Link></li>
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
