"use client";
import NoDataFound from "@/components/common/NoDataFound";
import Wish from "./Wish";
// import { getCookie } from "cookies-next";
// import WishlistServices from "@/services/WishlistServices";
import { useEffect, useState } from "react";
import { wishlistData } from "@/libs/productData";

const Wishlists = () => {
    const [loading, setLoading] = useState(true);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        handleGetWishList();
    }, []);

    const handleGetWishList = async () => {
        setLoading(true);
        // const token = getCookie("accessToken");
        // const getWishlist = await WishlistServices.getWishlist(token);
        setWishList(wishlistData);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="w-full rounded-md mx-auto p-4 lg:py-6 lg:px-[58px]">
                <div className="flex animate-pulse flex-col items-center h-full justify-center space-x">
                    <div className="flex flex-col w-full gap-10  rounded-lg">
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                        <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* <Spin spinning={loading} fullscreen /> */}
            <div className={`flex flex-col gap-0`}>
                {wishList.length === 0 && (
                    <NoDataFound message="You have no wishlist currently!" />
                )}
                {wishList?.length > 0 &&
                    wishList?.map((wish, index) => {
                        return (
                            <div
                                key={wish._id}
                                className="border-b last:border-none py-4 sm:py-5"
                            >
                                <Wish
                                    image={wish.productFeaturedImage}
                                    name={wish.productName}
                                    price={
                                        wish.productOfferPrice
                                            ? wish.productOfferPrice
                                            : wish.productPrice
                                    }
                                    inStock={wish.inStock}
                                    id={wish.productId}
                                    handleGetWishList={handleGetWishList}
                                    setLoading={setLoading}
                                />
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Wishlists;
