import React from "react";

const SectionHeader = ({ title }) => {
    return (
        <h1 className="text-brand-blue-800 font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            {title}
        </h1>
    );
};

export default SectionHeader;
