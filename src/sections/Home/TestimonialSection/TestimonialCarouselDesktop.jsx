"use client";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Icons from "../../../../public/assets/Icons";

const TestimonialCarouselDesktop = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slider = useRef(null);

    const onChange = (current) => {
        console.log(current);
        setCurrentSlide(current + 1);
        console.log(currentSlide);
    };
    return (
        <div className="w-full hidden md:block">
            <Carousel ref={slider} afterChange={onChange} dots={false}>
                {data.map((item) => (
                    <div className="flex items-center py-12">
                        <div className="flex gap-x-6 justify-center">
                            <div className="flex items-center justify-center w-[383px]">
                                <div className="flex gap-x-5">
                                    <Image
                                        alt="avatar"
                                        width={1000}
                                        height={1000}
                                        src={item.profilePic}
                                        className="w-[68px] h-[68px] rounded-full"
                                    />
                                    <div className="space-y-1.5">
                                        <h5 className="text-brand-blue-800 text-2xl font-medium leading-[30px]">
                                            {item.name}
                                        </h5>
                                        <p className="text-[#151924] text-opacity-30 text-base leading-5">
                                            {item.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 w-[791px]">
                                <Rate
                                    disabled
                                    defaultValue={item.rating}
                                    style={{ color: "#F5BB0C", fontSize: 32 }}
                                />
                                <p className="text-brand-blue-800 text-2xl leading-9">
                                    {item.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="flex">
                <div className="md:w-[403px]" />
                <div className="flex justify-between items-end md:w-[791px]">
                    <div className="space-y-8">
                        <div className="flex gap-x-5">
                            <button
                                onClick={() => slider.current.prev()}
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
                                    className="w-8 h-8 rotate-180"
                                />
                            </button>
                            <button
                                onClick={() => slider.current.next()}
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
                                    className="w-8 h-8"
                                />
                            </button>
                        </div>

                        <div className="flex gap-x-8 items-center">
                            <div>
                                <h3 className="flex">
                                    <p className="text-[#151924] text-2xl leading-[25px]">
                                        0<span>{currentSlide}</span>
                                    </p>
                                    <p className="text-[#151924] text-opacity-30 text-2xl leading-[25px]">
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

                    <Image
                        width={1000}
                        height={1000}
                        alt="quotation"
                        src={Icons.doubleQuotation}
                        className="w-[92px] h-[67px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarouselDesktop;
