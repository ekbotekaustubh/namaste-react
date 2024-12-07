import Header from "./Header";
import Footer from "./Footer";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="app">
            <Header />
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>
                {err.status + ": " + err.statusText}
            </h3>
            <Footer />
        </div>
    );
}

export default Error;