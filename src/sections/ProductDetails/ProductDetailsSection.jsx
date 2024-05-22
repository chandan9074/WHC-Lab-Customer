"use client";
import React, { useState } from "react";
import ReviewsAndRatings from "./ReviewsAndRatings";
import { allRatingReviewers } from "@/libs/reviewData";
// import DOMPurify from "dompurify";

const ProductDetailsSection = ({ data }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-y-6 mb-20 rounded-lg p-6 bg-[#F3F5F6]">
                <h3 className="text-brand-blue-800 text-2xl font-semibold leading-9">
                    Product Description
                </h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: data?.description,
                    }}
                />
            </div>

            <div className="flex w-full border-b border-neutral-40">
                {["Product details", "Reviews & ratings"].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        className={`w-[180px] h-10 flex justify-center items-center  font-medium border-b-[3px] duration-300 ${
                            selectedTab === index
                                ? "border-brand-blue-500 font-semibold text-brand-blue-500"
                                : "text-neutral-200 border-transparent"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="w-full animate-fadeIn pt-6">
                {selectedTab === 0 ? (
                    <ProductDetails />
                ) : (
                    <ReviewsAndRatings
                        data={data?.review?.list || []}
                        rating={data?.review?.summary}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductDetailsSection;

const ProductDetails = () => {
    const details = [
        "Abstract print",
        "Floral print",
        "Rounded neckline",
        "Long puff sleeves",
        "Ruched front",
        "Tiered hem",
        "Midi length",
        "Button and tie-back fastening",
        "Lightweight woven fabric",
        "Fit-and-flare design",
        "Model is 5'8/173cm and wears UK 10/EU 38/US 6",
    ];

    const guides = ["100% viscose", "Machine washable"];

    return (
        <>
            <div className="px-12 pt-6 flex flex-col gap-y-3">
                <h3 className="text-neutral-700 text-sm font-medium">
                    Details
                </h3>
                <div className="space-y-2">
                    {details.map((item, index) => (
                        <li
                            key={index}
                            className="text-neutral-600 text-sm font-medium"
                        >
                            {item}
                        </li>
                    ))}
                </div>
            </div>

            <div className="px-12 pt-6 flex flex-col gap-y-3">
                <h3 className="text-neutral-700 text-sm font-medium">
                    Care guide
                </h3>
                <div className="space-y-2">
                    {guides.map((item, index) => (
                        <li
                            key={index}
                            className="text-neutral-600 text-sm font-medium"
                        >
                            {item}
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
};
