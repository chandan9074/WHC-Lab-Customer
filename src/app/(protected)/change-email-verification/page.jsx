import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import VerificationForm from "@/sections/Common/VerificationForm";
import React, { Suspense } from "react";

const ChangePhone = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <VerificationForm
                        title="email address"
                        verifyShortForm="asdasdasavc@gamil.com"
                    />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangePhone;
