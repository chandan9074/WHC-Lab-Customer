import Buttons from "@/components/Buttons";
import React from "react";

const OfferLeftSide = () => {
    return (
        <div className="lg:col-span-5 col-span-12">
            <p className="lg:text-xl md:text-lg sm:text-base text-sm font-light w-full sm:w-96 text-brand-blue-800-80% md:mb-9 mb-6">
                We offer a range of different services be it yeast, laboratory
                testing, enzymes, processing aids or technical consulting.
            </p>
            <div className="lg:block hidden">
                <Buttons.IconWithLabel label={"EXPLORE OUR ALL STRAINS "} />
            </div>
        </div>
    );
};

export default OfferLeftSide;
