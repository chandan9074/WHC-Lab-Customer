import LocationService from "@/services/LocationService";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { currencyData } from "@/libs/common";

const userContext = createContext();

export function UserProvider({ children }) {
    const [locations, setLocations] = useState([]);
    // const token = getCookie("accessToken");
    const [userInfo, setUserInfo] = useState(null);
    const [currency, setCurrency] = useState(null)

    useEffect(() => {
        if (hasCookie("userInfo")) {
            setUserInfo(JSON.parse(getCookie("userInfo")));
        }
        if(hasCookie("selected_currency")){
            const currencyValue = getCookie("selected_currency")
            const getCurrencyKey = currencyData[currencyValue];
            setCurrency(getCurrencyKey);
        }else{
            setCookie("selected_currency","GBP")
            const getCurrencyKey = currencyData["GBP"];
            setCurrency(getCurrencyKey);
        }
    }, []);

    // Get Locations
    const getLocation = async () => {
        try {
            const res = await LocationService.getLocation();
            const formattedLocations = res?.docs?.map((location) => ({
                label: location.name,
                value: location._id,
                flag: location.flag,
                currency: location.currency
            }));

            setLocations(formattedLocations);
        } catch (e) {
            toast.error(e?.message);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    const values = { locations, setLocations,userInfo,setUserInfo, setCurrency, currency };
    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);
