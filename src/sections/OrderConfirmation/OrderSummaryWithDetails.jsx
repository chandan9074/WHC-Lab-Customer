"use client";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const OrderSummaryWithDetails = ({ orderSummary }) => {
    console.log("order---------------", orderSummary);
    return (
        <div className="border p-4 bg-white">
            <div className="flex items-center justify-between border-b pb-2 mb-4">
                <Text className="font-bold text-neutral-700">
                    Total items ({orderSummary.length} items)
                </Text>
                <Text className="font-bold text-neutral-700">
                    ${" "}
                    {orderSummary.reduce(
                        (acc, pro) => acc + pro.price * pro.quantity,
                        0
                    )}
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                {orderSummary?.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between border-b-2 border-dashed pb-3 last:border-none"
                        >
                            <div className="flex flex-col ">
                                <Text className="text-neutral-600 text-sm">
                                    {ele?.name}
                                </Text>
                                <Text className="whitespace-nowrap text-sm text-neutral-300">
                                    {ele?.quantity} x $
                                    {ele?.price || ele?.price}
                                </Text>
                            </div>
                            <Text className="whitespace-nowrap text-base text-neutral-600">
                                $&nbsp;
                                {ele?.quantity * ele?.price || ele?.price}
                            </Text>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderSummaryWithDetails;
