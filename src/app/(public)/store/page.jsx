import Layouts from "@/layouts";
import React, { Suspense } from "react";
import ProductService from "@/services/productsService";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";
import { StoreSkeleton } from "@/components/common/StoreSkeleton";
import Loader from "@/components/common/Loader";
import PopupModalComponent from "@/sections/Home/PopupModalSection";

const StoreContainer = dynamic(
    () => import("@/sections/Store/StoreContainer"),
    {
        ssr: false,
    }
);

async function Store(params) {
    const getProducts = ProductService.getProducts({
        ...params.searchParams,
    });
    const getCategories = ProductService.getCategories();

    const [productData, categoryData] = await Promise.all([
        getProducts,
        getCategories,
    ]);

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <StoreContainer
                    productData={productData?.docs}
                    // productData={[]}
                    categoryData={categoryData?.docs}
                    initialCategory={params.searchParams.category}
                />
                <PopupModalComponent pageLocation="store-page" />
            </Layouts.Primary>
        </Suspense>
    );
}

export default Store;
