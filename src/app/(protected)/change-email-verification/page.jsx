"use client";
import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import VerificationForm from "@/sections/Common/VerificationForm";
import UserService from "@/services/UserService/UserService";
import { Spin } from "antd";
import { getCookie } from "cookies-next";
import React, { Suspense, use, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MY_ACCOUNT_PATH } from "@/helpers/slug";

const ChangeEmailVerification = () => {
    const [loading, setLoading] = useState(false);
    const token = getCookie("accessToken");
    const userInfo = getCookie("userInfo");
    const _userInfo = userInfo && JSON.parse(userInfo);
    const router = useRouter();

    const handleUpdate = async (code) => {
        try {
            setLoading(true);
            const data = {
                action: "change_email",
                otp: parseInt(code),
                email: _userInfo?.primaryEmail,
            };
            const response = await UserService.verifyOTP(data, token);

            if (response?.status === 200) {
                toast.success(response?.message);
                router.push(MY_ACCOUNT_PATH);
            }
        } catch (e) {
            toast.error(e?.message);
        } finally {
            setLoading(false);
        }
    };

    const handleResendCode = () => {
        console.log("userDetails", userDetails);
        console.log("resend code");
    };

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <Spin fullscreen spinning={loading} />
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <VerificationForm
                        title="email address"
                        verifyShortForm={_userInfo?.primaryEmail}
                        handleUpdate={handleUpdate}
                        handleResendCode={handleResendCode}
                        verificationType={"change_email"}
                    />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangeEmailVerification;
