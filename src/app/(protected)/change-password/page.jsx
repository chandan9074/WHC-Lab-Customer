import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import ChangePassword from "@/sections/ChangePassword";
import React, { Suspense } from "react";

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <ChangePassword title="Change Your Password" />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default page;
