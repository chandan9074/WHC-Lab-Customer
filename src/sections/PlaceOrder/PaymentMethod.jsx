// PaymentMethodSelection.jsx
import React, { useEffect, useState } from "react";
import { Radio, Spin, Typography } from "antd";
import { handleInactiveFontColor } from "./ShippingMethod";
import { getCookie, setCookie } from "cookies-next";
// import MakeApiCall from "@/services/MakeApiCall";
// import { APPLY_FOR_CREDIT_BALANCE } from "@/helpers/apiURLS";
import { toast } from "react-toastify";
import CreditService from "@/services/CreditBalanceService";
import UserService from "@/services/UserService/UserService";
import { useUserContext } from "@/contexts/UserContext";
import { currencyData } from "@/libs/common";

const { Title } = Typography;

const PaymentMethodSelection = ({ paymentMethod, onChange, token }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const { currency } = useUserContext();
    const _currency = getCookie("selected_currency");

    // get user profile to get credit balance info.
    const getUserProfile = async () => {
        setLoading(true);
        try {
            const res = await UserService.fetchUserInfo(token);

            if (res?.status === 200) {
                setUserInfo(res?.user);
            }
        } catch (e) {
            toast.error(e?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserProfile();
        // const _userInfo = JSON.parse(getCookie("userInfo"));
        // setUserInfo(_userInfo);
    }, []);

    const handleApplyForCredit = async () => {
        try {
            // const response = await CreditService.applyForCredit(token);
            setLoading(true);
            const response = await CreditService.applyForCreditBalance(token);

            if (response.status === 200) {
                toast.success(response.message);
                let tempUser = userInfo;
                getUserProfile(); // saw a bug that status was not changing after api call
                tempUser.appliedForCreditBalance = true;
                setUserInfo(tempUser);
                setCookie("userInfo", JSON.stringify(tempUser), {
                    maxAge: 60 * 60 * 12,
                });
                setLoading(false);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="border border-stroke-new rounded-lg">
            <Spin spinning={loading} fullscreen />
            <div className="bg-[#EBEDF0] p-4 rounded-t-lg">
                <Title
                    level={4}
                    className="m-0 text-sm md:text-lg text-neutral-700"
                >
                    3. PAYMENT METHOD
                </Title>
            </div>
            <div className="bg-white p-4 rounded-lg">
                <Radio.Group className="w-full" defaultValue={paymentMethod}>
                    <div className="flex flex-col gap-4">
                        {/* <Radio
                            // style={radioStyle}
                            value={"paypal"}
                            className="custom-radio"
                            onChange={onChange}
                            checked={paymentMethod === "paypal"}
                        >
                            <div className="text-wrap bg-white flex justify-between items-center">
                                <div className="flex  gap-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            paymentMethod,
                                            "paypal"
                                        )}`}
                                    >
                                        Paypal
                                    </h2>
                                </div>
                            </div>
                        </Radio> */}
                        <Radio
                            // style={radioStyle}
                            value={"payNow"}
                            className="custom-radio"
                            onChange={() => onChange("payNow")}
                            checked={paymentMethod === "payNow"}
                        >
                            <div className="text-wrap bg-white flex justify-between items-center">
                                <div className=" flex  gap-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            paymentMethod,
                                            "payNow"
                                        )}`}
                                    >
                                        Pay Now
                                    </h2>
                                </div>
                            </div>
                        </Radio>
                        <Radio
                            // style={radioStyle}
                            value={"creditBalance"}
                            className="custom-radio"
                            onChange={() => onChange("creditBalance")}
                            checked={paymentMethod === "creditBalance"}
                        >
                            <div className="w-full text-wrap bg-white flex justify-between items-center">
                                <div className="w-full flex justify-between items-center gap-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            paymentMethod,
                                            "creditBalance"
                                        )}`}
                                    >
                                        Credit Balance
                                    </h2>
                                    {/* {paymentMethod === "creditBalance" && ( */}
                                    <div className="animate-fadeIn">
                                        {userInfo?.creditBalance &&
                                        userInfo?.creditBalanceLimit ? (
                                            <div className="flex gap-x-2 sm:gap-x-6">
                                                <p className="text-nowrap text-brand-blue-500 text-xs sm:text-sm leading-[18.23px]">
                                                    Credit Limit:
                                                    {
                                                        currencyData[_currency]
                                                            ?.icon
                                                    }
                                                    {
                                                        userInfo?.creditBalanceLimit
                                                    }
                                                </p>
                                                <p className="text-nowrap text-brand-blue-500 text-xs sm:text-sm leading-[18.23px]">
                                                    Credit Balance:
                                                    {
                                                        currencyData[_currency]
                                                            ?.icon
                                                    }
                                                    {userInfo?.creditBalance}
                                                </p>
                                            </div>
                                        ) : userInfo?.appliedForCreditBalance ? (
                                            <p className="text-brand-blue-500 text-sm font-semibold leading-[18.23px]">
                                                Applied
                                            </p>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={handleApplyForCredit}
                                                className="text-brand-blue-500 text-sm font-semibold leading-[18.23px]"
                                            >
                                                Apply For Credit Balance
                                            </button>
                                        )}
                                    </div>
                                    {/* )} */}
                                </div>
                            </div>
                        </Radio>
                    </div>
                </Radio.Group>
            </div>
        </div>
    );
};

export default PaymentMethodSelection;
