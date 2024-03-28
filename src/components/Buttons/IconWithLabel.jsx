import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const IconWithLabel = ({
    align = "right",
    label,
    className,
    bgColor = "bg-brand-blue-500",
    textColor = "text-white",
    leftIcon = Icons.lock,
    rightIcon = Icons.arrow_up_right_white,
    bgHoverColor = "hover:bg-brand-blue-800",
    textHoverColor = "text-",
    width = "sm:w-auto w-full",
    border,
}) => {
    return (
        <button
            className={`${className} group py-2 md:py-2.5 lg:py-3.5 px-4 md:px-5 lg:px-6 rounded-full ${bgColor} ${bgHoverColor} ${
                border && border
            } ${width} duration-200 flex items-center gap-2.5 justify-center`}
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
            <p
                className={`${textColor} ${textHoverColor} duration-200 md:text-base text-sm font-semibold`}
            >
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

export default IconWithLabel;
