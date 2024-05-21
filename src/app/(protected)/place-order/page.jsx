import React, { Suspense } from "react";
import Layouts from "@/layouts";
import PlaceOrderContainer from "@/sections/PlaceOrder";
import { getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import UserService from "@/services/UserService/UserService";

async function PlaceOrder() {
    const token = getCookie("accessToken", { cookies });
    const orderData = getCookie("orderData", { cookies });

    let userAddress;

    if (token) {
        userAddress = await UserService.getUserAddress(token);
    }

    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20 mt-5">
                    {/* Heading */}
                    <div>
                        <h1 className="font-semibold text-[20px] text-neutral-700">
                            Checkout
                        </h1>
                        <p className="text-[#5D6B82]">
                            Please fill in the fields below and place order to
                            complete your purchase!
                        </p>
                    </div>

                    <PlaceOrderContainer
                        addressData={userAddress?.docs ? userAddress?.docs : []}
                    />
                </div>
            </Layouts.Primary>
        </Suspense>
    );
}

export default PlaceOrder;
