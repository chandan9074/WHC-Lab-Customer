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
    const accessToken = getCookie("accessToken");
    
    const [wishlistItems, setWishlistItems] = useState([]);

    const getProductWishlist = useCallback(async () => {
        const token = getCookie("accessToken");
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
    }, []);

    const createProductWishlist = async (productId, stockId, sku, currency) => {
        const token = getCookie("accessToken");
        try {
            const res = await MakeApiCall({
                apiUrl: WISHLISTS_URL,
                body: { productId, stockId, sku, currency },
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
        const token = getCookie("accessToken");
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
        accessToken && getProductWishlist();
    }, [getProductWishlist,accessToken]);

    const values = {
        wishlistItems,
        setWishlistItems,
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
