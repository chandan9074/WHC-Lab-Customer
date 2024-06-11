"use client";
// import { getCookie } from "cookies-next";
import ProductCard from "@/components/Card/ProductCard";
import { useCallback, useEffect } from "react";
import ProductHeader from "./ProductHeader";
// import { productsData } from "@/libs/productData";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { getCookie } from "cookies-next";

const ProductDisplay = ({
    data,
    filterData,
    selectedTab,
    productData,
    setSearchQuery,
    searchQuery,
}) => {
    const token = getCookie("accessToken");

    const { wishlistItems, getProductWishlist } = useWishlistContext();

    const handleWishlists = useCallback(async () => {
        const res = await getProductWishlist();
        // Do something with the response
        console.log(res);
    }, [getProductWishlist]);

    useEffect(() => {
        token && handleWishlists();
    }, [handleWishlists, token]);

    return (
        <div className="w-full">
            <ProductHeader
                selectedTab={selectedTab}
                dataLength={data?.length}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
            />
            {data?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                    {data?.map((item, index) => (
                        <div className="col-span-1" key={index}>
                            <ProductCard
                                data={item}
                                wishListIds={wishlistItems}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full p-10 bg-gray-100 flex items-center justify-center">
                    <p className="text-red-500 font-semibold">No Data Found</p>
                </div>
            )}
        </div>
    );
};

export default ProductDisplay;
