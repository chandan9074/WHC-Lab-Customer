"use client";
import React, { useState } from "react";
import { Button, Form, Input, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "cookies-next";
import LabelText from "@/components/common/LabelText";
import Images from "../../../public/assets/Images";
import { MY_ACCOUNT_PATH } from "@/helpers/slug";
import { MethodsStructure } from "../../services/MethodsStructure";
import MakeApiCall from "@/services/MakeApiCall";
import { CHANGE_PASSWORD } from "@/helpers/apiURLS";

const ChangePassword = ({ title, description }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onFinish = async (values) => {
        setLoading(true);
        setCookie("temp_email", `${values.email}`,{
            maxAge: 60 * 60 * 12,
        });
        const token = getCookie("accessToken");

        try {
            const res = await MakeApiCall({
                apiUrl: CHANGE_PASSWORD,
                body: values,
                ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
            });

            // console.log(res);

            if (res?.status === 200) {
                toast.success(res.message);
                // console.log(res);
                router.push(MY_ACCOUNT_PATH);
            }
        } catch (error) {
            toast.error(error?.message);
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center pb-[120px] pt-6">
            <Spin fullscreen spinning={loading} />
            <div className="w-[328px] sm:w-[600px] flex flex-col justify-center gap-6 md:gap-12 rounded-lg border border-black border-opacity-10 md:p-12 p-6 bg-white">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="w-full flex justify-center text-xl md:text-[28px] font-semibold leading-7 md:leading-9 mb-0 py-5 text-brand-blue-500 border-b border-black border-opacity-[10%]">
                        {title}
                    </h1>
                </div>
                <Image
                    alt="sign-in-bg"
                    width={1000}
                    height={1000}
                    className="w-[250px] sm:w-[504px] h-[144px] sm:h-[291px]"
                    src={Images.forgot_password}
                />
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className="flex flex-col gap-9"
                >
                    <div className="self-start flex flex-col gap-1">
                        <h3 className="m-0 text-xl font-semibold text-brand-blue-800">
                            {description}
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Form.Item
                            label={<LabelText>Old password</LabelText>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your old password!",
                                },
                                {
                                    min: 8,
                                    message:
                                        "Password must be at least 8 characters long.",
                                },
                            ]}
                            name="oldPassword"
                            className="mb-0"
                        >
                            <Input.Password
                                className="py-3 rounded-sm"
                                placeholder="Min. 8 characters"
                            />
                        </Form.Item>

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
                            name="newPassword"
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
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (
                                            !value ||
                                            getFieldValue("newPassword") ===
                                                value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "The new password that you entered do not match!"
                                            )
                                        );
                                    },
                                }),
                            ]}
                            name="reTypePassword"
                            className="mb-0"
                        >
                            <Input.Password
                                className="py-3 rounded-sm"
                                placeholder="Min. 8 characters"
                            />
                        </Form.Item>
                    </div>

                    <div className="w-full">
                        <Form.Item className="m-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-brand-blue-500 text-base font-semibold leading-6 rounded-full p-2 h-[52px]"
                            >
                                Change Password Confirm
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default ChangePassword;
