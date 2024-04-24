import Layouts from "@/layouts";
import StoreContainer from "@/sections/Store/StoreContainer";
import React from "react";
import ProductService from "@/services/productsService";

const page = async () => {

    const getProducts = ProductService.getProducts()

    const [productData] = await Promise.all([getProducts]);

    return (
        <Layouts.Primary>
            <StoreContainer productData={productData?.docs} />
        </Layouts.Primary>
    );
};

export default page;
