"use client";
import React from "react";
import { Button, Form, Input, Select, Typography } from "antd";
// import AuthService from "@/services/AuthService/AuthService";
// import { RecaptchaVerifier } from "firebase/auth";
// import { socialAuth } from "@/config/firebase";
import { useRouter } from "next/navigation";
// import { CHANGE_PHONE_VERIFICATION_PATH } from "@/helpers/slug";
// import { getCookie } from "cookies-next";
// import { toast } from "react-toastify";
// import LabelText from "@/components/common/LabelText";
import PhoneNumberInputField from "@/components/common/PhoneNumberInputField";
import Image from "next/image";
import Images from "../../../public/assets/Images";

const { Title } = Typography;
const ChangePhoneForm = () => {
    const router = useRouter();
    const { Option } = Select;

    const onFinish = async (values) => {
        // try {
        //     const token = getCookie("accessToken");
        //     let prefixValue = values.prefix || "+880";
        //     values.primaryPhone = prefixValue + values.primaryPhone;
        //     await AuthService.checkNumberWithPassword(
        //         values.password,
        //         values.primaryPhone,
        //         token
        //     );
        //     generateRecaptcha();
        //     const userInfo = JSON.parse(getCookie("userInfo"));
        //     const firebaseRes = await AuthService.getFirebaseOtp(userInfo);
        //     if (firebaseRes === 200) {
        //         toast.success("sent otp to phone number");
        //         router.push(CHANGE_PHONE_VERIFICATION_PATH);
        //     } else {
        //         toast.error(firebaseRes);
        //     }
        // } catch (error) {
        //     toast.error(error.error.message);
        // }
    };

    // const generateRecaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //         socialAuth,
    //         "change-mobile-number-captcha",
    //         {
    //             size: "invisible",
    //             callback: (response) => {
    //                 // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             },
    //         }
    //     );
    // };

    return (
        <div className="w-full flex justify-center items-center pt-6 pb-12 md:pb-[120px]">
            <div className="w-[328px] sm:w-[600px] flex flex-col  gap-6 md:gap-12 rounded-lg border border-black border-opacity-10 md:p-12 p-6 bg-white">
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
                    className="flex flex-col items-center justify-center gap-6 md:gap-9"
                >
                    <div className="flex flex-col gap-2 w-full">
                        <h1 className="text-xl md:text-[28px] font-semibold text-brand-blue-500 mb-0">
                            Change phone number
                        </h1>
                        <h5 className="m-0 text-sm md:text-base font-normal text-neutral-400">
                            Enter your new phone number to update
                        </h5>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <Form.Item
                            className="m-0"
                            label={
                                <h5 className="text-sm font-semibold text-neutral-300">
                                    Password
                                </h5>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                            name="password"
                        >
                            <Input.Password
                                autoComplete="off"
                                placeholder="Min. 8 characters"
                                className="w-full py-3 rounded-sm"
                            />
                        </Form.Item>

                        <PhoneNumberInputField labelText="Confirm new phone number" />
                        {/* <Form.Item
                        className="m-0"
                        label={
                            <h5 className="text-sm font-semibold text-neutral-300">
                                Confirm new phone number
                            </h5>
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please write your new phone number!",
                            },
                        ]}
                        name="primaryPhone"
                    >
                        <Input
                            type="text"
                            addonBefore={phoneNumberPrefix}
                            className="rounded-sm"
                            placeholder="1234567890"
                        />
                    </Form.Item> */}
                    </div>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full h-[52px] bg-brand-blue-500 rounded-full text-base font-semibold"
                    >
                        Send Verification Code
                    </Button>

                    <div id="change-mobile-number-captcha" className="hidden" />
                </Form>
            </div>
        </div>
    );
};

export default ChangePhoneForm;
