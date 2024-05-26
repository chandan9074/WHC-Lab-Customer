"use client";
import ProductCard from "@/components/Card/ProductCard";
import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Icons from "../../../public/assets/Icons";

const RecentlyViewedSlideShowSection = ({ data, wishListIds }) => {
    console.log(wishListIds);
    const [selectedTab, setSelectedTab] = useState("YOU MAY ALSO LIKE");
    const [slidesPerRow, setSlidesPerRow] = useState(4);

    const carouselRef = useRef();

    const handleNextClick = (type) => {
        if (carouselRef && carouselRef.current) {
            if (type === "next") {
                carouselRef.current.next();
            } else {
                carouselRef.current.prev();
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerRow(1);
            } else if (window.innerWidth < 768) {
                setSlidesPerRow(2);
            } else if (window.innerWidth < 1029) {
                setSlidesPerRow(3);
            } else if (window.innerWidth < 1280) {
                setSlidesPerRow(3.5);
            } else if (window.innerWidth < 1568) {
                setSlidesPerRow(4);
            } else if (window.innerWidth >= 1568) {
                setSlidesPerRow(4.5);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="space-y-9 pb-[120px]">
            <div className="w-full flex justify-center gap-x-10">
                {["YOU MAY ALSO LIKE", "RECENTLY VIEWED"].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-y-2"
                        onClick={() => setSelectedTab(item)}
                    >
                        <h2 className="text-neutral-700 text-sm font-bold">
                            {item}
                        </h2>
                        {selectedTab === item && (
                            <div className="w-[50px] h-[1.5px] bg-neutral-700" />
                        )}
                    </div>
                ))}
            </div>

            {/* Large screen */}
            <div className="w-full relative">
                <Carousel
                    dots={false}
                    slidesToShow={slidesPerRow}
                    ref={carouselRef}
                    draggable={true}
                    infinite={false}
                    className="custom-carousel"
                >
                    {data?.map((item, index) => (
                        <div key={index}>
                            <div className="px-3">
                                <ProductCard
                                    data={item}
                                    wishListIds={wishListIds}
                                />
                            </div>
                        </div>
                    ))}
                    {/* {data.body.docs.map((item, index) => (
                        <div key={index}>
                            <div className="px-3">
                                <ProductCard
                                    data={item}
                                    wishListIds={wishListIds}
                                />
                            </div>
                        </div>
                    ))} */}
                </Carousel>

                <button
                    onClick={() => handleNextClick("prev")}
                    className="absolute top-1/2 left-5 p-1 bg-transparent transform -translate-y-1/2 rounded-full bg-opacity-80 bg-white"
                >
                    <Image
                        src={Icons.right_arrow_gray}
                        alt="value"
                        className="w-8 h-8 rotate-180"
                    />
                </button>
                <button
                    onClick={() => handleNextClick("next")}
                    className="absolute top-1/2 right-5 p-1 bg-transparent transform -translate-y-1/2  rounded-full bg-opacity-80 bg-white"
                >
                    <Image
                        src={Icons.right_arrow_gray}
                        alt="value"
                        className="w-8 h-8"
                    />
                </button>
            </div>
        </div>
    );
};

export default RecentlyViewedSlideShowSection;
