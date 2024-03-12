"use client";
// import { getCookie } from "cookies-next";
import ProductCard from "@/components/Card/ProductCard";
import { Select } from "antd";
import React from "react";
import ProductHeader from "./ProductHeader";
import { productsData } from "@/libs/productData";

const ProductDisplay = ({ data, filterData, wishListIds, selectedTab }) => {
    console.log(data);
    return (
        <div>
            <ProductHeader selectedTab={selectedTab} />
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {data.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <ProductCard data={item} wishListIds={wishListIds} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;
