"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pioneeringGIF from "../../../../public/pioneeringGIF.gif";
import Buttons from "@/components/Buttons";
import Icons from "../../../../public/assets/Icons";
import { useRouter } from "next/navigation";
const PioneeringExcellenceContainer = () => {
    const [selectedCarousel, setSelectedCarousel] = useState(0);
    const [sectionHeight, setSectionHeight] = useState(0);
    const router = useRouter();

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
                                        <p className="text-sm md:text-lg text-white leading-4 md:leading-7 text-center w-[250px] sm:w-[350px] md:w-[550px] lg:w-[750px] xl:w-[911px] md:py-4">
                                            {item.comment}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-[46px] md:right-[19px]  hidden md:block">
                            <Buttons.IconWithLabel
                                label="Explore Our All Strains"
                                rightIcon={Icons.arrow_up_right_blue}
                                hoverIcon={Icons.arrow_up_right_white}
                                bgColor="bg-white"
                                textColor="text-brand-blue-800"
                                onClick={() =>
                                    router.push("/store?category=Brewing+Yeast")
                                }
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
            " We provide an selection of analysis services, available for all customers trying to maintain a high quality and consistent final product. Our R&D lab is home to industry-leading equipment including our Anton Paar Alcolyzer and density meter as well as QPCR for genetic analysis. Our services offer a large selection of tests including microanalysis PH, IBU, ABV, Congeners, calories, final gravity, colour (EBC) and water/gluten testing.",
    },
    {
        _id: 3,
        comment:
            "WHC Lab is proud to propagate fresh, high cell count and quality yeasts. We do so by propagating fresh for orders and integrating stringent quality control throughout our production process. Every pitch of yeast is genetically tested on our QPCR system to ensure that our pitches are free from any contaminating microorganisms and are highly viable and metabolically active.",
    },
    {
        _id: 4,
        comment:
            "At WHC Lab, we redefine excellence in the biotech realm, seamlessly blending cutting-edge technology, expert craftsmanship, and innovative methods to revolutionize the brewing and distilling industry. Unleash the power of unparalleled quality and precision with WHC Lab – your trusted partner in brewing and distilling excellence.",
    },
];
