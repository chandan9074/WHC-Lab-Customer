import dynamic from "next/dynamic";
import React from "react";
// import ProductLeftView from "./ProductLeftView";
// import ProductRightView from "./ProductRightView";
// import ProductViewMobile from "./ProductViewMobile";

const ProductLeftView = dynamic(() => import("./ProductLeftView"), {
    ssr: false,
});

const ProductRightView = dynamic(() => import("./ProductRightView"), {
    ssr: false,
});

const ProductViewMobile = dynamic(() => import("./ProductViewMobile"), {
    ssr: false,
});

const ProductView = ({ data }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div className="hidden lg:block col-span-1">
                <ProductLeftView data={data} />
            </div>

            <div className="hidden lg:flex col-span-1 lg:justify-end">
                <ProductRightView data={data} />
            </div>

            <div className="col-span-1 block lg:hidden">
                <ProductViewMobile data={data} />
            </div>
        </div>
    );
};

export default ProductView;
