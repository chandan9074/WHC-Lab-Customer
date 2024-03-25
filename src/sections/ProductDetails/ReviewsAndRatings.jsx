"use client";
import { allRatingReviewers } from "@/libs/reviewData";
import { Rate } from "antd";
import Image from "next/image";
import React, { useState } from "react";
// import Images from "../../../public/assets/images";
// import Icons from "../../../public/assets/Icons";
import Link from "next/link";
import { SELLER_INFORMATION_PATH } from "@/helpers/slug";
import Images from "../../../public/assets/Images";
import Icons from "../../../public/assets/Icons";

const ReviewsAndRatings = ({ data }) => {
    const ratings = [
        {
            id: 1,
            rating: 5,
            reviewer: 561,
        },
        {
            id: 2,
            rating: 4,
            reviewer: 70,
        },
        {
            id: 3,
            rating: 3,
            reviewer: 211,
        },
        {
            id: 4,
            rating: 2,
            reviewer: 12,
        },
        {
            id: 5,
            rating: 1,
            reviewer: 20,
        },
    ];

    // Calculate the total number of reviewers
    const totalReviewers = ratings.reduce(
        (acc, curr) => acc + curr.reviewer,
        0
    );

    // Calculate the sum of (Rating * Number of Reviewers for that Rating)
    const sumOfWeightedRatings = ratings.reduce(
        (acc, curr) => acc + curr.rating * curr.reviewer,
        0
    );

    // Calculate the average rating value
    const averageRating = (sumOfWeightedRatings / totalReviewers).toFixed(1);

    // Calculate the divWidth for each item in ratings
    const ratingsWithDivWidth = ratings.map((item) => ({
        ...item,
        divWidth: (item.reviewer / totalReviewers) * 100,
    }));

    return (
        <div className="flex flex-col lg:flex-row w-full justify-between gap-x-6">
            <div className="order-2 lg:order-1">
                <LeftSideContent ratings={ratings} data={data} />
            </div>
            <div className="order-1 lg:order-2">
                <RightSidecontent
                    averageRating={averageRating}
                    ratings={ratings}
                    totalReviewers={totalReviewers}
                    ratingsWithDivWidth={ratingsWithDivWidth}
                />
            </div>
        </div>
    );
};

export default ReviewsAndRatings;

