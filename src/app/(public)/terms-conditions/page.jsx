import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import TermsConditionsSection from "@/sections/TermsConditions/TermsCondtionsSection";
import React, { Suspense } from "react";

export default function TermsConditions() {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <TermsConditionsSection />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
}
