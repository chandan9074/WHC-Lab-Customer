"use client";
// import { getCookie } from "cookies-next";
import ProductCard from "@/components/Card/ProductCard";
import { Select } from "antd";
import React from "react";
import ProductHeader from "./ProductHeader";
// import { productsData } from "@/libs/productData";
import { useWishlistContext } from "@/contexts/WishlistContext";

const ProductDisplay = ({ data, filterData, selectedTab, productData }) => {
    const { wishlistIds } = useWishlistContext();
    console.log(wishlistIds);

    return (
        <div>
            <ProductHeader
                selectedTab={selectedTab}
                dataLength={data?.length}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {data?.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <ProductCard data={item} wishListIds={wishlistIds} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;
