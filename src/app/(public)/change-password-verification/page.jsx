"use client";
import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import VerificationForm from "@/sections/Common/VerificationForm";
import UserService from "@/services/UserService/UserService";
import { Spin } from "antd";
import { getCookie } from "cookies-next";
import React, { Suspense, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LOGIN_PATH } from "@/helpers/slug";
import { RESET_PASSWORD } from "@/helpers/apiURLS";
import MakeApiCall from "@/services/MakeApiCall";
import { MethodsStructure } from "@/services/MethodsStructure";

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const email = getCookie("temp_email");
    const [verifying, setVerifying] = useState(false);

    const router = useRouter();

    const handleUpdate = async (code) => {
        try {
            setLoading(true);
            setVerifying(true);
            const data = {
                action: "reset_password",
                otp: parseInt(code),
                email,
            };

            const response = await UserService.verifyOTP(data);

            if (response?.status === 200) {
                toast.success(response?.message);
                router.push(LOGIN_PATH);
            }
        } catch (e) {
            toast.error(e?.message);
            setVerifying(false);
        } finally {
            setLoading(false);
        }
    };

    const handleResendCode = async () => {
        const tempPassword = JSON.parse(getCookie("temp_whc_forget_pass_info"));
        const res = await MakeApiCall({
            apiUrl: RESET_PASSWORD,
            body: { ...tempPassword },
            ...MethodsStructure.patchMethod(),
        });

        if (res?.status === 200) {
            toast.success(res.message);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <Spin fullscreen spinning={loading} />
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <VerificationForm
                        title="email address"
                        verifyShortForm={email}
                        handleUpdate={handleUpdate}
                        loading={loading}
                        verifying={verifying}
                        handleResendCode={handleResendCode}
                        verificationType={"reset_password"}
                    />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangePassword;
