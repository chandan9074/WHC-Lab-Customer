"use client";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Images from "../../../../public/assets/Images";
import ChooseUsLeftSide from "./ChooseUsLeftSide";
import ChooseUsRightSide from "./ChooseUsRightSide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUsContainer = ({ whyUsLeftContents, whyUsRightContents }) => {
    const sectionOneRef = useRef(null);
    const textOneRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textOne = textOneRef.current;

        const tweenOne = gsap.to(textOne, {
            y: 600 - textOne.clientHeight - 32,
            scrollTrigger: {
                trigger: sectionOneRef.current,
                pin: sectionOneRef.current,
                pinType: "fixed",
                // pinnedContainer: sectionOneRef.current,
                scrub: true,
                // start: "middle middle",
                // end: "+=200px",
                markers: false,
            },
        });
        // Cleanup
        return () => {
            tweenOne.kill();
            // tweenTwo.kill();
        };
    }, []);

    return (
        <>
            <div
                className="w-full h-screen px-4 relative bg-white overflow-hidden hidden xl:block"
                ref={sectionOneRef}
            >
                <div className="container mx-auto h-full flex flex-col justify-center items-start xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-6">
                    <SectionHeader title={"Why Choose Us"} />
                    <div className="h-[700px] overflow-hidden grid grid-cols-12 mt-12">
                        <div className="col-span-5">
                            <p className="md:text-base text-sm font-light w-full sm:w-[486px] text-[#061628] text-opacity-80 md:mb-9 mb-7">
                                {whyUsLeftContents[0]?.leftSection}
                            </p>
                            <Image
                                src={Images.offer_image}
                                width={1000}
                                height={1000}
                                alt="offer_image"
                                className="2xl:w-[465px] xl:w-[400px] lg:w-[480px] 2xl:h-[427px] xl:h-[370px] lg:h-[420px]  absolute left-28 top-[23rem] z-10 lg:block hidden"
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
                                className="2xl:w-[300px] xl:w-[200px] lg:w-[300px] 2xl:h-[270px] xl:h-[150px] lg:h-[270px] rotate-[54deg] absolute 2xl:right-[38rem] xl:right-96 top-[28rem] z-10 lg:block hidden"
                            />
                        </div>
                        <div className="col-span-7 text-white flex justify-center relative z-30">
                            <div className="">
                                <div
                                    ref={textOneRef}
                                    className="flex flex-col gap-6"
                                >
                                    {whyUsRightContents?.map((item, index) => (
                                        <ChooseUsCard
                                            index={index}
                                            key={item._id}
                                            data={item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 sm:px-3 xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-6 block xl:hidden">
                <h1 className="text-[#061628] font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                    Why Choose Us
                </h1>
                <div className="lg:mt-10 md:mt-9 sm:mt-7 mt-6">
                    <ChooseUsLeftSide whyUsLeftContents={whyUsLeftContents} />
                    <ChooseUsRightSide
                        // refId={textOneRef}
                        whyUsRightContents={whyUsRightContents}
                    />
                </div>
            </div>
        </>
    );
};

export default ChooseUsContainer;
