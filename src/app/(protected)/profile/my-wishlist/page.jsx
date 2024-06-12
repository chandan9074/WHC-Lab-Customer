"use client";
import { useWishlistContext } from "@/contexts/WishlistContext";
import Wishlists from "@/sections/Profile/Wishlist/Wishlists";
import { getCookie } from "cookies-next";
import { useCallback, useEffect } from "react";

const MyWishLists = () => {
    const { wishlistItems, getProductWishlist, deleteWishlist } =
        useWishlistContext();

    const token = getCookie("accessToken");

    const handleWishlists = useCallback(async () => {
        const res = await getProductWishlist();
        // You can do something with res here if needed
    }, [getProductWishlist]);

    useEffect(() => {
        if (token) {
            handleWishlists();
        }
    }, [token, handleWishlists]);

    return (
        <div className="py-5 px-2 md:p-12">
            <Wishlists
                wishLists={wishlistItems.length > 0 ? wishlistItems : []}
                handleDelete={deleteWishlist}
            />
        </div>
    );
};

export default MyWishLists;
