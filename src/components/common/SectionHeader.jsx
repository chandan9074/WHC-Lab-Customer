import React from "react";

const SectionHeader = ({ title, color = "text-brand-blue-800" }) => {
    return (
        <h1
            className={`${color} font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl`}
        >
            {title}
        </h1>
    );
};

export default SectionHeader;
