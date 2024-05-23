"use client";
import { useWishlistContext } from "@/contexts/WishlistContext";
import Wishlists from "@/sections/Profile/Wishlist/Wishlists";

const MyWishLists = () => {
    const { wishlistItems, deleteWishlist } = useWishlistContext();

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
