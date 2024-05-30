import { Radio, Typography } from "antd";
import React from "react";
import "./ShippingMethod.css";
import { useUserContext } from "@/contexts/UserContext";

const { Title } = Typography;

export const handleInactiveFontColor = (props, value) =>
    `${props !== value ? "text-neutral-300" : "text-neutral-700"}`;

const ShippingMethod = ({ shippingMethod, onChange }) => {
    const { currency } = useUserContext();
    return (
        <div className="border border-stroke-new rounded-lg">
            <div className="bg-[#EBEDF0] p-4 rounded-t-lg">
                <Title
                    level={4}
                    className="m-0 text-sm md:text-lg text-neutral-700"
                >
                    2. SHIPPING METHOD
                </Title>
            </div>
            <div className="bg-white p-4 rounded-lg">
                {/* <Space direction="vertical" gap={10}> */}
                <Radio.Group
                    onChange={onChange}
                    className="w-full"
                    defaultValue={shippingMethod}
                >
                    <div className="flex justify-between items-center w-full">
                        <Radio
                            // style={radioStyle}
                            checked={shippingMethod === "standard"}
                            defaultChecked={shippingMethod === "standard"}
                            value={"standard"}
                            className="custom-radio flex w-full py-[13.5px]"
                            onChange={onChange}
                            // disabled
                        >
                            <div className="w-full bg-white flex mt-1">
                                <div className=" flex flex-col lg:flex-row gap-x-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            shippingMethod,
                                            "standard"
                                        )}`}
                                    >
                                        Standard delivery
                                    </h2>
                                    <p className="text-neutral-300 text-sm font-medium text-wrap">
                                        ( Standard delivery normally takes 48 to
                                        72 hours )
                                    </p>
                                </div>
                                <h2
                                    className={`ml-auto font-semibold ${handleInactiveFontColor(
                                        shippingMethod,
                                        "standard"
                                    )}
                                    `}
                                >
                                    {currency?.icon} 0.00
                                </h2>
                            </div>
                        </Radio>
                    </div>

                    <div className="flex justify-between items-center">
                        <Radio
                            // style={radioStyle}
                            checked={shippingMethod === "express"}
                            value={"express"}
                            className="custom-radio flex w-full py-[13.5px]"
                            onChange={onChange}
                            // disabled
                        >
                            <div className="w-full bg-white flex mt-1">
                                <div className=" flex flex-col lg:flex-row gap-x-3">
                                    <h2
                                        className={`font-semibold ${handleInactiveFontColor(
                                            shippingMethod,
                                            "express"
                                        )}`}
                                    >
                                        Express delivery
                                    </h2>
                                    <p className="text-neutral-300 text-sm font-medium text-wrap">
                                        ( Standard delivery normally takes 24
                                        hours )
                                    </p>
                                </div>
                                <h2
                                    className={`ml-auto font-semibold ${handleInactiveFontColor(
                                        shippingMethod,
                                        "express"
                                    )}`}
                                >
                                    {currency?.icon} 0.00
                                </h2>
                            </div>
                        </Radio>
                    </div>
                </Radio.Group>
            </div>
        </div>
    );
};

export default ShippingMethod;
