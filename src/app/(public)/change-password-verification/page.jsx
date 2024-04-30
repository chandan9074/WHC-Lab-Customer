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

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const email = getCookie("temp_email");

    const router = useRouter();

    const handleUpdate = async (code) => {
        try {
            setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <Spin fullscreen spinning={loading} />
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <VerificationForm
                        title="email address"
                        verifyShortForm="asdasdasavc@gamil.com"
                        handleUpdate={handleUpdate}
                    />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangePassword;
