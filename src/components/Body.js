import {useEffect, useState} from "react"
import RestaurantCard from "./ReastaurantCard"
import Shimmer from "./Shimmer";

const Body = () => {
    // Local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4837121&lng=73.9555877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res   ) => res.data.avgRating > 4.4
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>

                <button className="filter-btn" onClick={() => {
                    (res) => (res.data?.vag == true)
                }}>Only Veg</button>

                <button className="filter-btn" onClick={() => {
                    setListOfRestaurant(resList);
                }}>Clear Filters</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;