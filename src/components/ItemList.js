import {CDN_URL} from "../utils/contsnats";

const ItemList = ({items}) => {
    return (
        <div>
            {
                items?.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b border-gray-200 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span> -
                                <span> ₹ {(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</span>
                            </div>
                            <p className="text-xs ">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 bg-white shadow-lg rounded-lg mx-16">Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>

                        </div>
                    </div>))
            }
        </div>
    );
};

export default ItemList;