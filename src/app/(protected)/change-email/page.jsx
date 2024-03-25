import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import ChangeEmailForm from "@/sections/ChangeEmail/ChangeEmailForm";
import React, { Suspense } from "react";

const ChangePhone = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <ChangeEmailForm />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangePhone;
