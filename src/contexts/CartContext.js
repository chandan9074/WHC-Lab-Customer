import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
} from "react";
import CartService from "@/services/CartService";
import { getCookie } from "cookies-next";

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingCalculateData, setLoadingCalculateData] = useState({
        isLoading: false,
        id: "",
    });
    // const router = useRouter();

    const token = getCookie("accessToken");

    const getUpdateCartList = useCallback(async (token) => {
        if (token) {
            try {
                setLoading(true);
                const res = await CartService.getCart(token);

                if (res?.status === 200) {
                    setCartItem(res?.docs);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
    }, []);

    const createCartItem = async (id, quantity = 1, stockId, token) => {
        return await CartService.createCart(
            { productId: id, stockId, quantity: JSON.stringify(quantity) },
            token
        );
    };

    const resetCartItemLength = () => {
        setCartItem([]);
    };

    // For Temporary
    // const [calculateData, setCalculateData] = useState({});
    // const getCartCalculateData = async (ids) => {
    //     const res = await OrderService.getCalculateData(ids, token);

    //     if (res?.status === 200) {
    //         setCalculateData(res?.body?.doc);
    //     }
    // };

    useEffect(() => {
        getUpdateCartList(token);
    }, [getUpdateCartList, token]);

    const values = {
        cartItem,
        loading,
        loadingCalculateData,
        setLoadingCalculateData,
        setCartItem,
        setLoading,
        getUpdateCartList,
        createCartItem,
        resetCartItemLength,
    };

    return (
        <cartContext.Provider value={values}>{children}</cartContext.Provider>
    );
}

export const useCart = () => useContext(cartContext);
