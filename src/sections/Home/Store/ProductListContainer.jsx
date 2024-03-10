import Filter from "@/components/Filter";
import React from "react";
import ProductDisplay from "./ProductDisplay";

const ProductListContainer = () => {
    return (
        <div className="flex gap-x-6">
            <Filter.Primary />

            <ProductDisplay />
        </div>
    );
};

export default ProductListContainer;
