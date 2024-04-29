import LocationService from "@/services/LocationService";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

const userContext = createContext();

export function UserProvider({ children }) {
    const [locations, setLocations] = useState([]);
    const token = getCookie("accessToken");

    // Get Locations
    const getLocation = async () => {
        try {
            const res = await LocationService.getLocation(token);
            const formattedLocations = res?.docs?.map((location) => ({
                label: location.name,
                value: location._id,
                flag: location.flag,
            }));

            setLocations(formattedLocations);
            console.log(formattedLocations);
            console.log(res);
        } catch (e) {
            toast.error(e?.message);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    const values = { locations, setLocations };
    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);
