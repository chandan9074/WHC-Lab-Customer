import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const IconWithLabel = ({ align = "right", label }) => {
    return (
        <button className="py-3.5 px-6 rounded-full bg-brand-blue-500 flex items-center gap-2.5 sm:w-auto w-full justify-center">
            {align === "left" && (
                <Image
                    src={Icons.arrow_up_right_white}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
            <p className="text-white md:text-base text-sm font-semibold">
                {label}
            </p>
            {align === "right" && (
                <Image
                    src={Icons.arrow_up_right_white}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
        </button>
    );
};

export default IconWithLabel;
