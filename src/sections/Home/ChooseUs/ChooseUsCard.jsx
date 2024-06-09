import React from "react";

const ChooseUsCard = ({ data, index }) => {
    return (
        <div className="lg:py-6 lg:px-9 md:p-6 sm:p-5 p-4 border border-neutral-40 rounded-3xl bg-white backdrop-blur-[18px] bg-opacity-5">
            <h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium text-brand-green-500 lg:leading-[57px] md:leading-9 sm:leading-8 leading-7">
                {index + 1 > 9 ? index + 1 : "0" + (index + 1)}
            </h4>
            <div className="md:mt-[18px] mt-4 w-full h-0.5 bg-neutral-50" />
            <h3 className="text-brand-blue-800 lg:text-[32px] md:text-2xl sm:text-lg text-base font-medium lg:leading-[38px] md:leading-7 sm:leading-6 leading-[19px] md:mt-6 mt-4">
                {data?.title}
            </h3>
            <p className="md:mt-5 mt-3 text-brand-blue-800-80% lg:text-xl md:text-lg text-base md:leading-8 leading-[22px] font-light">
                {data?.description}
            </p>
        </div>
    );
};

export default ChooseUsCard;
