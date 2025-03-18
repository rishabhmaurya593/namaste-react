import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );
    const res = await data.json();
    setListOfRestaurants(res?.data?.cards);
    setFilteredRestaurants(res?.data?.cards)
    console.log(res);
  };

  const handleClick = () => {
    const topRes = listOfRestaurants.filter(
      (res) => res?.card?.card?.info?.avgRating >= 4
    );
    console.log("filter");
    setListOfRestaurants(topRes);
  };

  const handleSearch = () => {
    const filterList = listOfRestaurants?.filter((res) =>
      res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filterList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={handleClick} className="filter-btn">
          Filter Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaureant Card */}
        {filteredRestaurants?.map(
          (restaurant) =>
            restaurant.card.card.info && (
              <RestaurantCard
                key={restaurant.card.card.info.id}
                resData={restaurant}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Body;
