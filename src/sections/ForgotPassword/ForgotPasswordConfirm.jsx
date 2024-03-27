"use client";
import React from "react";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import LabelText from "@/components/common/LabelText";
import Images from "../../../public/assets/Images";
import Image from "next/image";

const onFinish = (values) => {
    console.log("Success:", values);
};

const { Title } = Typography;

const ForgotPasswordConfirm = () => {
    return (
        <div className="w-full flex justify-center pb-12 md:pb-[120px] pt-6">
            <div className="w-[328px] sm:w-[600px] flex flex-col justify-center gap-6 md:gap-12 rounded-lg border border-black border-opacity-10 md:p-12 p-6 bg-white">
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
                    <div className="flex flex-col gap-2">
                        <h1 className="text-brand-blue-500 text-xl md:text-[28px] font-semibold">
                            Change password
                        </h1>
                        <p className="text-neutral-400 text-sm md:text-base font-normal">
                            Enter your new password to reset the password.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Form.Item
                            label={<LabelText>New password</LabelText>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your new password!",
                                },
                                {
                                    min: 8,
                                    message:
                                        "Password must be at least 8 characters long.",
                                },
                            ]}
                            name="New password"
                            className="mb-0"
                        >
                            <Input.Password
                                className="py-3 rounded-sm"
                                placeholder="Min. 8 characters"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<LabelText> Confirm new password</LabelText>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please re-enter your password!",
                                },
                                {
                                    min: 8,
                                    message:
                                        "Password must be at least 8 characters long.",
                                },
                            ]}
                            name="Confirm new password"
                            className="mb-0"
                        >
                            <Input.Password
                                className="py-3 rounded-sm"
                                placeholder="Min. 8 characters"
                            />
                        </Form.Item>
                    </div>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-brand-blue-500 font-semibold rounded-full p-2 h-[52px]"
                    >
                        Reset Password
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPasswordConfirm;
