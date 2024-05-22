import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import PrivacyPolicyContainer from "@/sections/PrivacyPolicy/PrivacyPolicyContainer";
import React, { Suspense } from "react";

export default function TermsConditions() {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <PrivacyPolicyContainer />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
}
