import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const IconWithLabel = ({
    align = "right",
    label,
    textColor = "text-white",
    bgColor = "bg-brand-blue-500",
    icon = Icons.arrow_up_right_white,
    border,
}) => {
    return (
        <button
            className={`py-2 md:py-2.5 lg:py-3.5 px-4 md:px-5 lg:px-6 rounded-full ${bgColor} ${
                border && border
            } flex items-center gap-2.5 sm:w-auto w-full justify-center`}
        >
            {align === "left" && (
                <Image
                    src={icon}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
            <p className={`${textColor} md:text-base text-sm font-semibold`}>
                {label}
            </p>
            {align === "right" && (
                <Image
                    src={icon}
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
