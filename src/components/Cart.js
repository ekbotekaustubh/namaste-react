import {useSelector} from "react-redux";
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            <ItemList items={cartItems} />
            { cartItems.length == 0 && (<h1>Cart is empty. add items to the cart.</h1>)}
        </div>
    </div>;

};

export default Cart;