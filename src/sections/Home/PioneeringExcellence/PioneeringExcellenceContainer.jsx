"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pioneeringGIF from "../../../../public/pioneeringGIF.gif";
import Buttons from "@/components/Buttons";
import Icons from "../../../../public/assets/Icons";
const PioneeringExcellenceContainer = () => {
    const [selectedCarousel, setSelectedCarousel] = useState(0);
    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setSectionHeight(629);
        } else {
            setSectionHeight(320);
        }
    }, []);
    return (
        <div className="container mx-auto px-6 py-9 md:py-[120px]">
            <div className="space-y-9 md:space-y-12">
                <h1 className="text-2xl font-semibold leading-9 md:text-[32px] md:leading-12 text-brand-blue-800 max-w-[900px]">
                    Pioneering Excellence in Brewing, Distilling, and Lab
                    Analysis Innovations
                </h1>
                <div className="flex flex-col gap-y-6 md:gap-y-12 items-center">
                    <div className="relative overflow-hidden rounded-[6.51px] md:rounded-[25px]">
                        <Image
                            src={pioneeringGIF}
                            width={1000}
                            height={1000}
                            alt="pioneering-gif"
                            style={{ height: `${sectionHeight}px` }}
                            className="rounded-[6.51px] md:rounded-[25px] w-screen"
                        />
                        <div
                            className="absolute w-full duration-500"
                            style={{
                                top: `-${sectionHeight * selectedCarousel}px`,
                            }}
                        >
                            {pioneeringData.map((item) => (
                                <div
                                    key={item._id}
                                    className="w-full h-[320px] md:h-[629px] flex items-center justify-center"
                                >
                                    <div className="px-4 py-4 md:py-6 md:px-9 bg-stroke-new bg-opacity-25 backdrop-blur-xl rounded-[6.5px] md:rounded-[25px]">
                                        <p className="text-sm md:text-lg text-white leading-4 md:leading-7 text-center w-[280px] md:w-[550px] lg:w-[750px] xl:w-[911px] md:py-4">
                                            {item.comment}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-[46px] md:right-[19px]  hidden md:block">
                            <Buttons.IconWithLabel
                                label={"EXPLORE OUR ALL STRAINS"}
                                bgColor="bg-white"
                                textColor="text-brand-blue-800"
                                rightIcon={Icons.arrow_up_right_blue}
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 relative z-20">
                        {pioneeringData.map((item, index) => (
                            <button
                                key={index}
                                className="py-2"
                                onClick={() => setSelectedCarousel(index)}
                            >
                                <div
                                    className={`w-[66px] md:w-[150px] lg:w-[220px] xl:w-[287px] 2xl:w-[330px] h-[3px] bg-black duration-300 ${
                                        selectedCarousel === index
                                            ? ""
                                            : "bg-opacity-15"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="md:hidden w-full">
                        <Buttons.IconWithLabel label={"EXPLORE OUR STRAINS"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PioneeringExcellenceContainer;

const pioneeringData = [
    {
        _id: 1,
        comment:
            "WHC Lab is a Biotechnology business focused on the brewing/distilling industry, established in 2017. The laboratory boasts best in class laboratory equipment, experts in the brewing and distilling industry and uses next-generation methods to grow brewing/distilling yeast and bacteria.",
    },
    {
        _id: 2,
        comment:
            "WHC Lab is a Biotechnology business focused on the brewing/distilling industry, established in 2017. The laboratory boasts best in class laboratory equipment, experts in the brewing and distilling industry and uses next-generation methods to grow brewing/distilling yeast and bacteria.",
    },
    {
        _id: 3,
        comment:
            "WHC Lab is a Biotechnology business focused on the brewing/distilling industry, established in 2017. The laboratory boasts best in class laboratory equipment, experts in the brewing and distilling industry and uses next-generation methods to grow brewing/distilling yeast and bacteria.",
    },
    {
        _id: 4,
        comment:
            "WHC Lab is a Biotechnology business focused on the brewing/distilling industry, established in 2017. The laboratory boasts best in class laboratory equipment, experts in the brewing and distilling industry and uses next-generation methods to grow brewing/distilling yeast and bacteria.",
    },
];
