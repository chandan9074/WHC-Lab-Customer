import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import React from "react";
import Images from "../../../../public/assets/Images";
import ChooseUsLeftSide from "./ChooseUsLeftSide";
import ChooseUsRightSide from "./ChooseUsRightSide";

const ChooseUsContainer = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 relative z-20">
                <SectionHeader title={"WHY CHOOSE US"} />
                <div className="grid grid-cols-12 xl:mt-12 lg:mt-10 md:mt-9 sm:mt-7 mt-6">
                    <ChooseUsLeftSide />
                    <ChooseUsRightSide />
                </div>
            </div>
            <Image
                src={Images.offer_image}
                width={1000}
                height={1000}
                alt="offer_image"
                className="2xl:w-[465px] xl:w-[562px] lg:w-[480px] 2xl:h-[427px] xl:h-[515px] lg:h-[420px]  absolute left-28 top-[23rem] z-10 lg:block hidden"
            />
            <Image
                src={Images.offer_image}
                width={1000}
                height={1000}
                alt="offer_image"
                className="2xl:w-[460px] xl:w-[370px] lg:w-[300px] 2xl:h-[422px] xl:h-[340px] lg:h-[270px] rotate-[54deg] absolute -right-7 top-20 z-10 lg:block hidden"
            />
            <Image
                src={Images.offer_image}
                width={1000}
                height={1000}
                alt="offer_image"
                className="2xl:w-[300px] xl:w-[370px] lg:w-[300px] 2xl:h-[270px] xl:h-[340px] lg:h-[270px] rotate-[54deg] absolute right-[38rem] top-[28rem] z-10 lg:block hidden"
            />
        </div>
    );
};

export default ChooseUsContainer;
