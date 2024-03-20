"use client";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import React from "react";

const TestimonialCarouselDesktop = ({ data }) => {
    const contentStyle = {
        margin: 0,
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className="w-full">
            <Carousel afterChange={onChange}>
                {data.map((item) => (
                    <div className="flex items-center py-12">
                        <div className="flex gap-x-6">
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
        </div>
    );
};

export default TestimonialCarouselDesktop;
