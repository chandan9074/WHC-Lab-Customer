"use client";
import Image from "next/image";
import React, { useState } from "react";
import Images from "../../../public/assets/Images";
import Icons from "../../../public/assets/Icons";
import MegaMenu from "../common/MegaMenu";

const Primary = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container mx-auto px-6 sm:px-3 lg:py-6 sm:py-5 py-4 flex items-center justify-between">
            <Image
                src={Images.logo}
                alt="Logo"
                width={1000}
                height={1000}
                className="lg:w-[98px] sm:w-[80px] w-[73px] lg:h-8 sm:h-7 h-6"
            />
            <div className="flex items-center gap-6">
                <Image
                    src={Icons.search_blue}
                    alt="search"
                    width={1000}
                    height={1000}
                    className="w-[30px] h-[30px]"
                />
                <div className="flex items-center gap-2">
                    <h5 className="text-brand-blue-500 text-lg font-semibold">
                        Menu
                    </h5>
                    <button onClick={() => setOpen(true)}>
                        <Image
                            src={Icons.menu}
                            alt="search"
                            width={1000}
                            height={1000}
                            className="w-9 h-9"
                        />
                    </button>
                </div>
            </div>
            {open && <MegaMenu setOpen={setOpen} open={open} />}
        </div>
    );
};

export default Primary;
