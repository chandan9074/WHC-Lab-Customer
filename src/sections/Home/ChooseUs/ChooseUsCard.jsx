import React from "react";

const ChooseUsCard = ({ data }) => {
    return (
        <div className="py-6 px-9 border border-neutral-40 rounded-3xl bg-white backdrop-blur-[18px] bg-opacity-5">
            <h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium text-brand-green-500 leading-[57px]">
                {data._id}
            </h4>
            <div className="mt-[18px] w-full h-0.5 bg-neutral-50" />
            <h3 className="text-brand-blue-800 lg:text-[32px] md:text-2xl sm:text-lg text-base font-medium lg:leading-[38px] md:leading-7 sm:leading-6 leading-[19px] mt-6">
                {data.name}
            </h3>
            <p className="mt-5 text-brand-blue-800-80% lg:text-xl md:text-lg text-base md:leading-8 leading-[22px] font-light">
                {data.description}
            </p>
        </div>
    );
};

export default ChooseUsCard;
