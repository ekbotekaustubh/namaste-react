import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Parent Constructor');
    }

    componentDidMount() {
        // console.log('Parent componentDidMount');
    }
    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About</h1>
                <div>LoggedIn User: <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer></div>
                <h2>This is namaste react web series.</h2>
                <User name="Kaustubh Ekbote (Function)" location="Pune" contact="kaustubh51@gmail.com"  />
                <UserClass  name="Kaustubh Ekbote (Class)" location="Pune" contact="kaustubh51@gmail.com" />
            </div>
        );
    }
}

export default About;