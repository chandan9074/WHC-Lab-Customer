import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import ChangePhoneForm from "@/sections/ChangePhone/ChangePhoneForm";
import React, { Suspense } from "react";

const ChangePhone = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4 flex justify-center">
                    <ChangePhoneForm />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default ChangePhone;
