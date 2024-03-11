import React from "react";

const OfferCard = ({ data }) => {
    return (
        <div className="border-l-2 border-brand-green-200 pl-6">
            <div className="flex items-start lg:gap-9 md:gap-7 sm:gap-6 gap-4">
                <div className="">
                    <h3 className="text-brand-blue-800 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium lg:leading-[50px] md:leading-10 sm:leading-8 leading-7">
                        {data.name}
                    </h3>
                    <p className="mt-4 text-brand-blue-800-80% lg:text-xl md:text-lg text-base md:leading-8 leading-[25px]">
                        {data.description}
                    </p>
                </div>
                <h4 className="lg:text-[56px] md:text-4xl sm:text-2xl text-xl text-brand-blue-800 text-opacity-25 leading-[67px]">
                    {data._id}
                </h4>
            </div>
        </div>
    );
};

export default OfferCard;
