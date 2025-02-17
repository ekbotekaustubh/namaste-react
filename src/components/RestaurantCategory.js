import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div key={data.itemCards.categoryId} className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            {/* Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>arrow</span>
            </div>
            {/* Accordian Body */}
            {showItems && <ItemList key={data.title} items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory