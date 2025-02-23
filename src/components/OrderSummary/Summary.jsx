import { useUserContext } from "@/contexts/UserContext";
import { Flex, Typography } from "antd";
import { usePathname } from "next/navigation";
import React from "react";

const { Text } = Typography;

function Summary({
    totalItems,
    subTotal,
    tax,
    shippingCharge,
    couponCode,
    discount,
    total,
    showTotalItemCount,
}) {
    const { currency } = useUserContext();
    const currentPath = usePathname();
    return (
        <div
            className={`${
                currentPath.includes("orders-history")
                    ? "bg-white"
                    : "bg-transparent"
            } border p-4 bg-neutral-10 rounded-lg`}
        >
            {showTotalItemCount && (
                <div className="border-b-2 pb-2 border-dashed mb-4">
                    <Container
                        content={`Total Items`}
                        value={totalItems}
                        currency={currency}
                        contentStyle="font-bold text-neutral-700"
                        valueStyle="font-bold text-neutral-700"
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
                <Container
                    content={"Vat"}
                    value={tax ? tax : 0}
                    currency={currency}
                    contentStyle="text-neutral-300"
                    valueStyle="text-neutral-300"
                />
                {/* <Container
            content={"Shipping cost"}
            value={shippingCharge ? shippingCharge : 0}
            contentStyle="text-neutral-300"
            valueStyle="text-neutral-300"
        /> */}
                {couponCode && (
                    <Container
                        content={"Discount"}
                        value={discount ? `${discount}` : 0}
                        contentStyle="text-neutral-300"
                        couponCode={couponCode}
                        currency={currency}
                        valueStyle="text-error-500"
                    />
                )}
                <Container
                    content={"Total"}
                    value={total}
                    currency={currency}
                    containerStyle="border-t-2 py-2 border-dashed"
                    contentStyle="text-neutral-700 font-semibold"
                    valueStyle="text-neutral-700 font-semibold"
                />
            </Flex>
        </div>
    );
}

export default Summary;

const Container = ({
    content,
    value,
    currency,
    couponCode,
    contentStyle,
    valueStyle,
    containerStyle,
}) => (
    <Flex horizontal="true" justify="space-between" className={containerStyle}>
        <Text className={contentStyle}>
            {couponCode ? `${content} (${couponCode})` : content}
        </Text>
        <Text className={valueStyle}>{`${content === "Discount" ? "- " : ""}${
            content.includes("Total Items") ? "" : `${currency?.icon}`
        }${value}`}</Text>
    </Flex>
);
