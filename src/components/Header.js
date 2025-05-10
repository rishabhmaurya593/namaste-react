import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  // subscribing to the store using a selection
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect called on only initial render(just once)
  // if there is a dependency array then useEffect only be called when dependency changes

  useEffect(() => {
    // console.log("useEffect called");
    setUserName("Chhotu");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between px-10 shadow-lg mb-5">
      <div className="logo">
        <img className="w-20" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5">
          <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="text-2xl pr-3">
              🛒{" "}
              <span className="text-sm absolute top-4 w-6 h-6 text-center rounded-full bg-gray-800 text-white">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                if (btnNameReact == "Login") {
                  setBtnNameReact("Logout");
                } else {
                  setBtnNameReact("Login");
                }
                console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
