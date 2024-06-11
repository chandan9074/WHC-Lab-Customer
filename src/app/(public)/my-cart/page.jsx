import Layouts from "@/layouts";
import CartContainer from "@/sections/CartContainer";
import React, { Suspense } from "react";

function MyCart() {
    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
                    <CartContainer />
                </div>
            </Layouts.Primary>
        </Suspense>
    );
}

export default MyCart;
