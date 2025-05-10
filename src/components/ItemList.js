import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[1px] border-black flex justify-between"
        >
          <div className="text-left">
            <span>
              {item.card.info.itemAttribute.vegClassifier === "VEG"
                ? "🟢"
                : "🔺"}
            </span>
            <div className="flex flex-col">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-medium">₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-gray-600 text-sm">
              {item.card.info.description}
            </p>
          </div>
          <div>
            <img
              className="rounded-xl w-48"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt=""
            />
            <button
              className="px-4 py-2 bg-black border border-gray-200 text-white rounded-lg hover:bg-white hover:text-black hover:border-black drop-shadow-md relative top-[-10px]"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
