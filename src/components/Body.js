import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleClick = () => {
    const topRes = listOfRestaurants.filter((res) => res.card.card.info.avgRating >= 4.5);
    console.log("filter")
    setListOfRestaurants(topRes)
  }

  return (
    <div>
      <div className="search">Search</div>
      <button onClick={handleClick}>Filter Top Restaurants</button>
      <div className="res-container">
        {/* Restaureant Card */}
        {
          listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;