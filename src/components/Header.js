import {LOGO_URL} from "../utils/contsnats"
import {useState} from "react";

const Header = () => {
    const [buttonName, setButtonName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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