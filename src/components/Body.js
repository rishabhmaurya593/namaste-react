import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import { UserContext } from "../utils/userContext";

const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(UserContext);

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    // console.log(filteredRestaurants[3].card.card.info.promoted)
    // console.log("rest", RestaurantPromotedCard(filteredRestaurants[4]));
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );
    const res = await data.json();
    setListOfRestaurants(res?.data?.cards);
    setFilteredRestaurants(res?.data?.cards);
    console.log(res);
  };

  const handleClick = () => {
    const topRes = listOfRestaurants.filter(
      (res) => res?.card?.card?.info?.avgRating >= 4
    );
    // console.log("filter");
    setListOfRestaurants(topRes);
  };

  const handleSearch = () => {
    const filterList = listOfRestaurants?.filter((res) =>
      res?.card?.card?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filterList);
  };

  if (!onlineStatus) {
    return <h1>Seems, your internet is not working!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter flex">
        <div className="search px-10">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-green-100 m-4 rounded-md"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleClick}
          className="px-4 py-1 bg-green-100 m-4 rounded-md"
        >
          Filter Top Restaurants
        </button>
        <div className="my-2">
          <label>User: </label>
          <input className="border border-black p-2 rounded-lg" type="text" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}  />
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {/* Restaureant Card */}
        {filteredRestaurants?.map(
          (restaurant) =>
            restaurant.card.card.info &&
            (restaurant.card.card.info?.promoted ? (
              <Link
                to={`/restaurants/${restaurant.card.card.info.id}`}
                key={restaurant.card.card.info.id}
              >
                <RestaurantPromotedCard resData={restaurant} />
              </Link>
            ) : (
              <Link to={`/restaurants/${restaurant.card.card.info.id}`} key={restaurant.card.card.info.id}>
              <RestaurantCard
                resData={restaurant}
              />
              </Link>
            ))
        )}
      </div>
    </div>
  );
};

export default Body;
