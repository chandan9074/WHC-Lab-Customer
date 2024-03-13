import React from "react";

const OutlinedButton = ({
    label,
    className,
    borderColor = "border-brand-blue-800",
    bgColor = "bg-transparent",
    textColor = "text-brand-blue-800",
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={`${className} ${borderColor} ${bgColor} ${textColor} whitespace-nowrap duration-300 flex justify-center items-center px-[13px] py-[6.5px] md:px-4 md:py-2 border rounded-full text-sm md:text-lg font-medium`}
        >
            {label}
        </button>
    );
};

export default OutlinedButton;
