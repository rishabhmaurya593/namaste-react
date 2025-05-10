import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  // subscribing store
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="w-1/2 m-auto">
        <button
          className="px-2 py-1 border border-black rounded-lg bg-black text-white shadow-xl hover:bg-white hover:text-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Your cart is empty!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
