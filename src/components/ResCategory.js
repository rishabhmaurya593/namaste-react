import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
//   const [display, setDisplay] = useState(false);

  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={() => setShowIndex()}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span className="">🔽</span>
        </div>
        <div className={!showItems ? "hidden" : ""}>
          <ItemList items={data.itemCards} />
        </div>
      </div>
      {/* accordian body */}
    </div>
  );
};

export default ResCategory;
