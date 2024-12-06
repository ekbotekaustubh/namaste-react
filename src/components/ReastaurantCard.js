import {CDN_URL} from "../utils/contsnats";

const styleCard =  {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info

    return (
        <div className="restaurant-card" style={styleCard}>
            <div className="restaurant-logo-container">
                <img className="restaurant-logo" src={CDN_URL+cloudinaryImageId} alt="restaurant-logo" />
            </div>
            <div className="res-data">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} Star</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} Minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;