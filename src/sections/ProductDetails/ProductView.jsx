import React from "react";
import ProductLeftView from "./ProductLeftView";
import ProductRightView from "./ProductRightView";
import ProductViewMobile from "./ProductViewMobile";

const ProductView = ({ data }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div className="hidden lg:block col-span-1">
                <ProductLeftView data={data} />
            </div>

            <div className="hidden lg:block col-span-1">
                <ProductRightView data={data} />
            </div>

            <div className="col-span-1 block lg:hidden">
                <ProductViewMobile data={data} />
            </div>
        </div>
    );
};

export default ProductView;
