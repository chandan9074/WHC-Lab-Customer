import React from "react";

const OutlinedButton = ({
    label,
    className,
    borderColor = "border-brand-blue-500",
    bgColor = "bg-transparent",
    textColor = "text-brand-blue-800",
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={`${borderColor} ${bgColor} ${textColor} hover:bg-brand-blue-500 duration-200 whitespace-nowrap  flex justify-center items-center px-4 py-2 md:px-6 md:py-3 border rounded-full text-sm md:text-lg font-medium ${className} `}
        >
            {label}
        </button>
    );
};

export default OutlinedButton;
