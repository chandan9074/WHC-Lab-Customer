"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Images from "../../../../public/assets/Images";
import SectionHeader from "@/components/common/SectionHeader";
import Buttons from "@/components/Buttons";
import NavHeader from "./NavHeader";
import ProductCard from "./ProductCard";
import { Carousel } from "antd";
import { generateLeftMargin } from "@/helpers/utils";

const OurProductsContainer = () => {
    const [activeTab, setActiveTab] = useState("New Products");
    const [leftMargin, setLeftMargin] = useState();
    const [slides, setSlides] = useState(0);

    useEffect(() => {
        // console.log(window.innerWidth);
        // let x = 0;
        // let value = 0;
        // if (window.innerWidth >= 1568) {
        //     x = (window.innerWidth - 1568) / 2;
        //     value = window.innerWidth - (1568 + x);
        // } else if (window.innerWidth >= 1280) {
        // } else if (window.innerWidth >= 1029) {
        // } else if (window.innerWidth >= 768) {
        // } else if (window.innerWidth >= 640) {
        // }
        const value = generateLeftMargin();
        console.log(value);
        setLeftMargin(value.margin);
        setSlides(value.slides);
    }, []);
    return (
        <div className="bg-our-product bg-cover">
            <div
                style={{ marginLeft: `${leftMargin}px` }}
                className={`  pl-6 sm:pl-3 xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-6`}
            >
                <SectionHeader
                    title={"VARIOUS SERVICES WE OFFER"}
                    color="text-white"
                />
                {/* <NavHeader activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                <div className="h-[1px] w-full bg-stroke-new mt-6" />
                <div className="mt-9 cursor-grab">
                    <Carousel
                        slidesToShow={slides}
                        initialSlide={slides === 1 ? 1.2 : slides}
                        dots={false}
                        draggable
                        centerMode={slides === 1 ? false : true}
                    >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <ProductCard key={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default OurProductsContainer;
