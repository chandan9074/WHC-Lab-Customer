"use client";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Typography,
    Divider,
    message,
    Spin,
    Select,
    Flex,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";
// import {
//     CHANGE_PHONE_VERIFICATION_PATH,
//     SIGN_IN_PATH,
//     SIGN_UP_VERIFICATION_PATH,
// } from "@/helpers/slug";
import { useRouter } from "next/navigation";
// import AuthService from "@/services/AuthService/AuthService";
import { useContext, useState } from "react";
// import { userContext } from "@/contexts/UserContext";
// import { RecaptchaVerifier } from "firebase/auth";
// import { socialAuth } from "@/config/firebase";
// import "../SignIn/signInForm.css";
// import { formatPhoneNumberWithCountryCode } from "../../helpers/utils";
// import { toast } from "react-toastify";
import LabelText from "@/components/common/LabelText";
import PhoneNumberInputField from "@/components/common/PhoneNumberInputField";
import Icons from "../../../public/assets/Icons";
import Images from "../../../public/assets/Images";
import { LOGIN_PATH } from "@/helpers/slug";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useAuthContext } from "@/contexts/AuthContext";
import { whcFetch } from "@/services/BaseWHCHTTP";
import { SIGN_UP_URL } from "@/helpers/apiURLS";
import { toast } from "react-toastify";
import MakeApiCall from "@/services/MakeApiCall";

const { Title } = Typography;

