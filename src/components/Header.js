import {LOGO_URL} from "../utils/contsnats"
import {useState} from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonName, setButtonName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo">
                <img className="w-48" src={LOGO_URL} />
            </div>
            <div className="flex align-center">
                <ul className="flex py-5 my-5">
                    <li className="px-4">Online Status: {onlineStatus? "Online" : "Offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><button className="login" onClick={() => {
                        setButtonName((buttonName == "Login")? "Logout" : "Login");
                    }}>{buttonName}</button> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;