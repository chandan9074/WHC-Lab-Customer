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

async function Store() {
    const getProducts = ProductService.getProducts();

    const [productData] = await Promise.all([getProducts]);

    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <StoreContainer productData={productData?.docs} />
            </Layouts.Primary>
        </Suspense>
    );
}

export default Store;
