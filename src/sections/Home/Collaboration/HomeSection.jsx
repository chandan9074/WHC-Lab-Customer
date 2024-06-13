"use client";
import React from "react";
import Card from "./Card";
import Buttons from "@/components/Buttons";
import Link from "next/link";
import TopSection from "./TopSection";

function CollaborationSection({ data }) {
    console.log({ data });

    return (
        <div className="bg-[#F5F5F5]">
            <div className="flex flex-col gap-6 md:gap-12 container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 pb-10">
                <TopSection fromPage={true} />
                <Card data={data?.docs[0]} />
            </div>
        </div>
    );
}

export default CollaborationSection;
