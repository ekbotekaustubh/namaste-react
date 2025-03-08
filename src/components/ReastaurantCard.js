import {CDN_URL} from "../utils/contsnats";
import ReastaurantCard from "./ReastaurantCard";
import {useContext} from "react"
import UserContext from "../utils/UserContext";

const styleCard =  {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        veg
    } = resData?.info

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="restaurant-logo-container">
                <img className="restaurant-logo rounded-lg" src={CDN_URL+cloudinaryImageId} alt="restaurant-logo" />
            </div>
            <div className="res-data">
                <h3 className="font-bold py-5 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{veg? "Only Veg" : "Veg / Non-Veg"}</h4>
                <h4>{avgRating} Star</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
                <h4>User: { loggedInUser }</h4>
            </div>
        </div>
    )
}

export const withPramotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Pramoted</label>
                <ReastaurantCard {...props} />
            </div>
        );
    }
}
export default RestaurantCard;