import Layouts from "@/layouts";
import OrderConfirmation from "@/sections/OrderConfirmation/OrderConfirmation";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";
import OrderService from "@/services/OrderService";

export default async function OrderConfirmationPage({ params }) {
    const token = getCookie("accessToken", { cookies });
    const orderNumber = params.slug;

    // const [orderData] = await Promise.all([getOrderData(orderNumber, token)]);
    const orderData = await OrderService.getOrderData(
        "number",
        orderNumber,
        token
    );

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <OrderConfirmation orderSummary={orderData?.doc} />
            </Layouts.Primary>
        </Suspense>
    );
}
