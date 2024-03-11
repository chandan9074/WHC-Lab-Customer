import React from "react";

const OutlinedButton = ({
    label,
    className,
    borderColor = "border-brand-blue-800",
    bgColor = "bg-transparent",
    textColor = "text-brand-blue-800",
}) => {
    return (
        <button
            className={`${className} ${borderColor} ${bgColor} ${textColor} flex justify-center items-center px-[13px] py-[6.5px] md:px-4 md:py-2 border rounded-[20px] text-sm md:text-lg font-medium`}
        >
            {label}
        </button>
    );
};

export default OutlinedButton;
