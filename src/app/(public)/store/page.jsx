import Layouts from "@/layouts";
import React, { Suspense } from "react";
import ProductService from "@/services/productsService";
import dynamic from "next/dynamic";

const StoreContainer = dynamic(
    () => import("@/sections/Store/StoreContainer"),
    {
        ssr: false,
    }
);

async function Store(params) {
    const getProducts = ProductService.getProducts();
    const getCategories = ProductService.getCategories();

    console.log(params, "params value");

    const [productData, categoryData] = await Promise.all([
        getProducts,
        getCategories,
    ]);

    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <StoreContainer
                    productData={productData?.docs}
                    categoryData={categoryData?.docs}
                />
            </Layouts.Primary>
        </Suspense>
    );
}

export default Store;
