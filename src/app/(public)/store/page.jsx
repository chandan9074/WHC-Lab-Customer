import Layouts from "@/layouts";
import React, { Suspense } from "react";
import ProductService from "@/services/productsService";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";
import { StoreSkeleton } from "@/components/common/StoreSkeleton";
import Loader from "@/components/common/Loader";
import PopupModalComponent from "@/sections/Home/PopupModalSection";
import MakeApiCall from "@/services/MakeApiCall";

const StoreContainer = dynamic(
    () => import("@/sections/Store/StoreContainer"),
    {
        ssr: false,
    }
);

async function getLocalIP() {
    const res = await MakeApiCall({
        apiUrl: "https://api.ipify.org?format=json",
    });
    return res;
}

import { headers } from "next/headers";
function IP() {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function Store(params) {
    const response = await getLocalIP();
    // console.log(response);
    const res = IP();
    console.log(res, "ip local");

    const getProducts = ProductService.getProducts(
        {
            ...params.searchParams,
        },
        res
    );
    const getCategories = ProductService.getCategories(res);

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
