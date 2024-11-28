import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (<h1 className="head" tabIndex="1">Namaste React using JSX</h1> );
const name = "Kaustubh";
const Heading = () => (
    <div>
        {Title()}
        <Title></Title>
        <Title />
        <h2 id="heading" className="heading" tabIndex="2">Namaste React Functional Component</h2>
        <span>My name is {name}</span>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);