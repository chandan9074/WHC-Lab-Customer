"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Divider, Form, Input, Spin, Typography } from "antd";
import { useSearchParams } from "next/navigation";
import { getCookie, hasCookie } from "cookies-next";
import Buttons from "@/components/Buttons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { ORDER_CONFIRM_PATH } from "@/helpers/slug";
import "./PlaceOrder.css";
import UserShippingAddressForm from "./UserShippingAddressForm";
import ShippingMethod from "./ShippingMethod";
import PaymentMethodSelection from "./PaymentMethod";
import CardForm from "./CardForm";
import BankAccountForm from "./BankAccountForm";
const GuestAddressForm = dynamic(() => import("./GuestAddressForm"), {
    ssr: false,
});

const { Text, Title } = Typography;

function PlaceOrderContainer({ addressData }) {
    const [loading, setLoading] = useState(false);
    const [shippingMethod, setShippingMethod] = useState("standard");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [expiredDate, setExpiredDate] = useState("");
    const [address, setAddress] = useState(addressData[0]?._id);
    const [sameAddress, setSameAddress] = useState(true);
    const [billingAddress, setBillingAddress] = useState(addressData[0]?._id);
    const [form] = Form.useForm();

    const searchParams = useSearchParams();
    const userType = `${searchParams}`.split("=")[1];

    const onFinish = (values) => {
        console.log(values);

        handlePlaceOrder(values);
    };

    const handlePlaceOrder = async (values) => {
        console.log(values);
    };

    const onToggleChange = (checked) => {
        setSameAddress(checked);
    };

    const handleShippingMethodChange = (e) => {
        // Handle shipping method change logic here
        const newValue = e.target.value;
        // console.log("Selected Shipping Method:", e.target.value);
        setShippingMethod((ps) => {
            return newValue;
        });
    };

    const handlePaymentMethodChange = (e) => {
        // Handle payment method change logic here
        // console.log("Selected Payment Method:", e.target.value);
        setPaymentMethod(e.target.value);
    };

    const handleExpiryDate = (date) => {
        // console.log(date, "date value");
        // form.setFieldsValue({
        //     expiredDate: date,
        // });
        setExpiredDate(date);
    };

    const inputStyle = `active:text-black  focus:border-magenta-500 hover:#505f79`;

    return (
        <div>
            <Divider className="m-1" />
            <Spin spinning={loading} fullscreen />

            <Form
                name="form_item_path"
                layout="vertical"
                form={form}
                onFinish={onFinish}
                className="grid md:grid-cols-3 grid-cols-1  gap-0 md:gap-4"
            >
                <div className="col-span-2 ">
                    {/* Address Form */}
                    <div className="bg-[#EBEDF0] p-4 rounded-t-sm">
                        <Title
                            level={4}
                            className="m-0 text-sm md:text-lg text-neutral-700"
                        >
                            1. SHIPPING ADDRESS
                        </Title>
                    </div>

                    {userType === "guest" ? (
                        <>
                            <GuestAddressForm
                                inputStyle={inputStyle}
                                onToggleChange={onToggleChange}
                                billingAddress={false}
                            />
                            {!sameAddress && (
                                <GuestAddressForm
                                    inputStyle={inputStyle}
                                    billingAddress={true}
                                />
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col justify-center rounded-sm p-4 lg:py-12 lg:px-[58px] bg-white">
                            <UserShippingAddressForm
                                data={addressData}
                                setAddress={setAddress}
                            />

                            {!sameAddress && (
                                <UserShippingAddressForm
                                    data={addressData}
                                    setAddress={setBillingAddress}
                                />
                            )}
                        </div>
                    )}

                    {/* Shipping Form */}
                    <Form.Item name="shippingMethod">
                        <ShippingMethod
                            onChange={handleShippingMethodChange}
                            shippingMethod={shippingMethod || "standard"}
                        />
                    </Form.Item>

                    {/* Payment Method */}
                    <Form.Item name="paymentMethod">
                        <PaymentMethodSelection
                            onChange={handlePaymentMethodChange}
                            paymentMethod={paymentMethod}
                        />
                    </Form.Item>

                    <div className="w-full bg-white px-4 pt-4 mb-6 md:mb-0">
                        {paymentMethod === "card" ? (
                            <CardForm
                                form={form}
                                handleExpiryDate={handleExpiryDate}
                            />
                        ) : (
                            <BankAccountForm inputStyle={inputStyle} />
                        )}
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default PlaceOrderContainer;
