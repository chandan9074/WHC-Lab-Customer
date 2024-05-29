import React, { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Summary from "./Summary";
import { Typography, Input, Spin } from "antd";
import Buttons from "../Buttons";

const { Text } = Typography;

function OrderSummary({
    cartSummary,
    orderItem,
    className,
    summaryCalculate,
    calculateOrder,
    setOrderCoupon,
}) {
    // const [guestLoginFormModal, setGuestLoginFormModal] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { discountAmount, shippingCharge } = cartSummary;
    const router = useRouter();

    const checkIfLoggedIn = () => {
        if (orderItem.length > 0) {
            setIsLoading(true);
            // const accessToken = getCookie("accessToken");
            // localStorage.setItem("orderDate", JSON.stringify(orderItem));
            setCookie("orderData", JSON.stringify(orderItem));
            setCookie("calculatedOrderData", JSON.stringify(summaryCalculate));

            setIsLoading(false);
            router.push("place-order/?userType=login");
            // if (accessToken) {
            // } else {
            //     setGuestLoginFormModal(true);
            // }
        } else {
            toast.error("Please check items you want to checkout with!");
        }
    };

    const handleChangeCouponCode = (e) => {
        setCouponCode(e.target.value);
    };

    const handleAddCouponCode = () => {
        calculateOrder(couponCode);
        setOrderCoupon(couponCode);
        setCouponCode("");
    };

    return (
        <div
            className={`bg-neutral-10 pb-9 px-4 flex flex-col gap-4 border border-neutral-30 rounded-lg ${className}`}
        >
            <Spin spinning={isLoading} fullscreen />
            <h5 className="text-center text-base font-semibold leading-6 text-brand-blue-800 px-4 pt-4">
                ORDER SUMMERY
            </h5>
            <Summary
                total={summaryCalculate?.total || 0}
                subTotal={summaryCalculate?.subtotal || 0}
                totalItems={summaryCalculate?.lineItems?.length || 0}
                shippingCharge={shippingCharge}
                couponCode={summaryCalculate?.couponCode}
                discount={summaryCalculate?.couponAmount}
                tax={summaryCalculate?.vatAmount || 0}
                showTotalItemCount={true}
            />
            {/* coupon code  */}
            <div className="flex flex-col gap-2 border-2 p-6 rounded-lg">
                <Text>
                    Coupon code{" "}
                    <span className="text-neutral-300">(Optional)</span>
                </Text>
                <div className="flex flex-row gap-2 ">
                    <Input
                        placeholder="e.g. WHClab40"
                        onChange={(e) => handleChangeCouponCode(e)}
                        value={couponCode}
                        className="coupon-input"
                    />
                    <Buttons.PrimaryButton
                        onClick={handleAddCouponCode}
                        label={"Apply"}
                        disabled={couponCode === "" ? true : false}
                        className={`bg-magenta-600 ${
                            couponCode === "" ? "cursor-not-allowed" : ""
                        } rounded-full text-white md:text-base text-sm font-semibold`}
                        width="w-[100px]"
                    />
                </div>
            </div>
            {/* checkout button */}
            {/* <Link href="place-order"> */}
            <Buttons.PrimaryButton
                label="CHECKOUT"
                className={
                    "w-full h-[52px] mt-9 mb-6 md:px-9 px-6 bg-magenta-600 rounded-full text-white md:text-base text-sm font-semibold disabled:bg-magenta-300"
                }
                onClick={checkIfLoggedIn}
                // disabled={orderItem.length === 0}
            />
            {/* </Link> */}

            {/* delivery info */}
            {/* <div className="flex overflow-auto px-4 py-2.5 bg-[#F5F6F7]">
        <div className="w-1.5 h-1 rounded-full bg-neutral-700 mt-2 mr-3" />
        <Text>
            Express delivery within 24 to 48 hours available for Dhaka
            City. Select option on next screen.
        </Text>
    </div> */}

            {/* There need to add another checker, is User already logged in or not. */}
            {/* {guestLoginFormModal && (
        <GuestSignInModal
            isModalOpen={guestLoginFormModal}
            handleCancel={() => setGuestLoginFormModal(false)}
        />
    )} */}
        </div>
    );
}

export default OrderSummary;
