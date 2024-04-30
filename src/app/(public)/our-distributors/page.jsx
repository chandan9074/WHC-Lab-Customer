"use client";
import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import dynamic from "next/dynamic";
import Layouts from "@/layouts";
import CountryCategorySelection from "@/sections/OurDistributors/CountryCategorySelection";
// import Map from "@/sections/OurDistributors/Map";
import { Form, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { Suspense } from "react";

const Map = dynamic(() => import("@/sections/OurDistributors/Map"), {
    ssr: false,
});

const OurDistributors = () => {
    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <InfoPagesContainer>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-9 w-full md:w-[384px]">
                            <h1 className="text-5xl font-semibold text-brand-blue-800 leading-[62.4px]">
                                Know Our Distributors
                            </h1>
                            <CountryCategorySelection />
                        </div>
                        <div className="col-span-12 md:col-span-8 relative z-0">
                            <Map />
                        </div>
                    </div>
                </InfoPagesContainer>
            </Layouts.Primary>
        </Suspense>
    );
};

export default OurDistributors;
