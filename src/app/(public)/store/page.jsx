import Layouts from "@/layouts";
import React, { Suspense } from "react";
import ProductService from "@/services/productsService";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";

const StoreContainer = dynamic(
    () => import("@/sections/Store/StoreContainer"),
    {
        ssr: false,
    }
);

async function Store(params) {
    const _selectedLocation = getCookie("selected_location");
    const locationId = _selectedLocation && JSON.parse(_selectedLocation);
    const getProducts = ProductService.getProducts({
        locationId: locationId || "",
        category: params.searchParams.category || "Brewing Yeast",
    });
    const getCategories = ProductService.getCategories();

    // console.log(params, "params value");

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
                    initialCategory={params.searchParams.category}
                />
            </Layouts.Primary>
        </Suspense>
    );
}

export default Store;
