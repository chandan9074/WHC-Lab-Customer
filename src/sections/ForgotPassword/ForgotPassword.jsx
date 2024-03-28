"use client";
import React, { useState } from "react";
import { Button, Radio, Form, Input, Typography, Select, message } from "antd";
import Image from "next/image";
// import { RecaptchaVerifier } from "firebase/auth";
// import { socialAuth } from "@/config/firebase";
// import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
// import AuthService from "@/services/AuthService/AuthService";
// import { toast } from "react-toastify";
import LabelText from "@/components/common/LabelText";
// import PhoneNumberPrefix from "@/components/common/PhoneNumberPrefix";
import PhoneNumberInputField from "@/components/common/PhoneNumberInputField";
import Images from "../../../public/assets/Images";
import { FORGOT_PASSWORD_CONFIRMATION_PATH } from "@/helpers/slug";

const { Title } = Typography;

const ForgotPassword = ({ title, description, navigateRoute }) => {
    const [value, setValue] = useState("phone");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const { Option } = Select;
    const router = useRouter();

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

    const onFinish = async (values) => {
        router.push(FORGOT_PASSWORD_CONFIRMATION_PATH);
        // try {
        //     const token = getCookie("accessToken");
        //     let prefixValue = values.prefix || "+880";
        //     values.primaryPhone = prefixValue + values.primaryPhone;
        //     const res = await AuthService.checkNumberExist(
        //         values.primaryPhone,
        //         token
        //     );
        //     if (res?.status === 200) {
        //         // generateRecaptcha();
        //         const userInfo = JSON.parse(getCookie("userInfo"));
        //         const firebaseRes = await AuthService.getFirebaseOtp(userInfo);
        //         // console.log(firebaseRes);
        //         if (firebaseRes === 200) {
        //             toast.success("sent otp to phone number");
        //             router.push(navigateRoute);
        //         } else {
        //             toast.error(firebaseRes);
        //         }
        //         console.log(res);
        //     }
        // } catch (error) {
        //     toast.error(error?.error?.message);
        // }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center pb-[120px] pt-6">
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
                    // initialValues={{
                    //     remember: true,
                    // }}
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
                        {/* <Title
                            level={5}
                            className="m-0 text-[14px] font-normal text-black-700 "
                        >
                            Enter your phone number and password to sign in!
                        </Title> */}
                    </div>
                    <Radio.Group
                        onChange={onChange}
                        value={value}
                        className="flex flex-col  gap-4"
                    >
                        <Radio
                            value={"phone"}
                            className={`custom-radio text-neutral-700 ${
                                value === "phone" && "font-semibold"
                            }`}
                        >
                            {`Get a verification code at ${
                                0 !== 0 || "your phone number"
                            }`}
                        </Radio>

                        {value === "phone" && (
                            // <Form.Item
                            //     label={
                            //         <LabelText>
                            //             Enter your phone number
                            //         </LabelText>
                            //     }
                            //     name="primaryPhone"
                            //     rules={[
                            //         {
                            //             required: true,
                            //             message:
                            //                 "Please input your phone number!",
                            //         },
                            //     ]}
                            //     className="w-full text-sm font-medium text-neutral-300 mb-0"
                            // >
                            //     <Input
                            //         type="number"
                            //         addonBefore={<PhoneNumberPrefix />}
                            //         className="w-full rounded"
                            //         placeholder="1234567890"
                            //     />
                            // </Form.Item>
                            <PhoneNumberInputField />
                        )}

                        <Radio
                            value={"email"}
                            className={`custom-radio text-neutral-700 ${
                                value === "email" && "font-semibold"
                            }`}
                        >
                            Get a verification code at your e-mail
                        </Radio>

                        {value === "email" && (
                            // <Form.Item
                            //     label={<LabelText>Enter your email</LabelText>}
                            //     name="email"
                            //     autoComplete="off"
                            //     rules={[
                            //         {
                            //             required: true,
                            //             message: "Please input your email!",
                            //         },
                            //     ]}
                            //     className="w-full text-sm font-medium text-neutral-300 m-0"
                            // >
                            //     <Input
                            //         value={emailAddress}
                            //         autoComplete="off"
                            //         placeholder="Email"
                            //         className="w-full rounded-sm"
                            //         onChange={(event) =>
                            //             setEmailAddress(event.target.value)
                            //         }
                            //     />
                            // </Form.Item>
                            <Form.Item
                                name="email"
                                label={<LabelText>Enter your e-mail</LabelText>}
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please input your e-mail!",
                                    },
                                ]}
                                className="w-full text-sm font-medium text-neutral-300 m-0"
                            >
                                <Input
                                    value={emailAddress}
                                    autoComplete="off"
                                    placeholder="abc@xyz.us"
                                    className="w-full rounded-sm"
                                    onChange={(event) =>
                                        setEmailAddress(event.target.value)
                                    }
                                />
                            </Form.Item>
                        )}
                    </Radio.Group>

                    <div className="w-full">
                        <Form.Item className="m-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-brand-blue-500 text-base font-semibold leading-6 rounded-full p-2 h-[52px]"
                            >
                                Send Verification Code
                            </Button>
                        </Form.Item>
                    </div>

                    {/* <div className="w-full flex flex-col gap-5 justify-center items-center">
                        <Form.Item className="m-0 w-full">
                            <Link
                                href={FORGOT_PASSWORD_VERIFY_PATH}
                                className="w-full bg-[#EB038B] rounded-sm p-2 h-[48px] font-bold flex justify-center text-white items-center"
                            >
                                Send Verification Code
                            </Link>
                        </Form.Item>
                    </div> */}
                </Form>
            </div>
            <div id="change-mobile-number-captcha" />
        </div>
    );
};
export default ForgotPassword;
