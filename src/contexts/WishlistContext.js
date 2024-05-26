import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import MakeApiCall from "@/services/MakeApiCall";
import { MethodsStructure } from "../services/MethodsStructure";
import { WISHLISTS_URL } from "@/helpers/apiURLS";

const wishlistContext = createContext();

export function WishlistProvider({ children }) {
    const token = getCookie("accessToken");
    const [wishlistItems, setWishlistItems] = useState([]);

    const getProductWishlist = useCallback(async () => {
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                ...MethodsStructure.getMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                setWishlistItems(res?.docs);
                // toast.success(res?.message);
            }
        } catch (e) {
            toast.error(e?.message);
        }
    }, [token]);

    const createProductWishlist = async (productId, stockId, currency) => {
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                body: { productId, stockId, currency },
                ...MethodsStructure.postMethod({ Authorization: `${token}` }),
            });
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
            if (res.status === 200) {
                toast.success(res?.message);
                getProductWishlist();
            }
        } catch (e) {
            toast.error(e?.message);
        }
    };

    function checkProductInWishList(productIdToCheck) {
        return wishlistItems?.some(
            (product) => product.productId === productIdToCheck
        );
    }

    useEffect(() => {
        token && getProductWishlist();
    }, [getProductWishlist, token]);

    const values = {
        wishlistItems,
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
