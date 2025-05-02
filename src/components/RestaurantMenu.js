import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
    const {resId} = useParams();
    
    // custom hook
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo == null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Coldrinks</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;