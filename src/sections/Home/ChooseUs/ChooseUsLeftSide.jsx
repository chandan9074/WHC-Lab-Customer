import Buttons from "@/components/Buttons";
import React from "react";

const ChooseUsLeftSide = ({ whyUsLeftContents }) => {
    return (
        <div className="lg:col-span-5 col-span-12">
            <p className="md:text-base text-sm font-light w-full sm:w-[486px] text-brand-blue-800-80% md:mb-9 mb-7">
                {whyUsLeftContents[0]?.leftSection}
            </p>
        </div>
    );
};

export default ChooseUsLeftSide;
