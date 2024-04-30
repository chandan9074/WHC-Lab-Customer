"use client";
import Loader from "@/components/common/Loader";
import { useAuthContext } from "@/contexts/AuthContext";
import { VERIFY_OTP } from "@/helpers/apiURLS";
import Layouts from "@/layouts";
import VerificationForm from "@/sections/Common/VerificationForm";
import MakeApiCall from "@/services/MakeApiCall";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SignUpVerification = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState(null);
    const { setUserInfo, setIsLogin } = useAuthContext();
    const [token, setToken] = useState(null);

    console.log(userDetails, "data-----");

    useEffect(() => {
        const userInfo = JSON.parse(getCookie("temp_userInfo"));
        const tokenData = getCookie("temp_accessToken");
        setUserDetails(userInfo);
        setToken(tokenData);
    }, []);

    const handleSubmit = async (value) => {
        try {
            const body = {
                action: "change_email",
                otp: Number(value),
                email: userDetails.primaryEmail,
            };
            const response = await MakeApiCall({
                apiUrl: VERIFY_OTP,
                method: "POST",
                body: body,
                headers: { Authorization: token },
            });
            toast.success(response?.message);
            setCookie("userInfo", JSON.stringify(userDetails));
            setCookie("accessToken", token);
            setIsLogin(true);
            setUserInfo(userDetails);
            deleteCookie("temp_userInfo");
            deleteCookie("temp_accessToken");
            router.push("/");
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    {userDetails && (
                        <VerificationForm
                            title="sign up"
                            verifyShortForm={userDetails?.primaryEmail}
                            handleUpdate={handleSubmit}
                        />
                    )}
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default SignUpVerification;
