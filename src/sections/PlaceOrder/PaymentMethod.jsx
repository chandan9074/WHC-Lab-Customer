// PaymentMethodSelection.jsx
import React from "react";
import { Radio, Typography } from "antd";
import { handleInactiveFontColor } from "./ShippingMethod";

const { Title } = Typography;

const PaymentMethodSelection = ({ paymentMethod, onChange }) => {
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
                <Radio.Group className="" defaultValue={paymentMethod}>
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
                            value={"card"}
                            className="custom-radio"
                            onChange={onChange}
                            checked={paymentMethod === "card"}
                        >
                            <div className="text-wrap bg-white flex justify-between items-center">
                                <div className=" flex  gap-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            paymentMethod,
                                            "card"
                                        )}`}
                                    >
                                        Card
                                    </h2>
                                </div>
                            </div>
                        </Radio>
                        <Radio
                            // style={radioStyle}
                            value={"bankAccount"}
                            className="custom-radio"
                            onChange={onChange}
                            checked={paymentMethod === "bankAccount"}
                        >
                            <div className="text-wrap bg-white flex justify-between items-center">
                                <div className=" flex  gap-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            paymentMethod,
                                            "bankAccount"
                                        )}`}
                                    >
                                        Bank Account
                                    </h2>
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