const LeftSideContent = ({ ratings, data }) => {
    const [selectedRating, setSelectedRating] = useState("All");

    const [filteredData, setFilteredData] = useState(data);

    const handleSelection = (value) => {
        setSelectedRating(value);
        if (value === "All") {
            setFilteredData(allRatingReviewers);
        } else {
            const newArray = allRatingReviewers.filter(
                (item) => item.rating === value
            );
            setFilteredData(newArray);
        }
    };

    return (
        <>
            <div className="space-y-2 py-4">
                <h1 className="text-neutral-700 text-sm font-medium">Filter</h1>
                <div className="flex gap-x-2 md:gap-x-2.5">
                    <button
                        onClick={() => handleSelection("All")}
                        className={`w-[46px] md:w-[49px] h-[28px] md:h-[30px] flex justify-center items-center py-1.5 px-3  rounded-sm text-sm duration-300 ${
                            selectedRating === "All"
                                ? "border-[1.5px] border-neutral-700 font-bold text-neutral-700"
                                : "border border-neutral-30 text-neutral-300 font-medium"
                        }`}
                    >
                        All
                    </button>
                    <div className="flex gap-x-2 md:gap-x-2.5">
                        {ratings.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSelection(item.rating)}
                                className={`w-[46px] md:w-[49px] h-[28px] md:h-[30px] flex justify-center items-center py-1.5 px-3 rounded-sm ${
                                    selectedRating === item.rating
                                        ? "border-[1.5px] border-black-1000 font-bold text-neutral-700"
                                        : "border-[1.5px] border-neutral-30 font-medium text-neutral-300"
                                }`}
                            >
                                <div className="flex justify-center items-center gap-x-2">
                                    <p className=" text-sm font-medium text-neutral-700 text-opacity-80">
                                        {item.rating}
                                    </p>

                                    <Image
                                        alt="star-icon"
                                        src={Icons.rating}
                                        className="w-3 h-3"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="pt-7 md:pt-6">
                    {<Comments data={filteredData} />}
                </div>

                <div className="flex lg:hidden flex-col gap-y-3 pt-12">
                    <p className="text-neutral-300 text-sm font-medium">
                        Seller
                    </p>

                    <Link
                        href={SELLER_INFORMATION_PATH}
                        className="flex gap-x-3 cursor-pointer"
                    >
                        <Image
                            alt="seller-avatar"
                            src={Images.profile_avatar}
                            className="rounded-full w-10 h-10"
                        />

                        <div>
                            <div className="flex items-center gap-x-2">
                                <p className="text-sm font-medium text-black-1000">
                                    Seller Name
                                </p>

                                <Image
                                    alt="verified-icon"
                                    src={Icons.verified}
                                    className="w-5 h-5"
                                />
                            </div>

                            <div className="flex gap-x-1.5">
                                <Rate
                                    disabled
                                    count={1}
                                    defaultValue={1}
                                    style={{
                                        color: "#F08200",
                                        fontSize: "12px",
                                    }}
                                />

                                <p className="text-sm text-black-1000 font-medium">
                                    4.9
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

const Comments = ({ data }) => {
    return (
        <div className="animate-fadeIn w-full space-y-[33px]">
            {data.length > 0 &&
                data.map((item) => (
                    <div
                        key={item.id}
                        className="w-full flex gap-x-3 md:gap-x-4"
                    >
                        <Image
                            alt={item.name}
                            width={1000}
                            height={1000}
                            src={item.image}
                            className="w-10 h-10 md:w-10 md:h-10 rounded-full"
                        />
                        <div className="w-full lg:w-[500px] xl:w-[642px]">
                            <div className="flex justify-between items-center">
                                <h1 className="text-neutral-700 text-sm font-medium">
                                    {item.name}
                                </h1>
                                <p className="text-neutral-300 text-[13px]">
                                    {item.time}
                                </p>
                            </div>
                            <div className="pt-1 flex items-center gap-x-2 md:gap-x-2.5">
                                <Rate
                                    disabled
                                    defaultValue={item.rating}
                                    style={{
                                        color: "#F08200",
                                        fontSize: "12px",
                                    }}
                                />
                                <p className="text-neutral-700 text-xs font-medium pt-[2px]">
                                    {item.rating}
                                </p>
                            </div>
                            <p className="text-neutral-600 text-sm leading-[16.5px] md:leading-[21px]">
                                {item.comment}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

const RightSidecontent = ({
    ratings,
    totalReviewers,
    ratingsWithDivWidth,
    averageRating,
}) => {
    return (
        <div className="animate-fadeIn flex flex-row justify-between md:justify-start items-center md:flex-col md:gap-y-4">
            <div className="flex flex-col gap-y-4 w-full">
                <div className="mx-2 flex flex-col items-center w-full">
                    <div className="flex items-end">
                        <h1 className="text-black-1000 text-[32px] font-medium">
                            {averageRating}
                        </h1>
                        <span className="text-neutral-300 text-xl font-normal mb-1.5 ml-1">
                            /
                        </span>
                        <p className="text-neutral-300 text-xl font-normal mb-1.5 ml-1">
                            5.0
                        </p>
                    </div>

                    <div className="md:hidden mt-3 mb-2">
                        <Rate
                            disabled
                            defaultValue={averageRating}
                            style={{
                                color: "#F08200",
                                fontSize: "12px",
                            }}
                        />
                    </div>
                    <div className="hidden md:block mt-2 mb-2.5">
                        <Rate
                            disabled
                            defaultValue={averageRating}
                            style={{
                                color: "#F08200",
                                fontSize: "12px",
                            }}
                        />
                    </div>
                    <p className="text-neutral-300 text-base  font-normal">
                        {totalReviewers} reviews
                    </p>
                </div>

                <div className="flex flex-col gap-y-2 md:gap-y-3 pb-10">
                    {ratingsWithDivWidth.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center px-5 gap-x-2"
                        >
                            <Rate
                                disabled
                                count={1}
                                defaultValue={item.rating}
                                style={{
                                    color: "#F08200",
                                    fontSize: "12px",
                                }}
                            />
                            <p className="text-neutral-300 text-sm font-medium pl-2">
                                {item.rating}
                            </p>
                            <div className="w-full lg:w-[300px] h-1 bg-white rounded mx-3 md:mx-4">
                                <div
                                    style={{
                                        width: `${item.divWidth}%`, // Set the width based on the divWidth field
                                    }}
                                    className={`h-1 bg-[#F08200] rounded`}
                                />
                            </div>
                            <p className="text-black-1000 text-sm font-medium">
                                {item.reviewer}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#8790AB] bg-opacity-[12%]" />

                <div className="hidden lg:flex flex-col gap-y-3">
                    <p className="text-neutral-300 text-sm font-medium">
                        Seller
                    </p>

                    <Link
                        href={SELLER_INFORMATION_PATH}
                        className="flex gap-x-3 cursor-pointer"
                    >
                        <Image
                            alt="seller-avatar"
                            src={Images.productImage}
                            className="rounded-full w-10 h-10"
                        />

                        <div>
                            <div className="flex items-center gap-x-2">
                                <p className="text-sm font-medium text-black-1000">
                                    Seller Name
                                </p>

                                <Image
                                    alt="verified-icon"
                                    src={Icons.verified}
                                    className="w-5 h-5"
                                />
                            </div>

                            <div className="flex gap-x-1.5">
                                <Rate
                                    disabled
                                    count={1}
                                    defaultValue={1}
                                    style={{
                                        color: "#F08200",
                                        fontSize: "12px",
                                    }}
                                />

                                <p className="text-sm text-black-1000 font-medium">
                                    4.9
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
