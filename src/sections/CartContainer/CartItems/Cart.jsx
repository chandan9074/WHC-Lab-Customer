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
import { debounce } from "@/helpers/utils";

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

    const handleQuantityChange = (operation) => {
        setQuantity((prevQuantity) => {
            // let newQuantity;
            if (operation === "increment") {
                newQuantity = prevQuantity + 1;
            } else if (operation === "decrement" && prevQuantity > 1) {
                newQuantity = prevQuantity - 1;
            } else {
                // If operation is decrement but quantity is already 1, do nothing
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
                                href={`/products/product-details/${product._id}`}
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
                                        {product?.sku}
                                    </Text>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* product price */}
                    <div className="col-span-2">
                        <Text className="whitespace-nowrap">
                            $
                            {product?.offerPrice
                                ? product?.offerPrice
                                : product?.price}
                        </Text>
                    </div>

                    {/* handle quantity */}
                    <div className="col-span-2">
                        <div className="flex flex-row justify-between items-center border-[1px] border-black-500 p- rounded-sm w-[7.5rem]">
                            <button
                                className="cursor-pointer p-2"
                                onClick={() => {
                                    // handleDecrement();
                                    handleQuantityChange("decrement");
                                    // handleUpdateCartItem();
                                }}
                                disabled={quantity <= 1}
                            >
                                <Image
                                    src={Icons.minus}
                                    alt="PALOOI-MINUS-ICON"
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
                                    alt="PALOOI-PLUS-ICON"
                                    width={18}
                                    height={5}
                                />
                            </button>
                        </div>
                    </div>

                    {/* total price */}
                    <div className="col-span-2">
                        <Text className="whitespace-nowrap col-span-2">
                            $&nbsp;
                            {product?.offerPrice
                                ? product?.offerPrice * quantity
                                : product?.price * quantity}
                        </Text>
                    </div>

                    {/* delete button */}
                    <div className="col-span-1">
                        <Button
                            icon={
                                <Image
                                    src={Icons.trash}
                                    alt="PALOOI-TRASH-ICON"
                                    height={30}
                                    width={30}
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
                            alt={product.name}
                            className="rounded-md"
                        />
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <Text className="line-clamp-4 text-sm text-neutral-700">
                                    {product.name}
                                </Text>
                                <Text className="text-neutral-300">
                                    <span className="text-neutral-700">
                                        Product code:
                                    </span>{" "}
                                    {product.productCode}
                                </Text>
                            </div>
                            <div className="flex flex-row justify-between items-center border-[1px] border-black-500 p-2 rounded-sm w-[7.5rem]">
                                <button
                                    className=" cursor-pointer"
                                    onClick={() =>
                                        handleQuantityChange("decrement")
                                    }
                                    // onClick={handleDecrement}
                                >
                                    <Image
                                        src={Icons.minus}
                                        alt="PALOOI-MINUS-ICON"
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
                                        alt="PALOOI-PLUS-ICON"
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
                            $&nbsp;
                            {product?.offerPrice
                                ? product?.offerPrice * quantity
                                : product?.price * quantity}
                        </Text>
                        <Button
                            icon={
                                <Image
                                    src={Icons.trash}
                                    alt="PALOOI-TRASH-ICON"
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
