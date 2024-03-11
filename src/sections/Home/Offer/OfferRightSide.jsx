import React from "react";
import OfferCard from "./OfferCard";
import { offerData } from "@/libs/common";
import Buttons from "@/components/Buttons";

const OfferRightSide = () => {
    return (
        <div className="lg:col-span-7 col-span-12 ">
            <div className="lg:space-y-20 md:space-y-16 sm:space-y-10 space-y-12">
                {offerData.map((item) => (
                    <OfferCard key={item._id} data={item} />
                ))}
            </div>
            <div className="lg:hidden block mt-9">
                <Buttons.IconWithLabel label={"EXPLORE OUR ALL STRAINS "} />
            </div>
        </div>
    );
};

export default OfferRightSide;
