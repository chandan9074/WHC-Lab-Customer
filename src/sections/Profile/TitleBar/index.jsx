"use client";
import React from "react";
import { usePathname } from "next/navigation";

const TitleBar = ({ profileData }) => {
    const paths = usePathname();
    const routePartFromList = profileData?.map((ele) => ele.children);
    const combinedArray = [...routePartFromList[0], ...routePartFromList[1]];
    const currentPage = combinedArray.filter((ele) => ele.url === paths);

    return (
        <div className="font-semibold text-xl text-brand-blue-800">
            {currentPage[0]?.title}
        </div>
    );
};

export default TitleBar;
