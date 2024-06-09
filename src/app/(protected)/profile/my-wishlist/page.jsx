"use client";
import { useWishlistContext } from "@/contexts/WishlistContext";
import Wishlists from "@/sections/Profile/Wishlist/Wishlists";
import { useEffect } from "react";

const MyWishLists = () => {
    const { wishlistItems, getProductWishlist, deleteWishlist } =
        useWishlistContext();

    const handleWishlists = async () => {
        const res = await getProductWishlist();
    };

    useEffect(() => {
        handleWishlists();
    }, []);

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
