"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Divider, Form, Input, Spin, Typography } from "antd";
import { useSearchParams } from "next/navigation";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import Buttons from "@/components/Buttons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { ORDER_CONFIRM_PATH } from "@/helpers/slug";
import "./PlaceOrder.css";
import UserShippingAddressForm from "./UserShippingAddressForm";
import ShippingMethod from "./ShippingMethod";
import PaymentMethodSelection from "./PaymentMethod";
import OrderSummaryWithProduct from "../Profile/Orders/OrderSummary/OrderSummaryWithProduct";
import Summary from "../Profile/Orders/OrderSummary/Summary";
import MakeApiCall from "@/services/MakeApiCall";
import { ORDERS_URL } from "@/helpers/apiURLS";
import { useUserContext } from "@/contexts/UserContext";
const GuestAddressForm = dynamic(() => import("./GuestAddressForm"), {
    ssr: false,
});

const { Text, Title } = Typography;

function PlaceOrderContainer({ addressData }) {
    const [loading, setLoading] = useState(false);
    const [shippingMethod, setShippingMethod] = useState("standard");
    const [paymentMethod, setPaymentMethod] = useState("payNow");
    const [expiredDate, setExpiredDate] = useState("");
    const [address, setAddress] = useState(addressData[0]?._id);
    const [sameAddress, setSameAddress] = useState(true);
    const [billingAddress, setBillingAddress] = useState(addressData[0]?._id);
    const [form] = Form.useForm();
    const [orderItem, setOrderItem] = useState([]);
    const router = useRouter();
    const token = getCookie("accessToken");
    const { currency } = useUserContext();
    const _calculateOrderData = getCookie("calculatedOrderData");
    const calculatedOrderData =
        _calculateOrderData && JSON.parse(_calculateOrderData);

    const searchParams = useSearchParams();
    const userType = `${searchParams}`.split("=")[1];

    const onFinish = (values) => {
        // console.log("values", values);

        const stockOutProduct = orderItem.filter(
            (item) => orderItem.inStock === false
        );

        if (orderItem.length > 0 && stockOutProduct.length === 0) {
            const orderIds = orderItem.map((item) => item._id);
            const body = {
                paymentMethod: paymentMethod,
                cartId: orderIds,
            };
            handlePlaceOrder(body);
        } else {
            toast.error("Some products are stock out. Please remove those!!");
        }

        deleteCookie("calculatedOrderData");

        // console.log(orderIds, "order item");
    };

    // const handlePay = async (number) => {
    //     try {
    //         setLoading(true);
    //         const res = await CreditService.makePayment(number, token);

    //         if (res?.status === 200) {
    //             toast.success(res?.message);
    //             const paymentLink = res?.link;

    //             if (paymentLink) {
    //                 window.open(paymentLink, "_blank");
    //             } else {
    //                 toast.error("Payment link not found.");
    //             }
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handlePlaceOrder = async (body) => {
        try {
            const response = await MakeApiCall({
                apiUrl: ORDERS_URL,
                method: "POST",
                headers: { authorization: token },
                body: body,
            });

            if (response.status === 200) {
                toast.success(response?.message);
                const paymentLink = response?.doc.link;

                if (paymentLink) {
                    window.location.href = paymentLink;
                } else if (body.paymentMethod === "creditBalance") {
                    router.push(`${ORDER_CONFIRM_PATH}/${response.doc.number}`);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
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

    useEffect(() => {
        // console.log(hasCookie("orderData"));
        if (hasCookie("orderData")) {
            let item = JSON.parse(getCookie("orderData"));
            setOrderItem(item);
        } else {
            router.push("/my-cart");
        }
    }, [router]);

    const handlePaymentMethodChange = (value) => {
        // Handle payment method change logic here
        // console.log("Selected Payment Method:", e.target.value);
        setPaymentMethod(value);
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
            <Divider className="mb-9" />
            <Spin spinning={loading} fullscreen />

            <Form
                name="form_item_path"
                layout="vertical"
                form={form}
                onFinish={onFinish}
                className="grid md:grid-cols-3 grid-cols-1  gap-0 md:gap-4"
            >
                <div className="col-span-2 space-y-6">
                    {/* Address Form */}
                    <div className="rounded-lg border border-stroke-new">
                        <div className="bg-[#EBEDF0] p-4">
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
                            <div className="flex flex-col justify-center p-4 lg:py-12 lg:px-[58px] bg-white rounded-lg">
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
                    </div>

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
                            token={token}
                        />
                    </Form.Item>

                    {/* <div className="w-full bg-white px-4 pt-4 mb-6 md:mb-0">
                        {
                            paymentMethod === "card" && (
                                <CardForm
                                    form={form}
                                    handleExpiryDate={handleExpiryDate}
                                />
                            )
                            // :
                            // (
                            //     <BankAccountForm inputStyle={inputStyle} />
                            // )
                        }
                    </div> */}
                </div>
                {/* Order review section */}
                <div
                    className="bg-white p-4 flex flex-col gap-4"
                    style={{ height: "fit-content" }}
                >
                    <Text className="font w-full flex justify-center text-base font-medium text-neutral-700">
                        ORDER REVIEW
                    </Text>

                    <OrderSummaryWithProduct
                        orderItem={calculatedOrderData?.lineItems}
                        total={calculatedOrderData?.total}
                    />

                    <Summary
                        total={calculatedOrderData?.total}
                        subTotal={calculatedOrderData?.subtotal}
                        totalItems={calculatedOrderData?.lineItems?.length}
                        // shippingCharge={shippingCharge}
                        // discount={discountAmount}
                        // tax={
                        //     orderItem?.length !== 0
                        //         ? calculateOrderItemsTotalPrice(
                        //               orderItem,
                        //               0.05,
                        //               true
                        //           )
                        //         : 0
                        // }
                        showTotalItemCount={true}
                    />

                    <Form.Item
                        label=""
                        name="instructions"
                        rules={[
                            {
                                required: false,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.TextArea
                            placeholder="Write your order instructions here (If any)"
                            showCount
                            maxLength={300}
                            rows={5}
                            // minRows={5}
                            // style={{
                            //     resize: "none",
                            //     borderRadius: "2px",
                            //     backgroundColor: "#FAFBFB",
                            // }}
                            // className={`${inputStyle}`}
                        />
                    </Form.Item>

                    {/* <Link
                        href={ORDER_CONFIRM_PATH}
                        className="w-full flex justify-center md:py-3 py-2 md:px-9 px-6 bg-magenta-600 rounded-sm text-white md:text-base text-sm font-semibold"
                    >
                        PLACE ORDER
                    </Link> */}
                    <Buttons.PrimaryButton
                        label="PLACE ORDER"
                        type="submit"
                        className={
                            "w-full md:py-3 py-2 md:px-9 px-6 rounded-full text-white md:text-base text-sm font-semibold"
                        }
                        // onClick={handlePlaceOrder}
                    />
                    {/* <div className="flex overflow-auto px-4 py-2.5 bg-[#F5F6F7] border">
                        <div className="w-1.5 h-1 rounded-full bg-neutral-700 mt-2 mr-3" />
                        <Text>
                            Express delivery within 24 to 48 hours available for
                            Dhaka City. Select option on next screen.
                        </Text>
                    </div> */}
                </div>
            </Form>
        </div>
    );
}

export default PlaceOrderContainer;
