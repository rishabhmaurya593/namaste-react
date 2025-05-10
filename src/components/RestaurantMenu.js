import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  // custom hook
  const resInfo = useRestaurantMenu(resId);

  //   console.log(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      // c?.card?.card?.["@type"] ===
      //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log("cate", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-2">{name}</h1>
      <p className="font-medium mb-6">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {/* Item Category */}
      <div>
        {categories?.map((c, index) => (
          <ResCategory
            key={c?.card?.card?.categoryId}
            data={c?.card?.card}
            showItems ={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
