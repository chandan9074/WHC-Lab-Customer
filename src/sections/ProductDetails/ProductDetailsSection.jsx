"use client";
import React, { useState } from "react";
import ReviewsAndRatings from "./ReviewsAndRatings";
import TehcnicalSpac from "./TehcnicalSpac";
import Documentation from "./Documentation";

const ProductDetailsSection = ({ data }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const RenderComponent = () => {
        switch (selectedTab) {
            case 0:
                return <ProductDetails data={data} />;
            case 1:
                return <TehcnicalSpac data={data} />;
            case 2:
                return <Documentation data={data} />;
            case 3:
                return (
                    <ReviewsAndRatings
                        data={data?.review?.list || []}
                        rating={data?.review?.summary}
                    />
                );
            default:
                return <div>No Component Found</div>;
        }
    };

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

            <div className="flex w-full border-b border-neutral-40 gap-4 sm:gap-0 sm:min-w-64 md:w-full overflow-x-auto">
                {[
                    "Product Description",
                    "Technical Specification",
                    "Documentation",
                    "Reviews & ratings",
                ].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        className={`w-[180px] h-10 flex justify-center items-center gap-2 font-medium border-b-[3px] duration-300 whitespace-nowrap ${
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
                {/* {selectedTab === 0 ? (
                    <ProductDetails />
                ) : (
                    <ReviewsAndRatings
                        data={data?.review?.list || []}
                        rating={data?.review?.summary}
                    />
                )} */}
                {RenderComponent()}
            </div>
        </div>
    );
};

export default ProductDetailsSection;

const ProductDetails = ({ data }) => {
    return (
        <>
            <div className="pt-5 flex flex-col gap-y-3">
                <h3 className="text-neutral-700 text-sm font-medium">
                    Details
                </h3>
                <div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data?.description,
                        }}
                    />
                </div>
            </div>
        </>
    );
};
