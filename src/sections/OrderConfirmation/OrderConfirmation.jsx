"use client";
import React, { useCallback, useEffect } from "react";
import { Typography } from "antd";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import Summary from "../Profile/Orders/OrderSummary/Summary";
import Link from "next/link";
import { PRODUCTS_PATH } from "@/helpers/slug";
import OrderSummaryWithDetails from "./OrderSummaryWithDetails";
import { getCookie, hasCookie, deleteCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";

const { Text } = Typography;

const OrderConfirmation = ({ orderSummary }) => {
    const router = useRouter();
    const paths = usePathname();

    const handleDeleteCookie = useCallback(() => {
        deleteCookie("orderData");
        router.replace(paths);
    }, [paths, router]);

    useEffect(handleDeleteCookie, [handleDeleteCookie]);

    return (
        <div className="container mx-auto px-6 sm:px-0 py-12 flex flex-col gap-8">
            <div>
                <div className="border-b-2 pb-4 mb-4">
                    <Text className="font-bold text-2xl text-neutral-700">
                        Order Confirmation
                    </Text>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                        alt="order confirmation icon"
                        src={Icons.order_confirmation}
                        height={140}
                        width={190}
                    />
                    <Text className="font-bold text-2xl text-neutral-700">
                        Thanks for your order!
                    </Text>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Text className="text-neutral-300">
                            Your order has been placed successfully.
                            <br />
                        </Text>
                        <Text className="text-neutral-300">
                            Please be patient while we confirm your order.
                        </Text>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="hidden md:block border-b-2 pb-4 mb-4">
                    <Text className="font-bold text-2xl text-neutral-700">
                        Order Summary
                    </Text>
                </div>

                <div className="py-6 px-4 md:py-12 md:px-6 bg-white flex flex-col justify-end gap-y-6 md:gap-y-12">
                    <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
                        <OrderSummaryWithDetails
                            orderSummary={orderSummary?.lineItems}
                        />

                        <Summary
                            total={orderSummary?.total}
                            subTotal={orderSummary?.subtotal}
                            totalItems={orderSummary?.lineItems.length}
                            // shippingCharge={shippingCharge}
                            // discount={discountAmount}
                            tax={orderSummary?.vat}
                            showTotalItemCount={orderSummary?.lineItems.length}
                        />
                    </div>

                    <Link
                        href={PRODUCTS_PATH}
                        className="text-base font-semibold text-neutral-700 leading-6 border border-neutral-700 rounded-sm p-4 ml-auto w-full md:w-auto flex justify-center"
                    >
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
