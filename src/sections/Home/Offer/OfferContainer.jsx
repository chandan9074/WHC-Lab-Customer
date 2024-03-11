import React from "react";
import OfferLeftSide from "./OfferLeftSide";
import OfferRightSide from "./OfferRightSide";
import Image from "next/image";
import Images from "../../../../public/assets/Images";
import SectionHeader from "@/components/common/SectionHeader";

const OfferContainer = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 relative z-20">
                {/* <h1 className="text-brand-blue-800 font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                    VARIOUS SERVICES WE OFFER
                </h1> */}
                <SectionHeader title={"VARIOUS SERVICES WE OFFER"} />
                <div className="grid grid-cols-12 xl:mt-20 lg:mt-14 md:mt-11 sm:mt-8 mt-6">
                    <OfferLeftSide />
                    <OfferRightSide />
                </div>
            </div>
            <Image
                src={Images.offer_image}
                width={1000}
                height={1000}
                alt="offer_image"
                className="2xl:w-[700px] xl:w-[562px] lg:w-[480px] 2xl:h-[630px] xl:h-[515px] lg:h-[420px] rotate-[54deg] absolute -left-6 top-96 z-10 lg:block hidden"
            />
            <Image
                src={Images.offer_image}
                width={1000}
                height={1000}
                alt="offer_image"
                className="2xl:w-[400px] xl:w-[370px] lg:w-[300px] 2xl:h-[370px] xl:h-[340px] lg:h-[270px] rotate-[54deg] absolute -right-7 bottom-0 z-10 lg:block hidden"
            />
        </div>
    );
};

export default OfferContainer;
