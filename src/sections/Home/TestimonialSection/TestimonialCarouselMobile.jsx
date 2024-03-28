"use client";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Icons from "../../../../public/assets/Icons";

const TestimonialCarouselMobile = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const onChange = (current) => {
        console.log(current);
        setCurrentSlide(current + 1);
        console.log(currentSlide);
    };
    return (
        <div className="block md:hidden">
            <Carousel ref={slider1} afterChange={onChange} dots={false}>
                {data.map((item, index) => (
                    <div key={index} className="pt-6 flex flex-col gap-y-4">
                        <Rate
                            disabled
                            defaultValue={item.rating}
                            style={{ color: "#F5BB0C", fontSize: 20 }}
                        />
                        <p className="text-brand-blue-800 font-light text-sm leading-[21px]">
                            {item.comment}
                        </p>
                    </div>
                ))}
            </Carousel>

            <div className="flex justify-between items-center pt-9">
                <Carousel
                    ref={slider2}
                    afterChange={onChange}
                    dots={false}
                    vertical
                    // effect="fade"
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-[383px]"
                        >
                            <div className="flex gap-x-5">
                                <Image
                                    alt="avatar"
                                    width={1000}
                                    height={1000}
                                    src={item.profilePic}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="space-y-1.5">
                                    <h5 className="text-brand-blue-800 text-base font-medium leading-5">
                                        {item.name}
                                    </h5>
                                    <p className="text-[#151924] text-opacity-30 text-sm leading-[17px]">
                                        {item.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <div className="flex gap-x-5">
                    <button
                        onClick={() => {
                            slider1.current.prev();
                            slider2.current.prev();
                        }}
                        className={`w-14 h-14 rounded-full border border-brand-green-500 flex justify-center items-center ${
                            currentSlide === 1 ? "opacity-20" : ""
                        }`}
                        disabled={currentSlide < 2}
                    >
                        <Image
                            alt="nav-prev"
                            src={Icons.arrowRightGreen}
                            width={1000}
                            height={1000}
                            className="w-9 h-9 rotate-180"
                        />
                    </button>
                    <button
                        onClick={() => {
                            slider1.current.next();
                            slider2.current.next();
                        }}
                        disabled={currentSlide > 3}
                        className={`w-14 h-14 rounded-full border border-brand-green-500 flex justify-center items-center ${
                            currentSlide > 3 ? "opacity-20" : ""
                        }`}
                    >
                        <Image
                            alt="nav-next"
                            src={Icons.arrowRightGreen}
                            width={1000}
                            height={1000}
                            className="w-9 h-9"
                        />
                    </button>
                </div>
            </div>

            <div className="flex gap-x-8 justify-between items-center pt-12">
                <div>
                    <h3 className="flex">
                        <p className="text-[#151924] text-base leading-[25px]">
                            0<span>{currentSlide}</span>
                        </p>
                        <p className="text-[#151924] text-opacity-30 text-base leading-[25px]">
                            --0{data.length}
                        </p>
                    </h3>
                    <div className="w-[80px] h-[2px] bg-[#15192433] bg-opacity-20 relative overflow-hidden">
                        <div
                            className={`h-[2px] bg-black absolute top-0 left-0 z-10 duration-300`}
                            style={{
                                width: `${20 * currentSlide}px`,
                            }}
                        />
                    </div>
                </div>

                <div className="w-[132px] h-1.5 bg-[#15192433] bg-opacity-20 relative overflow-hidden rounded-full">
                    <div
                        className={`h-1.5 bg-black absolute top-0 left-0 z-10  rounded-full duration-300`}
                        style={{ width: `${33 * currentSlide}px` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarouselMobile;
