import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import MakeApiCall from "@/services/MakeApiCall";
import { MethodsStructure } from "../services/MethodsStructure";
import { WISHLISTS_URL } from "@/helpers/apiURLS";

const wishlistContext = createContext();

export function WishlistProvider({ children }) {
    const token = getCookie("accessToken");
    const [wishlistIds, setWishlistIds] = useState([]);

    const getProductWishlist = async () => {
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                ...MethodsStructure.getMethod({ Authorization: `${token}` }),
            });
            console.log(res);
            if (res?.status === 200) {
                console.log(res?.docs);
                setWishlistIds(res?.docs);
                // toast.success(res?.message);
            }
        } catch (e) {
            toast.error(e?.message);
        }
    };

    const createProductWishlist = async (productId, stockId) => {
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                body: { productId, stockId },
                ...MethodsStructure.postMethod({ Authorization: `${token}` }),
            });
            console.log(res);
            if (res.status === 200) {
                toast.success(res?.message);
            }
        } catch (e) {
            toast.error(e?.message);
        }
    };

    const deleteWishlist = async (id) => {
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                query: { id },
                ...MethodsStructure.deleteMethod({ Authorization: `${token}` }),
            });
            console.log(res);
            if (res.status === 200) {
                toast.success(res?.message);
                getProductWishlist();
            }
        } catch (e) {
            toast.error(e?.message);
        }
    };

    function checkProductInWishList(productIdToCheck) {
        return wishlistIds?.some(
            (product) => product.productId === productIdToCheck
        );
    }

    useEffect(() => {
        token && getProductWishlist();
    }, [token]);

    const values = {
        wishlistIds,
        createProductWishlist,
        deleteWishlist,
        getProductWishlist,
        checkProductInWishList,
    };

    return (
        <wishlistContext.Provider value={values}>
            {children}
        </wishlistContext.Provider>
    );
}

export const useWishlistContext = () => useContext(wishlistContext);
