import LocationService from "@/services/LocationService";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { currencyData } from "@/libs/common";
import ProductService from "@/services/productsService";

const userContext = createContext();

export function UserProvider({ children }) {
    const [locations, setLocations] = useState([]);
    // const token = getCookie("accessToken");
    const [userInfo, setUserInfo] = useState(null);
    const [currency, setCurrency] = useState(null);
    const [userProfileInfo, setUserProfileInfo] = useState(null);
    const [productList, setProductList] = useState([]);
    const [selectedTab, setSelectedTab] = useState(null);
    const [productLoading, setProductLoading] = useState(false);
    const [navLocation, setNavLocation] = useState(null);
    const [navLocationValue, setNavLocationValue] = useState(null);

    useEffect(() => {
        if (hasCookie("userInfo")) {
            setUserInfo(JSON.parse(getCookie("userInfo")));
        }
        if (hasCookie("selected_currency")) {
            const currencyValue = getCookie("selected_currency");
            const getCurrencyKey = currencyData[currencyValue];
            setCurrency(getCurrencyKey);
        } else {
            setCookie("selected_currency", "GBP");
            const getCurrencyKey = currencyData["GBP"];
            setCurrency(getCurrencyKey);
        }
        if (hasCookie("selected_location")) {
            const location = JSON.parse(getCookie("selected_location"));
            setNavLocationValue(location);
        }
    }, []);

    const handleLocation = async (locationId) => {
        setProductLoading(true);
        const category = selectedTab.name;
        const response = await ProductService.getProducts({
            locationId,
            category,
        });
        // console.log(response, "reposnse----");
        console.log({ response });
        setProductList(response?.docs);
        setProductLoading(false);
    };

    // Get Locations
    const getLocation = async () => {
        try {
            const res = await LocationService.getLocation();
            const formattedLocations = res?.docs?.map((location) => ({
                label: location.name,
                value: location._id,
                flag: location.flag,
                currency: location.currency,
            }));

            setLocations(formattedLocations);
        } catch (e) {
            toast.error(e?.message);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    const values = {
        locations,
        setLocations,
        userInfo,
        setUserInfo,
        setCurrency,
        currency,
        userProfileInfo,
        setUserProfileInfo,
        setProductList,
        productList,
        setSelectedTab,
        selectedTab,
        handleLocation,
        productLoading,
        setProductLoading,
        setNavLocation,
        navLocation,
        setNavLocationValue,
        navLocationValue,
    };
    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);
