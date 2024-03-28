"use client";
import React, { useState } from "react";
import { Button, Form, Input, Spin, Typography } from "antd";
import { useRouter } from "next/navigation";
import LabelText from "@/components/common/LabelText";
import Images from "../../../public/assets/Images";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ChangeEmailForm = () => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const onFinish = (values) => {
        router.push("/change-email-verification");
    };

    return (
        <div className="w-full flex flex-col items-center justify-center md:pb-[120px] pb-12 pt-6 px-4 md:px-0">
            <div className="w-[328px] sm:w-[600px] flex flex-col justify-center gap-6 md:gap-9 rounded-lg border border-black border-opacity-10 md:p-12 p-6 bg-white">
                <div className="flex w-full justify-center items-center">
                    <Image
                        src={Images.logo}
                        alt="Logo"
                        width={1000}
                        height={1000}
                        className="sm:w-[80px] w-[73px] sm:h-7 h-6 md:w-[148.55px] md:h-[49px]"
                    />
                </div>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="flex flex-col gap-4 md:gap-9"
                >
                    <div className="self-start flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xl md:text-[28px] font-semibold leading-[42px] text-brand-blue-500 mb-0">
                                Change email address
                            </h1>
                            <h4 className="m-0 text-base font-normal text-neutral-400">
                                Enter your new email address to update
                            </h4>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Form.Item
                            className="m-0"
                            label={<LabelText>Enter your password</LabelText>}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Password is required!",
                                },
                            ]}
                        >
                            <Input.Password
                                className="py-3 rounded-sm"
                                placeholder="Enter your password"
                            />
                        </Form.Item>

                        <Form.Item
                            className="m-0"
                            label={<LabelText>Enter New email</LabelText>}
                            name="New email"
                            rules={[
                                {
                                    required: true,
                                    message: "New email is required!",
                                },
                            ]}
                        >
                            <Input
                                className="py-3 rounded-sm"
                                placeholder="abc@xyz.ccc"
                            />
                        </Form.Item>

                        <Form.Item
                            className="m-0"
                            label={<LabelText>Confirm new email</LabelText>}
                            name="Confirm new email"
                            rules={[
                                {
                                    required: true,
                                    message: "Confirm new email is required!",
                                },
                            ]}
                        >
                            <Input
                                className="py-3 rounded-sm"
                                placeholder="abc@xyz.ccc"
                            />
                        </Form.Item>
                    </div>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full duration-200 bg-brand-blue-500 text-base font-semibold leading-6 rounded-full p-2 h-[52px] flex items-center justify-center gap-3"
                    >
                        {loading && (
                            <Spin
                                indicator={
                                    <LoadingOutlined
                                        style={{
                                            fontSize: 24,
                                            color: "white",
                                        }}
                                        spin
                                    />
                                }
                            />
                        )}
                        Send Verification Code
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ChangeEmailForm;
