import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import ForgotPassword from "@/sections/ForgotPassword/ForgotPassword";
import React, { Suspense } from "react";

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <ForgotPassword
                        title="Forgot password"
                        description="Choose how you want to reset your password:"
                    />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default page;
