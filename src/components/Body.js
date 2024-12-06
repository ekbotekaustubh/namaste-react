import { useState } from "react"
import RestaurantCard from "./ReastaurantCard"
import resList from "../utils/mockData"

const Body = () => {
    // Local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
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
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;