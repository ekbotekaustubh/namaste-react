import {LOGO_URL} from "../utils/contsnats"
import {useState} from "react";
import { Link } from "react-router-dom"

const Header = () => {
    const [buttonName, setButtonName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="login" onClick={() => {
                        setButtonName((buttonName == "Login")? "Logout" : "Login");
                    }}>{buttonName}</button> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;