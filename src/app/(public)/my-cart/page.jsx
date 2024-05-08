import Layouts from "@/layouts";
import CartContainer from "@/sections/CartContainer";
import React from "react";

function MyCart() {
    return (
        <Layouts.Secondary>
            <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
                <CartContainer />
            </div>
        </Layouts.Secondary>
    );
}

export default MyCart;
