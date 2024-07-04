"use client";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Icons from "../../../../public/assets/Icons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";

const TestimonialCarouselDesktop = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slider = useRef(null);

    const onChange = (current) => {
        setCurrentSlide(current + 1);
    };
    return (
        <div className="w-full hidden lg:block">
            <Carousel ref={slider} afterChange={onChange} dots={false}>
                {data.map((item, index) => (
                    <div key={index} className="pt-12 pb-8">
                        <div key={index} className="grid grid-cols-12">
                            <div className="col-span-5 xl:col-span-4">
                                <div className="flex gap-x-5">
                                    <Image
                                        alt="avatar"
                                        width={1000}
                                        height={1000}
                                        src={`${GET_IMAGE_RENDER}?key=${item.client.image}`}
                                        className="w-[68px] h-[68px] rounded-full"
                                    />
                                    <div className="space-y-1.5">
                                        <h5 className="text-brand-blue-800 text-2xl font-medium leading-[30px]">
                                            {item.client.name}
                                        </h5>
                                        <p className="text-[#151924] text-opacity-30 text-base leading-5">
                                            {item.client.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 col-span-7 xl:col-span-8">
                                <Rate
                                    disabled
                                    defaultValue={item.rating}
                                    style={{ color: "#F5BB0C", fontSize: 32 }}
                                />
                                <p className="text-brand-blue-800 text-2xl leading-9">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="grid grid-cols-12">
                <div className="col-span-5 xl:col-span-4" />
                <div className="flex justify-between items-end col-span-7 xl:col-span-8">
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
                                disabled={currentSlide > data.length - 1}
                                className={`w-14 h-14 rounded-full border border-brand-green-500 flex justify-center items-center ${
                                    currentSlide > data.length - 1
                                        ? "opacity-20"
                                        : ""
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
                                            width: `${
                                                (80 / data.length) *
                                                currentSlide
                                            }px`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="w-[132px] h-1.5 bg-[#15192433] bg-opacity-20 relative overflow-hidden rounded-full">
                                <div
                                    className={`h-1.5 bg-black absolute top-0 left-0 z-10  rounded-full duration-300`}
                                    style={{
                                        width: `${
                                            (132 / data.length) * currentSlide
                                        }px`,
                                    }}
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
