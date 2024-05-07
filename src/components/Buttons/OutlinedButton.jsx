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
            className={`${borderColor} ${bgColor} ${textColor} hover:bg-brand-blue-500 hover:text-white duration-200 whitespace-nowrap  flex justify-center items-center px-4 py-2 md:px-6 md:py-3 border rounded-full text-sm font-medium ${className} `}
        >
            <p className="text-sm md:text-base font-montserrat">{label}</p>
        </button>
    );
};

export default OutlinedButton;
