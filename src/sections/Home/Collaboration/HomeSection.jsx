"use client";
import React from "react";
import Card from "./Card";
import Buttons from "@/components/Buttons";

function CollaborationSection({ data }) {
    console.log({ data });

    return (
        <div className="bg-[#F5F5F5]">
            <div className="flex flex-col gap-6 md:gap-12 container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 pb-10">
                <div className="space-y-4 lg:space-y-6">
                    <div className="flex justify-between">
                        <h1 className="text-brand-blue-800 text-2xl lg:text-5xl font-semibold">
                            Latest Collaboration
                        </h1>
                        <Buttons.OutlinedButton label="Show All Collaboration" />
                    </div>
                    <p className="text-brand-blue-800 text-base font-normal">
                        WHC Lab sets the standard in yeast production, employing
                        advanced genetic/QPCR and plating methods. Each batch
                        undergoes meticulous testing, ensuring nothing leaves
                        our facility without meeting the highest QC standards.
                    </p>
                </div>
                <Card data={data?.docs[0]} />
            </div>
        </div>
    );
}

export default CollaborationSection;
