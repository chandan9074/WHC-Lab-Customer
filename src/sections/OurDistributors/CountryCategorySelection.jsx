"use client";
import { Select } from "antd";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";

const CountryCategorySelection = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
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
                        value: "jack",
                        label: "Jack",
                    },
                    {
                        value: "lucy",
                        label: "Lucy",
                    },
                    {
                        value: "Yiminghe",
                        label: "yiminghe",
                    },
                    {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
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
                options={[
                    {
                        value: "jack",
                        label: "Jack",
                    },
                    {
                        value: "lucy",
                        label: "Lucy",
                    },
                    {
                        value: "Yiminghe",
                        label: "yiminghe",
                    },
                    {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                    },
                ]}
            />
        </div>
    );
};

export default CountryCategorySelection;
