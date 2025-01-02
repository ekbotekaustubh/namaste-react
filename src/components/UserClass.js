import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: "",
                email: "",
                avatar_url: "",
            }
        }
        // console.log("Child constructor");
    }
    async componentDidMount() {
        // console.log('Child componentDidMount');
        const data = await fetch("https://api.github.com/users/ekbotekaustubh");
        const json = await data.json();
        this.myInterval = setInterval(() => {
            console.log('Namaste React OP');
        }, 1000)
        this.setState({
            userInfo: json,
        });

    }

    componentDidUpdate() {
        console.log('Component did update.')
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
        console.log('Component will unmount.')
    }

    render() {
        const {name, location, email, avatar_url} = this.state.userInfo;
        //console.log("Child Render");
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {email}</h4>
            </div>
        );
    }
}

export default UserClass;