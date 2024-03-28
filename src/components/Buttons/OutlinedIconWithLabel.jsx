import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const OutlinedIconWithLabel = ({
    align = "right",
    leftIcon = Icons.arrow_up_right_blue,
    rightIcon = Icons.arrow_up_right_blue,
    alt,
    label,
    width = "sm:w-auto w-full",
}) => {
    return (
        <button
            className={`py-3.5 px-6 rounded-full bg-transparent flex items-center gap-2.5 justify-center border border-brand-blue-500 ${width}`}
        >
            {align === "left" && (
                <Image
                    src={leftIcon}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
            <p className="text-brand-blue-500 md:text-base text-sm font-semibold">
                {label}
            </p>
            {align === "right" && (
                <Image
                    src={rightIcon}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
        </button>
    );
};

export default OutlinedIconWithLabel;
