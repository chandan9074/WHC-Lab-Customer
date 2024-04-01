import React from "react";
import { Flex, Typography } from "antd";
import { useCart } from "@/contexts/CartContext";

const { Text } = Typography;

const Summary = ({
    totalItems,
    subTotal,
    tax,
    shippingCharge,
    discount,
    total,
    showTotalItemCount,
}) => {
    return (
        <div className="border p-4 bg-white rounded-sm">
            {showTotalItemCount && (
                <div className="border-b-2 pb-2 border-dashed mb-4">
                    <Container
                        content={`Total Items`}
                        value={totalItems}
                        contentStyle="font-bold text-neutral-700"
                        valueStyle="font-bold text-neutral-700"
                    />
                </div>
            )}
            <Flex vertical="true" gap={"middle"}>
                <Container
                    content={"Sub total"}
                    value={subTotal ? subTotal : 0}
                    // value={
                    //     calculateData?.subtotal ? calculateData?.subtotal : 0
                    // }
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                />
                <Container
                    content={"Vat"}
                    value={tax ? tax : 0}
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                />
                {/* <Container
                    content={"Shipping cost"}
                    value={shippingCharge ? shippingCharge : 0}
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                />
                <Container
                    content={"Discount"}
                    value={discount ? `${discount}` : 0}
                    contentStyle="text-neutral-300"
                    valueStyle="text-error-500"
                /> */}
                <Container
                    content={"Total"}
                    value={total}
                    containerStyle="border-t-2 py-2 border-dashed"
                    contentStyle="text-neutral-700 font-semibold"
                    valueStyle="text-neutral-700 font-semibold"
                />
            </Flex>
        </div>
    );
};

export default Summary;

const Container = ({
    content,
    value,
    contentStyle,
    valueStyle,
    containerStyle,
}) => (
    <Flex horizontal="true" justify="space-between" className={containerStyle}>
        <Text className={contentStyle}>{content}</Text>
        <Text className={valueStyle}>{`${content === "Discount" ? "- " : ""}${
            content.includes("Total Items") ? "" : "$"
        }${value}`}</Text>
    </Flex>
);
