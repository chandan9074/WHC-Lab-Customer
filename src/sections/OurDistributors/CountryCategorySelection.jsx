"use client";
import { Select } from "antd";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";

const CountryCategorySelection = ({ data }) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const options = data.map((doc) => ({
        value: doc.name,
        label: doc.name,
    }));

    return (
        <div className="space-y-4 md:space-y-9 flex flex-col">
            <Select
                className="h-[52px]"
                suffixIcon={
                    <Image
                        src={Icons.caretDown}
                        width={16}
                        height={16}
                        alt="caretDown"
                    />
                }
                defaultValue="Select Category"
                onChange={handleChange}
                options={[
                    {
                        value: "commercial",
                        label: "Commercial",
                    },
                    {
                        value: "homebrewing",
                        label: "Homebrewing",
                    },
                ]}
            />

            <Select
                className="h-[52px]"
                suffixIcon={
                    <Image
                        src={Icons.caretDown}
                        width={16}
                        height={16}
                        alt="caretDown"
                    />
                }
                defaultValue="Select Country"
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default CountryCategorySelection;
