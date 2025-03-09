import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restaureant Card */}
        {
          resList.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;