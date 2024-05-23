"use client";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Divider, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FORGOT_PASSWORD_PATH, SIGN_UP_PATH } from "@/helpers/slug";
import LabelText from "@/components/common/LabelText";
import Images from "../../../public/assets/Images";
import { LoadingOutlined } from "@ant-design/icons";
import { SIGN_IN_URL } from "@/helpers/apiURLS";
import { toast } from "react-toastify";
import { useAuthContext } from "@/contexts/AuthContext";
import MakeApiCall from "@/services/MakeApiCall";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import Icons from "../../../public/assets/Icons";
import { useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";

const SignInForm = () => {
    const { handlePageTransition } = useAuthContext();
    const { getUpdateCartList } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [isSocialLoading, setIsSocialLoading] = useState({
        google: false,
        facebook: false,
    });
    const { googleSingIn, facebookSignIn } = useAuthContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    const loginWithSocialMedia = [
        {
            title: "google",
            icon: Icons.googleLogo,
            isLoading: isSocialLoading.google,
        },
        // { title: "apple", icon: Icons.apple },
        {
            title: "facebook",
            icon: Icons.facebookLogo,
            isLoading: isSocialLoading.facebook,
        },
    ];

    const handleGoogleSignIn = async () => {
        try {
            setIsSocialLoading({ ...isSocialLoading, google: true });
            await googleSingIn();
            const token = getCookie("accessToken");
            getUpdateCartList(token);
            setIsSocialLoading({ ...isSocialLoading, google: false });
        } catch (e) {
            setIsSocialLoading({ ...isSocialLoading, google: false });
            console.log(e);
            if (e.message !== "Firebase: Error (auth/popup-closed-by-user).") {
                toast.error(e.message);
            }
        }
    };

    const handleFaceBookSignIn = async () => {
        try {
            setIsSocialLoading({ ...isSocialLoading, facebook: true });
            await facebookSignIn();
            const token = getCookie("accessToken");
            getUpdateCartList(token);
            setIsSocialLoading({ ...isSocialLoading, facebook: false });
        } catch (e) {
            setIsSocialLoading({ ...isSocialLoading, facebook: false });
            console.log(e);
        }
    };

    const onFinish = async (values) => {
        delete values.remember;
        try {
            setIsLoading(true);
            const responseData = await MakeApiCall({
                apiUrl: SIGN_IN_URL,
                method: "POST",
                body: values,
            });

            if (responseData.status === 200) {
                handlePageTransition(responseData);
                toast.success(responseData.message);
                getUpdateCartList(responseData.token);

                // You can use the router to navigate to another page
                if (redirect) {
                    router.push(redirect);
                } else {
                    router.push("/");
                }
            }
        } catch (error) {
            // console.log("error", error.message);
            toast.error(error?.message);
        } finally {
            setIsLoading(false);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        setIsLoading(false);
    };

    return (
        <>
            <Spin spinning={isLoading} fullscreen />

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

                    <div className="flex flex-col gap-6">
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            layout="vertical"
                            className="flex flex-col gap-6 lg:gap-9 "
                        >
                            <div className="self-start flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <h1 className="text-xl md:text-[28px] font-semibold leading-[42px] text-brand-blue-500 mb-0">
                                        Log in
                                    </h1>
                                    <h4 className="m-0 text-base font-normal text-neutral-400">
                                        Please fill up the form to sign in!
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <Form.Item
                                    label={<LabelText>Email</LabelText>}
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please insert your Email!",
                                        },
                                        {
                                            type: "email",
                                            message:
                                                "Please insert valid Email!",
                                        },
                                    ]}
                                    className="w-full text-base font-medium text-neutral-400 m-0"
                                >
                                    <Input
                                        className="w-full py-[13px] text-base font-normal leading-6"
                                        placeholder="abc@gmail.com"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<LabelText>Password</LabelText>}
                                    name="password"
                                    autoComplete="off"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}
                                    className="w-full text-sm font-medium text-neutral-300 mb-0"
                                >
                                    <Input.Password
                                        autoComplete="off"
                                        placeholder="Min. 8 characters"
                                        className="w-full rounded-sm text-[#7a8699] text-sm py-0"
                                    />
                                </Form.Item>

                                <div className="flex flex-row justify-between items-center w-full">
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        className="flex items-center m-0 "
                                    >
                                        <Checkbox className=" text-[#3A3A3A] text-opacity-[88%] text-sm font-medium">
                                            Keep me logged in
                                        </Checkbox>
                                    </Form.Item>

                                    <Link href={FORGOT_PASSWORD_PATH}>
                                        <h5 className="text-brand-blue-500 m-0 font-medium hover:underline cursor-pointer text-sm">
                                            Forgot password?
                                        </h5>
                                    </Link>
                                </div>
                            </div>

                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full duration-200 bg-brand-blue-500 text-base font-semibold leading-6 rounded-full p-2 h-[52px] flex items-center justify-center gap-3"
                            >
                                {isLoading && (
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
                                Sign In
                            </Button>
                        </Form>

                        <Divider className="m-0 text-neutral-300">or</Divider>

                        <div className="flex flex-row gap-4 justify-between w-full">
                            {loginWithSocialMedia.map((ele, id) => {
                                const handleSocialMediaLogin = () => {
                                    if (ele.title === "google") {
                                        handleGoogleSignIn();
                                    } else if (ele.title === "facebook") {
                                        handleFaceBookSignIn();
                                    }
                                };

                                return (
                                    <button
                                        key={id}
                                        disabled={ele.isLoading}
                                        className="border-2 border-[#EBEDF0] rounded-sms w-full h-[48px] flex items-center justify-center gap-3 bg-[#F5F6F7] cursor-pointer"
                                        onClick={handleSocialMediaLogin}
                                    >
                                        <Spin
                                            spinning={ele.isLoading}
                                            size="small"
                                        />
                                        <Image
                                            alt={ele.title}
                                            src={ele.icon}
                                            height={24}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <h4 className="text-sm font-medium text-neutral-400 text-center leading-[21px]">
                        Don&apos;t have an account ?{" "}
                        <Link
                            href={SIGN_UP_PATH}
                            className="text-[15px] text-brand-blue-500 cursor-pointer font-medium leading-[19.53px]"
                        >
                            Sign up
                        </Link>
                    </h4>
                </div>
            </div>
        </>
    );
};
export default SignInForm;
