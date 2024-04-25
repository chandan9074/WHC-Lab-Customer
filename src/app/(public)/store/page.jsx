import Layouts from "@/layouts";
import StoreContainer from "@/sections/Store/StoreContainer";
import React, { Suspense } from "react";
import ProductService from "@/services/productsService";

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
