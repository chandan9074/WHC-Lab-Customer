"use client";
import React from "react";
import { Typography } from "antd";
import { useUserContext } from "@/contexts/UserContext";

const { Text } = Typography;

const OrderSummaryWithProduct = ({ orderItem, total }) => {
    const { currency } = useUserContext();
    return (
        <div className="border p-4 bg-neutral-10 rounded-[4px]">
            <div className="flex items-center justify-between border-b pb-2 mb-2">
                <Text className="font-bold text-neutral-700">
                    Total items ({orderItem?.length} items){" "}
                </Text>
                <Text className="font-bold text-neutral-700">
                    {currency?.icon} {total}
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                {orderItem?.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start justify-between border-b-2 border-dashed pb-3"
                        >
                            <div className="flex flex-col ">
                                <Text className="text-neutral-600 text-sm">
                                    {ele?.name}
                                </Text>
                                <Text className="whitespace-nowrap text-sm text-neutral-300">
                                    {ele?.quantity} x {currency?.icon}
                                    {ele?.offerPrice || ele?.price}
                                </Text>
                            </div>
                            <Text className="whitespace-nowrap text-base text-neutral-600">
                                {currency?.icon}
                                {ele?.quantity * ele?.offerPrice || ele?.price}
                            </Text>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderSummaryWithProduct;
