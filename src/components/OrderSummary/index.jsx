import React, { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Summary from "./Summary";
import { Typography, Input } from "antd";
import Buttons from "../Buttons";

const { Text, Title } = Typography;

function OrderSummary({
    cartSummary,
    orderItem,
    className,
    summaryCalculate,
    calculateOrder,
}) {
    const [guestLoginFormModal, setGuestLoginFormModal] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const { tax, subtotal, total, discountAmount, shippingCharge } =
        cartSummary;
    const router = useRouter();

    const checkIfLoggedIn = () => {
        if (orderItem.length > 0) {
            const accessToken = getCookie("accessToken");
            // localStorage.setItem("orderDate", JSON.stringify(orderItem));
            setCookie("orderData", JSON.stringify(orderItem));

            if (accessToken) {
                router.push("place-order/?userType=login");
            } else {
                setGuestLoginFormModal(true);
            }
        } else {
            toast.error("Please check items you want to checkout with!");
        }
    };

    const handleChangeCouponCode = (e) => {
        setCouponCode(e.target.value);
    };

    const handleAddCouponCode = () => {
        calculateOrder(couponCode);
    };

    return (
        <div className={`bg-white p-4 flex flex-col gap-4 ${className}`}>
            <Title level={5} className="text-center">
                ORDER SUMMERY
            </Title>
            <Summary
                total={summaryCalculate?.total || 0}
                subTotal={summaryCalculate?.subtotal || 0}
                totalItems={summaryCalculate?.lineItems?.length || 0}
                shippingCharge={shippingCharge}
                discount={discountAmount}
                tax={summaryCalculate?.vatAmount || 0}
                showTotalItemCount={true}
            />
            {/* coupon code  */}
            <div className="flex flex-col gap-2 border-2 p-6">
                <Text>
                    Coupon code <span>(Optional)</span>
                </Text>
                <div className="flex flex-row gap-2 ">
                    <Input
                        placeholder="Basic usage"
                        onChange={(e) => handleChangeCouponCode(e)}
                        value={couponCode}
                    />
                    <Buttons.PrimaryButton
                        onClick={handleAddCouponCode}
                        label={"Apply"}
                        className={
                            "md:py-3 py-2 md:px-9 px-6 bg-magenta-600 rounded-sm text-white md:text-base text-sm font-semibold"
                        }
                    />
                </div>
            </div>
            {/* checkout button */}
            {/* <Link href="place-order"> */}
            <Buttons.PrimaryButton
                label="CHECKOUT"
                className={
                    "w-full h-[52px] mt-9 mb-6 md:px-9 px-6 bg-magenta-600 rounded-sm text-white md:text-base text-sm font-semibold disabled:bg-magenta-300"
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
