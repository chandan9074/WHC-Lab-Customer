import Filter from "@/components/Filter";
import React from "react";
import ProductDisplay from "./ProductDisplay";

const ProductListContainer = ({ selectedTab }) => {
    return (
        <div className="flex gap-x-6">
            <div className="hidden md:block">
                <Filter.Primary />
            </div>

            <ProductDisplay selectedTab={selectedTab} />
        </div>
    );
};

export default ProductListContainer;
