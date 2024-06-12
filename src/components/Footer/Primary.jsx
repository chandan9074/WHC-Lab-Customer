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
            path: "/about-us",
        },
        {
            _id: 3,
            label: "Our Products",
            path: "/store",
        },
        {
            _id: 4,
            label: "Buy Online",
            path: "/store",
        },
        {
            _id: 5,
            label: "Contact Us",
            path: "/contact-us",
        },
    ];
    const socialLinks = [
        {
            _id: 1,
            label: "Facebook",
            path: "https://www.facebook.com/WHCLab/",
        },
        {
            _id: 2,
            label: "Instagram",
            path: "https://www.instagram.com/whc_lab/",
        },
        {
            _id: 3,
            label: "LinkedIn",
            path: "https://www.linkedin.com/company/the-wicklow-hops-company/?originalSubdomain=ie",
        },
        {
            _id: 4,
            label: "Twitter",
            path: "https://x.com/whclab?s=21",
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
