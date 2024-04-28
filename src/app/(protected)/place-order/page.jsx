import React from "react";
import Layouts from "@/layouts";
import PlaceOrderContainer from "@/sections/PlaceOrder";

function PlaceOrder() {
    return (
        <Layouts.Primary>
            <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
                <PlaceOrderContainer />
            </div>
        </Layouts.Primary>
    );
}

export default PlaceOrder;
