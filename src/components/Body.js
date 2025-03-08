import {useEffect, useState, useContext} from "react"
import {Link} from "react-router-dom";
import RestaurantCard, {withPramotedLabel} from "./ReastaurantCard"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPramoted = withPramotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4837121&lng=73.9555877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
          <h1>
              Looks like you're offline!!! Please check your internet connection;
          </h1>
        );
    }
    const { loggedInUser, setUserName } = useContext(UserContext);

    return (listOfRestaurants.length === 0)? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="py-1 border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex item-center">
                    <button className="flex px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info?.avgRating > 4.4
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>

                    <button className="flex px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.info?.veg === true)
                        )
                        setFilteredRestaurant(filteredList);
                    }}>Only Veg</button>

                    <button className="flex px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        setFilteredRestaurant(listOfRestaurants);
                    }}>Clear Filters</button>

                    <div className="py-4">
                        <label>User Name: </label>
                        <input className="p-1 border border-solid border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map(restaurant => (
                        <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                            {restaurant.info.avgRating > 4.5 ? (
                                <RestaurentCardPramoted resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant}/>
                            )}

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;