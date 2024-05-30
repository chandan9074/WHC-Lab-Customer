"use client";
import React, { useEffect, useState } from "react";
import { Spin, Typography } from "antd";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import Buttons from "@/components/Buttons";
import CartList from "./CartItems";
import { PRODUCTS_PATH } from "@/helpers/slug";
import OrderSummary from "@/components/OrderSummary";
import io from "socket.io-client";
import { WHC_LAB_SOCKET_CONNECTION } from "@/utils/constant";
import { toast } from "react-toastify";

const { Text, Title } = Typography;

function CartContainer() {
    const { cartItem, loading, getUpdateCartList, loadingCalculateData } =
        useCart();
    const [orderItem, setOrderItem] = useState([]);
    const [summaryCalculate, setSummaryCalculate] = useState();
    const socket = io(WHC_LAB_SOCKET_CONNECTION);
    const [orderCoupon, setOrderCoupon] = useState("");

    const calculateOrder = (couponCode) => {
        const ids = orderItem.map((item) => item._id);
        let data = {};
        // console.log({ couponCode });
        if (ids.length === 0) {
            setOrderCoupon("");
            data = {
                cartId: ids,
            };
        } else if (couponCode === "") {
            data = {
                cartId: ids,
            };
        } else {
            data = {
                cartId: ids,
                couponCode,
            };
        }
        // data = {
        //     cartId: ids,
        //     couponCode,
        // };
        socket.emit("order:calculate", JSON.stringify(data));

        // Listen for response from the server
        socket.on("order:calculated", (data) => {
            // console.log({ data });
            if (data.error && ids.length > 0) {
                toast.error(data.error);
            } else {
                setSummaryCalculate(data);
            }
        });

        return () => {
            socket.disconnect();
        };
    };

    const addOrderItem = (newCartItem, checked, quantity) => {
        if (checked) {
            setOrderItem((prevItems) => {
                const isCartExist = prevItems?.some(
                    (item) => item._id === newCartItem._id
                );
                if (!isCartExist) {
                    return [...prevItems, { ...newCartItem, quantity }];
                } else {
                    return prevItems.map((item) => {
                        if (item._id === newCartItem._id) {
                            return {
                                ...item,
                                quantity,
                            };
                        } else {
                            return item;
                        }
                    });
                }
            });
        } else {
            setOrderItem((prevItems) =>
                prevItems.filter((item) => item._id !== newCartItem._id)
            );
        }
    };

    // Remove order item if user remove product from cart list.
    const removeOrderItem = (cartItem) => {
        setOrderItem((prevItems) =>
            prevItems.filter((item) => item._id !== cartItem._id)
        );
    };

    // Update order item white change product quantity.
    const handleUpdateOrderItem = (cartItem, quantity) => {
        setOrderItem((prevOrder) => {
            return prevOrder.map((item) => {
                if (item?._id === cartItem?._id) {
                    return {
                        ...item,
                        quantity,
                        product: {
                            ...item.product,
                        },
                    };
                } else {
                    return item;
                }
            });
        });
    };

    useEffect(() => {
        calculateOrder(orderCoupon);
        // console.log(summaryCalculate);
    }, [orderItem]);

    return (
        <div>
            {loading ? (
                <Spin spinning={loading} fullscreen />
            ) : (
                <div className="">
                    <Title level={4} className="">
                        Your cart items&nbsp;
                        <span className="font-light text-[#243757]">
                            {`(${cartItem?.length} ${
                                cartItem?.length > 1 ? "items" : "item"
                            })`}
                        </span>
                    </Title>
                    <div className="grid grid-cols-3 gap-6">
                        {/* Cart List */}
                        <div className="col-span-3 md:col-span-3 lg:col-span-2">
                            {cartItem?.length > 0 ? (
                                <div className="mt- ">
                                    <CartList
                                        cartItems={cartItem}
                                        getUpdateCartList={getUpdateCartList}
                                        orderItem={orderItem}
                                        addOrderItem={addOrderItem}
                                        removeOrderItem={removeOrderItem}
                                        // calculateOrder={calculateOrder}
                                        handleUpdateOrderItem={
                                            handleUpdateOrderItem
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="bg-white h-[400px] flex flex-col items-center justify-center gap-6">
                                    <Text className="font-medium text-xl text-slate-500">
                                        No items added
                                    </Text>
                                    <Link href={PRODUCTS_PATH}>
                                        <Buttons.PrimaryButton
                                            className={
                                                " md:py-3 py-2 md:px-9 px-6 bg-magenta-600 rounded-sm text-white md:text-base text-sm font-semibold"
                                            }
                                            label="START SHOPPING"
                                        >
                                            START SHOPPING
                                        </Buttons.PrimaryButton>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="col-span-3 md:col-span-3 lg:col-span-1">
                            <div className="relative">
                                <OrderSummary
                                    cartSummary={cartItem}
                                    orderItem={orderItem}
                                    className={`${
                                        loadingCalculateData.isLoading
                                            ? "blur"
                                            : ""
                                    }`}
                                    summaryCalculate={summaryCalculate}
                                    calculateOrder={calculateOrder}
                                    setOrderCoupon={setOrderCoupon}
                                />
                                <Spin
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    spinning={loadingCalculateData.isLoading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartContainer;
