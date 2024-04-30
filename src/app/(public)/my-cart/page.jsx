import Layouts from "@/layouts";
import CartContainer from "@/sections/CartContainer";
import React from "react";

function MyCart() {
    return (
        <Layouts.Primary>
            <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
                <CartContainer />
            </div>
        </Layouts.Primary>
    );
}

export default MyCart;
