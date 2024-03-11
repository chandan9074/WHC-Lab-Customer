import Buttons from "@/components/Buttons";
import React from "react";

const HeroLeftSide = () => {
    return (
        <div>
            <h4 className="lg:text-base md:text-sm text-xs font-semibold text-brand-blue-800">
                WELCOME TO THE WHC LAB
            </h4>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-[28px] text-brand-blue-800 font-semibold lg:leading-[62px] md:leading-[50px] sm:leading-10 leading-9 lg:w-[560px] w-full md:mt-6 mt-3">
                Brewing the Finest Yeast in Europe
            </h1>
            <p className="xl:mt-9 lg:mt-8 md:mt-6 sm:mt-5 mt-4  md:text-lg text-base text-brand-blue-800 lg:w-[588px] w-full lg:mb-12 md:mb-9 sm:mb-7 mb-6">
                WHC Lab is a biotechnology business focused on the
                brewing/distilling industry. Our R&D laboratory boasts best in
                class laboratory equipment, experts in the industry and uses
                next-generation methods to grow yeast, bacteria and to perform
                analysis on beer, cider, spirits, water and wine.
            </p>
            <Buttons.IconWithLabel label={"EXPLORE OUR STRAINS"} />
        </div>
    );
};

export default HeroLeftSide;
