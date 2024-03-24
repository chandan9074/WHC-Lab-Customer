import { Carousel } from "antd";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";

const Secondary = () => {
    return (
        <div className="lg:block hidden container mx-auto py-[120px] bg-white">
            <div className="flex items-center justify-between">
                <h2 className="lg:text-3xl xl:text-4xl leading-[50px] text-[#6F7284] font-bold flex items-center text-nowrap">
                    Ready to{" "}
                    <span className="ml-2">
                        <Carousel
                            dots={false}
                            vertical
                            autoplay
                            autoplaySpeed={2500}
                        >
                            <span className="lg:text-3xl xl:text-4xl font-bold leading-[50px] bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
                                Transform Your business?
                            </span>
                            <span className="lg:text-3xl xl:text-4xl font-bold leading-[50px] bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-transparent bg-clip-text">
                                Learn About WHC Lab?
                            </span>
                            <span className="lg:text-3xl xl:text-4xl font-bold leading-[50px] bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] text-transparent bg-clip-text">
                                Share Your Problems?
                            </span>
                        </Carousel>
                    </span>
                </h2>

                <div className="flex items-center gap-x-9">
                    <h2 className="lg:text-3xl xl:text-4xl leading-[50px] text-[#6F7284] font-bold underline text-nowrap">
                        Let's Talk
                    </h2>

                    <button className="group flex items-center gap-x-3 px-[18px] py-[10.5px] bg-[#1B1B1B] rounded-[37.5px]  duration-300 relative">
                        <p className="uppercase text-lg font-semibold text-[#D9D9D9] group-hover:text-white leading-[22px] mr-0 group-hover:mr-1 duration-300 text-nowrap">
                            CONTACT US NOW
                        </p>

                        <div className="text-xs font-bold bg-[#D9D9D9] duration-300 group-hover:hidden block w-1.5 h-1.5 rounded-full" />

                        <Image
                            src={Icons.arrow_up_right_white}
                            width={1000}
                            height={1000}
                            alt="arrow-up-right"
                            className="w-6 h-6 hidden group-hover:block animate-fadeIn mr-[18px]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Secondary;
