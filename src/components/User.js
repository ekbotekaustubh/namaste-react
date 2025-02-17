import {useEffect, useState} from "react";

const User = ({name, location, contact}) => {
    const[count, setCount] = useState(0);
    useEffect(() =>{
        const myInterval = setInterval(() => {
            console.log('Namaste React OP');
        }, 1000)

        return () => {
            clearInterval(myInterval);
            console.log("use effect return.")
        };
    }, [count]);
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <button onClick={() => {
                setCount(count+1);
            }}>Increase count</button>
        </div>
    );
}

export default User;