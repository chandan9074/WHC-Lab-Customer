import React from "react";
import { Flex, Typography } from "antd";
import { useUserContext } from "@/contexts/UserContext";
// import { useCart } from "@/contexts/CartContext";

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
    const { currency } = useUserContext();
    return (
        <div className="border p-4  rounded-lg">
            {showTotalItemCount && (
                <div className="border-b-2 pb-2 border-dashed mb-4">
                    <Container
                        content={`Total Items`}
                        currency={currency}
                        value={totalItems}
                        contentStyle="font-medium text-brand-blue-800"
                        valueStyle="font-medium text-brand-blue-800"
                    />
                </div>
            )}
            <Flex vertical="true" gap={"middle"}>
                <Container
                    content={"Sub total"}
                    value={subTotal ? subTotal : 0}
                    currency={currency}
                    // value={
                    //     calculateData?.subtotal ? calculateData?.subtotal : 0
                    // }
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                />
                {/* <Container
                    content={"Vat"}
                    value={tax ? tax : 0}
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                /> */}
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
                    currency={currency}
                    containerStyle="border-t-2 py-2 border-dashed"
                    contentStyle="text-brand-blue-800 font-medium"
                    valueStyle="text-brand-blue-800 font-medium"
                />
            </Flex>
        </div>
    );
};

export default Summary;

const Container = ({
    content,
    value,
    currency,
    contentStyle,
    valueStyle,
    containerStyle,
}) => (
    <Flex horizontal="true" justify="space-between" className={containerStyle}>
        <Text className={contentStyle}>{content}</Text>
        <Text className={valueStyle}>{`${content === "Discount" ? "- " : ""}${
            content.includes("Total Items") ? "" : `${currency.icon}`
        }${value}`}</Text>
    </Flex>
);
