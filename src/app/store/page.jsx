import Layouts from "@/layouts";
import ProductContainer from "@/sections/Home/Store/StoreContainer";
import React from "react";

const page = () => {
    return (
        <Layouts.Primary>
            <ProductContainer></ProductContainer>
        </Layouts.Primary>
    );
};

export default page;
