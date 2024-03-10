"use client";
import Image from "next/image";
import React, { useState } from "react";
import Icons from "../../../public/assets/Icons";
import Link from "next/link";
import { megaMenuMainLinks } from "@/libs/navLinks";
import { socialLinks } from "@/libs/common";
import megamenuVideo from "../../../public/megamenu-video.mp4";
import { motion } from "framer-motion";
import Buttons from "../Buttons";

const MegaMenu = ({ setOpen, open }) => {
    const [showResourcesButtons, setShowResourcesButtons] = useState(false);

    return (
        <div className="">
            <video
                src={megamenuVideo}
                autoPlay
                muted
                loop
                className="fixed top-0 left-0 w-full h-screen object-cover"
            />
            <div className="w-full flex justify-center">
                <div className="container mx-auto absolute top-0 py-9">
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <Image
                                src={Icons.cross}
                                alt="close-icon"
                                width={1000}
                                height={1000}
                                className="w-9 h-9"
                            />
                        </button>
                    </div>
                    <div className="grid grid-cols-12 lg:mt-12 md:mt-8 sm:mt-6 mt-4 mx-4 gap-6">
                        <div className="col-span-12 lg:col-span-8 flex flex-col gap-[13px]">
                            {megaMenuMainLinks.map((item) => (
                                // <Link
                                //     href={item.path}
                                //     key={item._id}
                                //     className="text-white hover:text-brand-blue-500 hover:ml-1 text-[32px] sm:text-5xl md:text-6xl lg:text-[90px] font-extrabold leading-10 sm:leading-[60px] md:leading-[80px] lg:leading-[110px] duration-300"
                                // >
                                //     {item.name}
                                // </Link>
                                // <motion.div
                                //     key={item._id}
                                //     className="relative"
                                //     onHoverStart={() => {
                                //         if (item.name === "RESOURCES") {
                                //             setShowResourcesButtons(true);
                                //         }
                                //     }}
                                //     onHoverEnd={() => {
                                //         if (item.name === "RESOURCES") {
                                //             setShowResourcesButtons(false);
                                //         }
                                //     }}
                                // >
                                <div
                                    key={item._id}
                                    className=""
                                    onMouseOver={() =>
                                        item.name === "RESOURCES" &&
                                        setShowResourcesButtons(true)
                                    }
                                    onMouseLeave={() =>
                                        item.name === "RESOURCES" &&
                                        setShowResourcesButtons(false)
                                    }
                                >
                                    <Link
                                        href={item.path}
                                        className="text-white hover:text-brand-blue-500 hover:ml-1 text-[32px] sm:text-5xl md:text-6xl lg:text-[90px] font-extrabold leading-10 sm:leading-[60px] md:leading-[80px] lg:leading-[110px] duration-500"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.name === "RESOURCES" &&
                                        showResourcesButtons && (
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay: 0.1,
                                                        duration: 0.5,
                                                    }}
                                                    className=" mt-2"
                                                >
                                                    <Buttons.OutlinedButton
                                                        label="Brewing Yeast"
                                                        borderColor="border-white"
                                                        textColor="text-white"
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay: 0.2,
                                                        duration: 0.5,
                                                    }}
                                                    className="mt-2"
                                                >
                                                    <Buttons.OutlinedButton
                                                        label="Distilling Yeast"
                                                        borderColor="border-white"
                                                        textColor="text-white"
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 30,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay: 0.3,
                                                        duration: 0.5,
                                                    }}
                                                    className="mt-2"
                                                >
                                                    <Buttons.OutlinedButton
                                                        label="Lab Analysis"
                                                        borderColor="border-white"
                                                        textColor="text-white"
                                                    />
                                                </motion.div>
                                            </div>
                                        )}
                                </div>
                                // </motion.div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-4 lg:mx-auto">
                            <LinkHeader title={"Brewers & Retailers"} />
                            <div className="mt-4 space-y-2 mb-9 flex flex-col">
                                <NavLink title={"LOG IN"} />
                                <NavLink title={"REGISTER NEW ACCOUNT"} />
                            </div>
                            <LinkHeader title={"Our Products"} />
                            <div className="mt-4 space-y-2 mb-9 flex flex-col">
                                <NavLink title={"BUY ONLINE"} />
                                <NavLink title={"OUR DISTRIBUTORS"} />
                            </div>
                            <div className="space-y-2 mb-9 flex flex-col">
                                <NavLink title={"FAQ"} />
                                <NavLink title={"BLOG"} />
                                <NavLink title={"CONTACT US"} />
                            </div>
                            <NavLink title={"WHC LAB"} />
                            <p className="mt-4 text-base text-white font-medium leading-7 w-[336px]">
                                Revolutionizing Longevity and Health through
                                Personalized Medicine and Advanced Science.
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                {socialLinks.map((item) => (
                                    <Link key={item._id} href={"/"}>
                                        <Image
                                            src={item.icon}
                                            alt="Logo"
                                            width={1000}
                                            height={1000}
                                            className="w-6 h-6"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;

const LinkHeader = ({ title }) => {
    return <h6 className="text-white text-base font-semibold">{title}</h6>;
};

const NavLink = ({ title }) => {
    return (
        <Link
            href={"/"}
            className="text-white text-xl font-bold hover:text-brand-blue-500 hover:ml-1 duration-300"
        >
            {title}
        </Link>
    );
};
