import React from "react";
import HeroLeftSide from "./HeroLeftSide";
import HeroRightSide from "./HeroRightSide";
import AboutUs from "./AboutUs";

const HeroContainer = () => {
    return (
        <div className="container mx-auto px-6 sm:px-3 xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-6">
            <div className="grid gap-9 md:gap-0 md:grid-cols-2 grid-cols-1">
                <HeroLeftSide />
                <HeroRightSide />
            </div>
            <AboutUs />
        </div>
    );
};

export default HeroContainer;
