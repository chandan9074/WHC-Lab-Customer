// PaymentMethodSelection.jsx
import React, { useEffect, useState } from "react";
import { Radio, Typography } from "antd";
import { handleInactiveFontColor } from "./ShippingMethod";
import { getCookie, setCookie } from "cookies-next";
import MakeApiCall from "@/services/MakeApiCall";
import { APPLY_FOR_CREDIT_BALANCE } from "@/helpers/apiURLS";
import { toast } from "react-toastify";

const { Title } = Typography;

const PaymentMethodSelection = ({ paymentMethod, onChange, token }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const _userInfo = JSON.parse(getCookie("userInfo"));
        setUserInfo(_userInfo);
    }, []);

    const handleApplyForCredit = async () => {
        try {
            const response = await MakeApiCall({
                apiUrl: APPLY_FOR_CREDIT_BALANCE,
                method: "POST",
                headers: { authorization: token },
            });

            if (response.status === 200) {
                toast.success(response.message);
                let tempUser = userInfo;
                tempUser.appliedForCreditBalance = true;
                setUserInfo(tempUser);
                setCookie("userInfo", JSON.stringify(tempUser));
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="">
            <div className="bg-[#EBEDF0] p-4 rounded-t-sm">
                <Title
                    level={4}
                    className="m-0 text-sm md:text-lg text-neutral-700"
                >
                    3. PAYMENT METHOD
                </Title>
            </div>
            <div className="bg-white p-4">
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
                            <div className="text-wrap bg-white flex justify-between items-center">
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
                                            <div className="flex gap-x-6">
                                                <p className="text-brand-blue-500 text-sm leading-[18.23px]">
                                                    Credit Limit: €
                                                    {userInfo?.creditBalance}
                                                </p>
                                                <p className="text-brand-blue-500 text-sm leading-[18.23px]">
                                                    Credit Balance: €
                                                    {
                                                        userInfo?.creditBalanceLimit
                                                    }
                                                </p>
                                            </div>
                                        ) : userInfo?.appliedForCreditBalance ? (
                                            <p className="text-brand-blue-500 text-sm font-semibold leading-[18.23px]">
                                                Applied
                                            </p>
                                        ) : (
                                            <button
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
