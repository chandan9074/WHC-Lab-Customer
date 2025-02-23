"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography, Button, message, Spin, Checkbox } from "antd";
import Icons from "../../../../public/assets/Icons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import CartService from "@/services/CartService";
import { getCookie } from "cookies-next";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { toast } from "react-toastify";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
import { useUserContext } from "@/contexts/UserContext";

const { Text } = Typography;

function Cart({
    cart,
    orderItem,
    addOrderItem,
    removeOrderItem,
    handleUpdateOrderItem,
    getUpdateCartList,
    // calculateOrder,
}) {
    const token = getCookie("accessToken");
    const { product } = cart;

    const [quantity, setQuantity] = useState(cart?.quantity);
    const [loading, setLoading] = useState(false);
    const { setLoadingCalculateData } = useCart();
    let newQuantity;

    const { currency } = useUserContext();

    const handleQuantityChange = (operation) => {
        setQuantity((prevQuantity) => {
            // let newQuantity;
            if (
                operation === "increment" &&
                prevQuantity < product.variants[0].quantity
            ) {
                newQuantity = prevQuantity + 1;
            } else if (operation === "decrement" && prevQuantity > 1) {
                newQuantity = prevQuantity - 1;
            } else {
                // If operation is decrement but quantity is already 1, do nothing
                if (operation === "increment") {
                    toast.error("Stock limit exceeded!");
                } else if (operation === "decrement") {
                    toast.error("Quantity can not be less than 1!");
                }
                return prevQuantity;
            }

            handleUpdateCartItem(newQuantity);
            return newQuantity;
        });
    };

    const handleUpdateCartItem = async (updatedCartQuantity) => {
        setLoadingCalculateData((ps) => ({ isLoading: true, id: cart?._id }));
        // calculateOrder();
        try {
            const res = await CartService.updateCartItems(
                { productId: product?._id, quantity: updatedCartQuantity },
                token
            );

            if (res?.status === 200) {
                message.success(res?.message);
                getUpdateCartList();
                handleUpdateOrderItem(cart, updatedCartQuantity);
            }
        } catch (e) {
            // console.log(e);
            message.error(e?.message);
        } finally {
            setLoadingCalculateData((ps) => ({ ...ps, isLoading: false }));
        }
    };

    const handleRemoveCart = async () => {
        setLoading(true);
        try {
            const response = await CartService.removeCart(product?._id, token);

            if (response?.status === 200) {
                getUpdateCartList(token);
                removeOrderItem(cart);
                toast.success(response?.message);
            }
        } catch (e) {
            message.error(e?.message);
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        let checked = e.target.checked;
        if (newQuantity) {
            addOrderItem(cart, checked, newQuantity);
        } else {
            addOrderItem(cart, checked, quantity);
        }
    };

    useEffect(() => {
        setQuantity(cart?.quantity);
    }, [cart]);

    return (
        <div className="border-b">
            <Spin spinning={loading} fullscreen />
            {/* For large screen */}
            <div className="hidden md:block">
                <div className="grid grid-cols-12 justify-items-center items-center gap-4 py-4">
                    <div className="col-span-5 justify-self-start">
                        {/* Product details */}
                        <div className="flex flex-row justify-start items-center gap-4 w-full">
                            <Checkbox
                                onChange={onChange}
                                defaultChecked={orderItem?.some(
                                    (item) => item?._id === cart?._id
                                )}
                            ></Checkbox>
                            <Link
                                href={`${PRODUCT_DETAILS_PATH}/${product?._id}`}
                                className="flex flex-row justify-start items-center gap-4 w-full"
                            >
                                <Image
                                    src={`${GET_IMAGE_RENDER}?key=${product?.featuredImage}`}
                                    height={1000}
                                    width={1000}
                                    alt={product?.name}
                                    className="rounded-sm w-[70px] h-[70px]"
                                />
                                <div className="flex flex-col h-auto">
                                    <Text className="text-sm text-neutral-700">
                                        {product?.name}
                                    </Text>
                                    <Text className="text-sm text-neutral-700">
                                        <span className="text-neutral-300 text-sm whitespace-nowrap">
                                            Product Code:
                                        </span>
                                        {product?.variants[0].sku}
                                    </Text>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* product price */}
                    <div className="col-span-2">
                        <Text className="whitespace-nowrap">
                            {currency.icon}
                            {product[currency.field] && product[currency.field]}
                        </Text>
                    </div>

                    {/* handle quantity */}
                    <div className="col-span-2">
                        {product.variants[0].status === "active" ? (
                            <div className="flex flex-row justify-between items-center border-[1px] border-black-500 p- rounded-full w-[7.5rem]">
                                <button
                                    className="cursor-pointer p-2"
                                    onClick={() => {
                                        // handleDecrement();
                                        handleQuantityChange("decrement");
                                        // handleUpdateCartItem();
                                    }}
                                    // disabled={quantity <= 1}
                                >
                                    <Image
                                        src={Icons.minus}
                                        alt="WHC-MINUS-ICON"
                                        width={20}
                                        height={5}
                                    />
                                </button>
                                <Text className="text-[14px]">{quantity}</Text>
                                <button
                                    className="cursor-pointer p-2"
                                    onClick={() => {
                                        // handleIncrement();
                                        handleQuantityChange("increment");
                                        // handleUpdateCartItem();
                                    }}
                                >
                                    <Image
                                        src={Icons.plus}
                                        alt="WHC-PLUS-ICON"
                                        width={18}
                                        height={5}
                                    />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-[#EF4444] py-1 px-2.5 rounded-3xl bg-[#FEF2F2]">
                                    Out of Stock
                                </p>
                            </div>
                        )}
                    </div>

                    {/* total price */}
                    <div className="col-span-2">
                        <Text className="whitespace-nowrap col-span-2">
                            {currency.icon}
                            {product[currency.field] &&
                                (product[currency.field] * quantity).toFixed(2)}
                        </Text>
                    </div>

                    {/* delete button */}
                    <div className="col-span-1">
                        <Button
                            icon={
                                <Image
                                    src={Icons.trash}
                                    alt="WHC-TRASH-ICON"
                                    height={20}
                                    width={20}
                                />
                            }
                            className="border-none"
                            onClick={handleRemoveCart}
                        />
                    </div>
                </div>
            </div>

            {/* For small screen */}
            <div className="flex flex-col md:hidden">
                <div className="flex flex-row justify-between py-4">
                    {/* image, name , code , button */}
                    <div className="flex gap-3">
                        <Checkbox
                            onChange={onChange}
                            defaultChecked={orderItem?.some(
                                (item) => item?._id === cart?._id
                            )}
                        ></Checkbox>
                        <Image
                            src={`${GET_IMAGE_RENDER}?key=${product?.featuredImage}`}
                            height={100}
                            width={100}
                            alt={product?.name}
                            className="rounded-md"
                        />
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <Text className="line-clamp-4 text-sm text-neutral-700">
                                    {product?.name}
                                </Text>
                                <Text className="text-neutral-300">
                                    <span className="text-neutral-700">
                                        Product code:
                                    </span>{" "}
                                    {product?.variants[0].sku}
                                </Text>
                            </div>
                            <div className="flex flex-row justify-between items-center border-[1px] border-black-500 p-2 rounded-full w-[7.5rem]">
                                <button
                                    className=" cursor-pointer"
                                    onClick={() =>
                                        handleQuantityChange("decrement")
                                    }
                                    // onClick={handleDecrement}
                                >
                                    <Image
                                        src={Icons.minus}
                                        alt="WHC-MINUS-ICON"
                                        width={20}
                                        height={5}
                                    />
                                </button>
                                <Text className="text-[14px]">{quantity}</Text>
                                <button
                                    className="cursor-pointer"
                                    // onClick={handleIncrement}
                                    onClick={() =>
                                        handleQuantityChange("increment")
                                    }
                                >
                                    <Image
                                        src={Icons.plus}
                                        alt="WHC-PLUS-ICON"
                                        width={18}
                                        height={5}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* price , delete button */}
                    <div className="flex flex-col justify-between items-center">
                        <Text className="whitespace-nowrap">
                            &nbsp;
                            {currency.icon}
                            {product[currency.field] &&
                                (product[currency.field] * quantity).toFixed(2)}
                        </Text>
                        <Button
                            icon={
                                <Image
                                    src={Icons.trash}
                                    alt="WHC-TRASH-ICON"
                                    height={30}
                                    width={30}
                                />
                            }
                            className="border-none m-2"
                            onClick={handleRemoveCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
