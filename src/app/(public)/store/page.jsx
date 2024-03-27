import Layouts from "@/layouts";
import StoreContainer from "@/sections/Store/StoreContainer";
import ProductService from "@/services/productsService";
import React from "react";

const page = async () => {
    const getProducts = ProductService.getProducts();

    const [productData] = await Promise.all([getProducts]);

    console.log(productData);

    return (
        <Layouts.Primary>
            <StoreContainer productData={productData?.body?.docs} />
        </Layouts.Primary>
    );
};

export default page;
