import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Link from "next/link";
import { megaMenuMainLinks } from "@/libs/navLinks";
import { socialLinks } from "@/libs/common";
import megamenuVideo from "../../../public/megamenu-video.mp4";

const MegaMenu = ({ setOpen, open }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-red-500 z-50 overflow-auto">
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
                        <button onClick={() => setOpen(!open)}>
                            <Image
                                src={Icons.cross}
                                alt="close-icon"
                                width={1000}
                                height={1000}
                                className="w-9 h-9"
                            />
                        </button>
                    </div>
                    <div className="grid grid-cols-12 mt-12 mx-4 gap-6">
                        <div className="col-span-12 lg:col-span-8 flex flex-col gap-[13px]">
                            {megaMenuMainLinks.map((item) => (
                                <Link
                                    href={item.path}
                                    key={item._id}
                                    className="text-white hover:text-brand-blue-500 hover:ml-1 text-[32px] md:text-[90px] font-extrabold leading-10 md:leading-[110px] duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-4 lg:mx-auto">
                            <LinkHeader title={"Brewers & Retailers"} />
                            <div className="mt-4 space-y-2 mb-9 flex flex-col">
                                <NavLink title={"LOG IN"} />
                                <NavLink title={"REGISTER NEW Account"} />
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
