"use client";
import { Select } from "antd";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import MakeApiCall from "@/services/MakeApiCall";
import DistributorsService from "@/services/DistributorsService";

const CountryCategorySelection = ({
    // data,
    distinctCountry,
    distinctCategory,
    searchQuery,
    setSearchQuery,
}) => {
    // const handleChange = async (value) => {
    //     console.log(`selected ${value}`);
    //     try {
    //         const response = await DistributorsService.getDistinctCategory();
    //     } catch (error) {}
    // };

    const countries = distinctCountry.map((doc) => ({
        value: doc,
        label: doc,
    }));

    const categories = distinctCategory.map((doc) => ({
        value: doc,
        label: doc,
    }));

    return (
        <div className="space-y-4 md:space-y-9 flex flex-col">
            <Select
                allowClear={
                    <Image
                        src={Icons.cross_blue}
                        width={40}
                        height={40}
                        alt="caretDown"
                    />
                }
                className="h-[52px]"
                suffixIcon={
                    <Image
                        src={Icons.caretDown}
                        width={16}
                        height={16}
                        alt="caretDown"
                    />
                }
                // defaultValue="Select Category"
                // defaultValue={searchQuery.category}
                placeholder="Select Category"
                onChange={(value) =>
                    setSearchQuery({
                        ...searchQuery,
                        category: value ? value : "",
                    })
                }
                options={categories}
            />

            <Select
                allowClear={
                    <Image
                        src={Icons.cross_blue}
                        width={40}
                        height={40}
                        alt="caretDown"
                    />
                }
                className="h-[52px]"
                suffixIcon={
                    <Image
                        src={Icons.caretDown}
                        width={16}
                        height={16}
                        alt="caretDown"
                    />
                }
                placeholder="Select Country"
                onChange={(value) =>
                    setSearchQuery({ ...searchQuery, country: value })
                }
                options={countries}
            />
        </div>
    );
};

export default CountryCategorySelection;
