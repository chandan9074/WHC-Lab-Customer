import { WISHLISTS_URL } from "@/helpers/apiURLS";
import Wishlists from "@/sections/Profile/Wishlist/Wishlists";
import { getCookie } from "cookies-next";
import { cookies } from 'next/headers';


async function getWishListData(token) {
    const res = await fetch(WISHLISTS_URL, {
        headers: { Authorization: token },
    });
    return res.json();
}

const MyWishLists = async () => {
    const token = getCookie("accessToken", { cookies });
    const wishListsData = await getWishListData(token);
    return (
        <div className="py-5 px-2 md:p-12">
            <Wishlists wishLists={wishListsData?.error ? [] : wishListsData?.docs} />
        </div>
    );
};

export default MyWishLists;
