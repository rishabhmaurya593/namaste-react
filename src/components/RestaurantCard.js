import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData.card.card.info;
  return (
    <div className="res-card">
      <img
        src={`${CDN_URL}${resData.card.card.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
