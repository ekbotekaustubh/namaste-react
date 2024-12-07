import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import RestaurantCard from "./ReastaurantCard"
import Shimmer from "./Shimmer";


const Body = () => {
    // Local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    return (listOfRestaurants.length === 0)? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info?.avgRating > 4.4
                    );
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => (res.info?.veg === true)
                    )
                    setFilteredRestaurant(filteredList);
                }}>Only Veg</button>

                <button className="filter-btn" onClick={() => {
                    setFilteredRestaurant(listOfRestaurants);
                }}>Clear Filters</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurants.map(restaurant => (
                        <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;