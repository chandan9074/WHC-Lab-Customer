"use client";
import React, { useContext, useState } from "react";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Typography,
    Divider,
    Select,
    message,
    Spin,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { LOGIN_PATH, SIGN_UP_PATH } from "@/helpers/slug";
// import AuthService from "@/services/AuthService/AuthService";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { userContext } from "@/contexts/UserContext";
// import "./signInForm.css";
// import { toast } from "react-toastify";
// import { useCart } from "@/contexts/CartContext";
// import { getCookie, hasCookie } from "cookies-next";
import LabelText from "@/components/common/LabelText";
import PhoneNumberPrefix from "@/components/common/PhoneNumberPrefix";
import PhoneNumberInputField from "@/components/common/PhoneNumberInputField";
import Images from "../../../public/assets/Images";

const { Title } = Typography;

const SignInForm = () => {
    const router = useRouter();
    // const { setUserInfo, googleSingIn, facebookSignIn, socialLoginLoader } =
    //     useContext(userContext);
    const [isLoading, setIsLoading] = useState(false);
    // const [isSocialLoading, setIsSocialLoading] = useState({
    //     google: false,
    //     facebook: false,
    // });
    // const { getUpdateCartList } = useCart();

    const { Option } = Select;
    // const phoneNumberPrefix = (
    //     <Form.Item name={"prefix"} value="+880" noStyle>
    //         <Select defaultValue="+880" className="flex items-center w-20">
    //             <Option value="+880">+880</Option>
    //             <Option value="+1">+1</Option>
    //         </Select>
    //     </Form.Item>
    // );

    // const loginWithSocialMedia = [
    //     {
    //         title: "google",
    //         icon: Icons.google,
    //         isLoading: isSocialLoading.google,
    //     },
    //     // { title: "apple", icon: Icons.apple },
    //     {
    //         title: "facebook",
    //         icon: Icons.facebook,
    //         isLoading: isSocialLoading.facebook,
    //     },
    // ];

    const onFinish = async (values) => {
        // try {
        //     // Call the sign-in service
        //     setIsLoading(true);
        //     let prefixValue = values.prefix || "+880";
        //     const response = await AuthService.signIn(
        //         prefixValue + values.primaryPhone,
        //         values.password
        //     );
        //     setUserInfo(response.body.user);
        //     // Assuming your API returns a token in the response
        //     const token = response.body.token;
        //     const userInfo = response.body.user;
        //     // Set the token in a cookie
        //     Cookies.set("accessToken", token);
        //     Cookies.set("userInfo", JSON.stringify(userInfo));
        //     setIsLoading(true);
        //     toast.success(response.body.message);
        //     getUpdateCartList(token);
        //     // You can use the router to navigate to another page
        //     router.push("/");
        // } catch (error) {
        //     console.error("Failed:", error);
        //     setIsLoading(false);
        //     toast.error(error.error.message);
        // }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        setIsLoading(false);
    };

    // const handleGoogleSignIn = async () => {
    //     try {
    //         setIsSocialLoading({ ...isSocialLoading, google: true });
    //         await googleSingIn();
    //         const token = getCookie("accessToken");
    //         getUpdateCartList(token);
    //         setIsSocialLoading({ ...isSocialLoading, google: false });
    //     } catch (e) {
    //         setIsSocialLoading({ ...isSocialLoading, google: false });
    //         console.log(e);
    //     }
    // };

    // const handleFaceBookSignIn = async () => {
    //     try {
    //         setIsSocialLoading({ ...isSocialLoading, facebook: true });
    //         await facebookSignIn();
    //         const token = getCookie("accessToken");
    //         getUpdateCartList(token);
    //         setIsSocialLoading({ ...isSocialLoading, facebook: false });
    //     } catch (e) {
    //         setIsSocialLoading({ ...isSocialLoading, facebook: false });
    //         console.log(e);
    //     }
    // };

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
                            className=" md:w-[148.55px] md:h-[49px]"
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
                                    <h1 className="text-[28px] font-semibold leading-[42px] text-brand-blue-500 mb-0">
                                        Log in
                                    </h1>
                                    <h4 className="m-0 text-base font-normal text-neutral-400">
                                        Please fill up the form to sign in!
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                {/* <Form.Item
                                    label={<LabelText>Phone number</LabelText>}
                                    name="primaryPhone"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your phone number!",
                                        },
                                    ]}
                                    className="w-full text-sm font-medium text-neutral-300 mb-0"
                                >
                                    <Input
                                        type="number"
                                        addonBefore={<PhoneNumberPrefix />}
                                        className="w-full rounded text-[#7a8699] text-sm"
                                        placeholder="1234567890"
                                    />
                                </Form.Item> */}
                                {/* <PhoneNumberInputField /> */}

                                <Form.Item
                                    label={<LabelText>Email id</LabelText>}
                                    name="primaryEmail"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please insert your Email!",
                                        },
                                    ]}
                                    className="w-full text-base font-medium text-neutral-400 m-0"
                                >
                                    <Input
                                        type="email"
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
                                        className="w-full py-3 rounded-sm text-[#7a8699] text-sm"
                                    />
                                </Form.Item>

                                <div className="flex flex-row justify-between items-center w-full">
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        className="flex items-center m-0 "
                                    >
                                        <Checkbox className="  text-[#3A3A3A] text-opacity-[88%] text-sm font-medium">
                                            Keep me logged in
                                        </Checkbox>
                                    </Form.Item>

                                    <Link href={"/"}>
                                        <Title
                                            level={5}
                                            className="text-brand-blue-500 m-0 font-medium hover:underline cursor-pointer text-sm"
                                        >
                                            Forgot password?
                                        </Title>
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

                        {/* <div className="flex flex-row gap-4 justify-between w-full">
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
                        </div> */}
                    </div>

                    <h4 className="text-sm font-medium text-neutral-400 text-center leading-[21px]">
                        Don't have an account ?{" "}
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
