import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import ForgotPasswordConfirm from "@/sections/ForgotPassword/ForgotPasswordConfirm";
import React, { Suspense } from "react";

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <ForgotPasswordConfirm />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default page;
