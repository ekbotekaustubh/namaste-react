import {useEffect, useState} from "react";
import {MENU_API, DEMO_RESTAURANT_MENU} from "./contsnats";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);

            // 🚨 Handle 202 explicitly
            if (response.status === 202) {
                // response.data = demoData;
                // throw new Error("Menu data not ready yet (202)");
                setResInfo(DEMO_RESTAURANT_MENU.data);

            } else {

                const text = await response.text();

                // 🚨 Empty response guard
                if (!text) {
                    throw new Error("Empty response from API");
                }

                const json = JSON.parse(text);
                setResInfo(json?.data);
                }
        } catch(err) {
            console.error("Menu fetch failed:", err);
            setError(err.message);
        }
    };

    return { resInfo, error };
};

export default useRestaurantMenu;