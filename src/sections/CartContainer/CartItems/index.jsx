"use client";
import React from "react";
import { Typography, Table, Button, message } from "antd";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { getCookie } from "cookies-next";
import Cart from "./Cart";
import Link from "next/link";
import Buttons from "@/components/Buttons";
import { PRODUCTS_PATH } from "@/helpers/slug";

const { Text, Title } = Typography;

const CartList = ({
    cartItems,
    orderItem,
    addOrderItem,
    removeOrderItem,
    handleUpdateOrderItem,
    getUpdateCartList,
    // calculateOrder,
}) => {
    return (
        <div className="bg-white p-2 sm:p-8 rounded-lg border">
            {/* For tablet and desktop version. */}
            <div className="flex-col gap-8 ">
                {/* Heading section */}
                <div className="hidden md:grid grid-cols-12 justify-items-center gap-4 pb-4 border-b">
                    <Text className="col-span-5 text-sm font-semibold text-neutral-600 mr-auto pl-8">
                        Product
                    </Text>
                    <Text className="col-span-2 text-sm font-semibold text-neutral-600">
                        Price
                    </Text>
                    <Text className="col-span-2 text-sm font-semibold text-neutral-600">
                        Quantity
                    </Text>
                    <Text className="col-span-2 text-sm font-semibold text-neutral-600">
                        Total price
                    </Text>
                    <div className="col-span-1 text-sm font-semibold text-neutral-600">
                        <Text className="whitespace-nowrap text-sm font-semibold text-neutral-600">
                            Action
                        </Text>
                    </div>
                </div>

                <div className="flex flex-row md:hidden items-center justify-between py-3 border-b">
                    <Title level={5} className="m-0 pl-8">
                        Product
                    </Title>
                    <Title level={5} className="m-0">
                        Price
                    </Title>
                </div>

                {/* Data Item section */}
                <div className="flex flex-col gap-5">
                    {cartItems?.map((cart, index) => {
                        return (
                            <Cart
                                cart={cart}
                                key={index}
                                getUpdateCartList={getUpdateCartList}
                                orderItem={orderItem}
                                addOrderItem={addOrderItem}
                                removeOrderItem={removeOrderItem}
                                handleUpdateOrderItem={handleUpdateOrderItem}
                                // calculateOrder={calculateOrder}
                            />
                        );
                    })}
                    <div className="self-end">
                        <Link href={PRODUCTS_PATH}>
                            <Buttons.PrimaryButton
                                className={
                                    "md:py-3 py-3 md:px-9 px-6 rounded-full text-black border-[1.5px] border-black  md:text-base text-sm font-semibold"
                                }
                                label="CONTINUE SHOPPING"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartList;
