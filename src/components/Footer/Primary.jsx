"use client";
import React from "react";

import AnimatedFooter from "@/sections/Footer/AnimatedFooter";
import FooterWithoutAnimation from "@/sections/Footer/FooterWithoutAnimation";

const Primary = () => {
    const navLinks = [
        {
            _id: 1,
            label: "Home",
            path: "/",
        },
        {
            _id: 2,
            label: "About Us",
            path: "/",
        },
        {
            _id: 3,
            label: "Our Products",
            path: "/",
        },
        {
            _id: 4,
            label: "Buy Online",
            path: "/",
        },
        {
            _id: 5,
            label: "Contact Us",
            path: "/",
        },
    ];
    const socialLinks = [
        {
            _id: 1,
            label: "Facebook",
            path: "/",
        },
        {
            _id: 2,
            label: "Instagram",
            path: "/",
        },
        {
            _id: 3,
            label: "LinkedIn",
            path: "/",
        },
        {
            _id: 4,
            label: "Twitter",
            path: "/",
        },
    ];

    // const footerRef = useRef(null);

    return (
        <div className="bg-[#111111]">
            <div className="flex flex-col gap-y-12 container mx-auto px-6 md:px-0 pt-20">
                <div className="hidden md:block">
                    <AnimatedFooter
                        navLinks={navLinks}
                        socialLinks={socialLinks}
                    />
                </div>
                <div className="block md:hidden">
                    <FooterWithoutAnimation
                        navLinks={navLinks}
                        socialLinks={socialLinks}
                    />
                </div>
            </div>
        </div>
    );
};

export default Primary;