const SignInForm = () => {
    const router = useRouter();
    const { setUserInfo, googleSingIn, facebookSignIn } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [isSocialLoading, setIsSocialLoading] = useState({
        google: false,
        facebook: false,
    });

    const loginWithSocialMedia = [
        { title: "google", icon: Icons.googleLogo },
        // { title: "Apple", icon: Icons.appleLogo },
        {
            title: "facebook",
            icon: Icons.facebookLogo,
        },
    ];

    const { Option } = Select;
    const phoneNumberPrefix = (
        <Form.Item name={"prefix"} value="+880" noStyle>
            <Select defaultValue="+880" className="flex items-center">
                <Option value="+880">+880</Option>
                <Option value="+1">+1</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = async (values) => {
        console.log(values);
        try {
            setLoading(true);
            // Call the sign-in service
            // const response = await AuthService.signUp(
            //     values.firstName,
            //     values.lastName,
            //     values.primaryEmail,
            //     values.company,
            //     values.password,
            //     values.confirmPassword
            // );
            const body = {
                firstName: values.firstName,
                lastName: values.lastName,
                primaryEmail: values.primaryEmail,
                company: values.company,
                password: values.password,
                confirmPassword: values.confirmPassword,
            };
            const response = await MakeApiCall({
                apiUrl: SIGN_UP_URL,
                method: "POST",
                body: body,
            });
            console.log(response, "sign  up response");
            setCookie("temp_userInfo", JSON.stringify(response.user));
            setCookie("temp_accessToken", response.user.token);
            toast.success(response.message);
            setLoading(false);

            // setUserInfo(response.body.user);
            // // Assuming your API returns a token in the response
            // const token = response.body.token;
            // console.log(response);
            // // Set the token in a cookie
            // Cookies.set("accessToken", token);
            // Cookies.set("userInfo", JSON.stringify(response.body.user));
            // You can use the router to navigate to another page
            router.push("/sign-up-verification");
        } catch (error) {
            // console.error("Failed:", error);
            setLoading(false);
            toast.error(error.message);
        }
        // try {
        //     setLoading(true);
        //     values.primaryPhone = formatPhoneNumberWithCountryCode(
        //         values.prefix,
        //         values.primaryPhone
        //     );
        //     // values.primaryPhone = `${values.prefix}${values.primaryPhone}`
        //     await AuthService.checkNumber(values.primaryPhone);
        //     // Call the sign-in service
        //     generateRecaptcha();
        //     const res = await AuthService.getFirebaseOtp(values);
        //     setLoading(false);
        //     if (res === 200) {
        //         toast.success("sent otp to phone number");
        //         router.push(SIGN_UP_VERIFICATION_PATH);
        //     } else {
        //         toast.error(res);
        //     }
        // } catch (error) {
        //     setLoading(false);
        //     toast.error(error.error.message);
        // }
    };

    const handleGoogleSignIn = async () => {
        try {
            setIsSocialLoading({ ...isSocialLoading, google: true });
            await googleSingIn();
            const token = getCookie("accessToken");
            // getUpdateCartList(token);
            setIsSocialLoading({ ...isSocialLoading, google: false });
            router.push("/");
        } catch (error) {
            setIsSocialLoading({ ...isSocialLoading, google: false });
            toast.error(error.message);
            // console.log(e);
        }
    };

    const handleFaceBookSignIn = async () => {
        try {
            setIsSocialLoading({ ...isSocialLoading, facebook: true });
            await facebookSignIn();
            const token = getCookie("accessToken");
            // getUpdateCartList(token);
            setIsSocialLoading({ ...isSocialLoading, facebook: false });
        } catch (e) {
            setIsSocialLoading({ ...isSocialLoading, facebook: false });
            console.log(e);
        }
    };

    // const generateRecaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //         socialAuth,
    //         "sign-up-captcha",
    //         {
    //             size: "invisible",
    //             callback: (response) => {
    //                 // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             },
    //         }
    //     );
    // };

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
                    name="basic"
                    initialValues={{
                        terms: true,
                        prefix: "+880",
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <div className="flex flex-col gap-9 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xl md:text-[28px] font-semibold leading-[42px] text-brand-blue-500 mb-0">
                                Register New Account
                            </h1>
                            <h4 className="m-0 text-sm md:text-base font-normal text-neutral-400">
                                Please fill up the form to create a new account!
                            </h4>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-6 md:flex-row">
                                <Form.Item
                                    label={<LabelText>First name</LabelText>}
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your first name!",
                                        },
                                    ]}
                                    className="w-full text-sm font-medium text-neutral-400 m-0"
                                >
                                    <Input
                                        type="text"
                                        className="w-full"
                                        placeholder="Write your first name"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<LabelText>Last name</LabelText>}
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your last name!",
                                        },
                                    ]}
                                    className="w-full text-sm font-medium text-neutral-400 m-0"
                                >
                                    <Input
                                        type="text"
                                        className="w-full"
                                        placeholder="Write your last name"
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                label={<LabelText>Email</LabelText>}
                                name="primaryEmail"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please insert your Email!",
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
                            {/* <PhoneNumberInputField /> */}
                            {/* <Form.Item
                                label={<LabelText>Phone number</LabelText>}
                                name="primaryPhone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone number!",
                                    },
                                    {
                                        min: 10,
                                        message: "Please enter valid phone number!",
                                    },
                                ]}
                                className="w-full text-sm font-medium text-neutral-300 m-0"
                            >
                                <Input
                                    type="number"
                                    addonBefore={phoneNumberPrefix}
                                    className="w-full rounded-sm"
                                    placeholder="1234567890"
                                />
                            </Form.Item> */}

                            <Form.Item
                                label={<LabelText>Company Name</LabelText>}
                                name="companyName"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your company name!",
                                    },
                                ]}
                                className="w-full text-sm font-medium text-neutral-400 m-0"
                            >
                                <Input
                                    type="text"
                                    className="w-full"
                                    placeholder="insert your company name"
                                />
                            </Form.Item>

                            <Form.Item
                                label={<LabelText>Password</LabelText>}
                                name="password"
                                autoComplete="off"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                    {
                                        min: 8,
                                        message:
                                            "Password must be at least 8 characters long.",
                                    },
                                ]}
                                className="w-full text-sm font-medium text-neutral-400 m-0"
                            >
                                <Input.Password
                                    autoComplete="off"
                                    placeholder="Min. 8 characters"
                                    className="w-full"
                                />
                            </Form.Item>

                            <Form.Item
                                label={<LabelText>Confirm password</LabelText>}
                                name="confirmPassword"
                                autoComplete="off"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your confirm password!",
                                    },
                                    {
                                        min: 8,
                                        message:
                                            "Password must be at least 8 characters long!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
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
                                className="w-full text-sm font-medium text-neutral-400 m-0"
                            >
                                <Input.Password
                                    autoComplete="off"
                                    placeholder="Min. 8 characters"
                                    className="w-full"
                                />
                            </Form.Item>

                            <div className="flex flex-row justify-between items-center w-full">
                                <Form.Item
                                    name="terms"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value
                                                    ? Promise.resolve()
                                                    : Promise.reject(
                                                          "Please accept the terms and conditions!"
                                                      ),
                                        },
                                    ]}
                                    className="flex items-center m-0 "
                                >
                                    <Checkbox
                                        className=" checked:accent-brand-blue-500 text-[#3A3A3AE0] text-opacity-[88%] text-sm font-semibold"
                                        // style={{
                                        //     "&.ant-checkbox-input": {
                                        //         backgroundColor: "text-magenta-500",
                                        //     },
                                        // }}
                                    >
                                        By signing up, you agree to our{" "}
                                        <span className="text-brand-blue-500">
                                            Terms & Conditions.
                                        </span>
                                    </Checkbox>
                                </Form.Item>
                            </div>
                        </div>

                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={loading}
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
                            {loading ? "please wait" : "Send Verification Code"}
                        </Button>
                    </div>

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
                                <div
                                    key={id}
                                    // onClick={ele.handleSingIn}
                                    className="border-2 border-[#EBEDF0] rounded-sms w-full h-[48px] flex items-center justify-center gap-3 bg-[#F5F6F7] cursor-pointer"
                                    onClick={handleSocialMediaLogin}
                                >
                                    <Image
                                        alt={ele.title}
                                        src={ele.icon}
                                        height={24}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Form>

                <h4 className="text-sm font-medium text-neutral-400 text-center leading-[21px]">
                    Already have an account?{" "}
                    <Link
                        href={LOGIN_PATH}
                        className="text-[15px] text-brand-blue-500 cursor-pointer font-medium leading-[19.53px]"
                    >
                        Sign In
                    </Link>
                </h4>
            </div>
            <div id="sign-up-captcha" />
        </div>
    );
};

export default SignInForm;
