import React from "react";

const AboutUs = () => {
    return (
        <div className="lg:mt-20 md:mt-14 sm:mt-12 mt-9 lg:p-9 md:p-8 sm:p-7 p-6 rounded-[25px] border border-stroke-new bg-light-gray backdrop-blur-[30px] flex  md:flex-row flex-col items-start xl:gap-20 lg:gap-14 md:gap-12 sm:gap-8 gap-6">
            <h2 className="xl:text-[32px] lg:text-3xl sm:text-2xl text-xl font-semibold text-brand-blue-800 whitespace-nowrap">
                ABOUT US
            </h2>
            <p className="xl:text-lg md:text-base text-sm text-brand-blue-800 md:leading-7 leading-[22px]">
                WHC Lab is a biotechnology business, focused on fermentation in
                Newcastle, Co. Wicklow, Ireland. We use the latest technologies
                & processes to manufacture yeast & bacteria strains that are
                sold globally to customers. Our R&D lab is home to
                industry-leading equipment. We cater to the brewing, distilling,
                wine, pharma and animal feed industry.
            </p>
        </div>
    );
};

export default AboutUs;
