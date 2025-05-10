import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData.card.card.info;
  return (
    <div className="res-card m-4 p-4 w-[300px] shadow-2xl cursor-pointer rounded-xl hover:bg-slate-200">
      <img
        className="w-[300px] h-48 mb-3 rounded-xl"
        src={`${CDN_URL}${resData.card.card.info.cloudinaryImageId}`}
        alt=""
      />
      <h3 className="pb-1 font-bold text-lg">{name}</h3>
      <h4 className="pb-1">{cuisines.join(", ")}...</h4>
      <h4 className="pb-1 font-medium">{costForTwo}</h4>
      <h4 className="pb-1">{avgRating} Stars</h4>
      <h4 className="pb-1">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-medium text-white bg-slate-900 rounded-md px-3 py-1 absolute">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
