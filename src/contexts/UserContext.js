import LocationService from "@/services/LocationService";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { currencyData } from "@/libs/common";
import ProductService from "@/services/productsService";
import HomeService from "@/services/HomeService";
import Icons from "../../public/assets/Icons";

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
    const [socialList, setSocialList] = useState(null);

    useEffect(() => {
        if (hasCookie("userInfo")) {
            const userData = JSON.parse(getCookie("userInfo"));
            setUserInfo(userData);
            const getCurrencyKey = currencyData[userData.country];
            if (getCurrencyKey) {
                setCurrency(getCurrencyKey);
            } else {
                setCookie("selected_currency", "Ireland");
                const newCurrencyKey = currencyData["Ireland"];
                setCurrency(newCurrencyKey);
            }
        }
        // else if (hasCookie("selected_currency")) {
        //     const currencyValue = getCookie("selected_currency");
        //     const getCurrencyKey = currencyData[currencyValue];
        //     setCurrency(getCurrencyKey);
        // }
        else {
            setCookie("selected_currency", "Ireland");
            const getCurrencyKey = currencyData["Ireland"];
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

    // getSocial list
    const getSocialMediaLinks = async () => {
        try {
            const res = await HomeService.getSocialLink();

            if (res?.status === 200) {
                const socialMediaLink = [
                    {
                        name: "facebook",
                        icon: Icons.facebook,
                        link: res?.doc?.socialLink?.facebookLink,
                    },
                    {
                        name: "instagram",
                        icon: Icons.instagram,
                        link: res?.doc?.socialLink?.instagramLink,
                    },
                    {
                        name: "linkedin",
                        icon: Icons.linkedin,
                        link: res?.doc?.socialLink?.linkedInLink,
                    },
                    {
                        name: "twitter",
                        icon: Icons.xLogo,
                        link: res?.doc?.socialLink?.twitterLink,
                    },
                ];

                setSocialList(socialMediaLink);
            }
        } catch (e) {
            toast.error(e?.message);
        }
    };

    useEffect(() => {
        getSocialMediaLinks();
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
        socialList,
    };
    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);
