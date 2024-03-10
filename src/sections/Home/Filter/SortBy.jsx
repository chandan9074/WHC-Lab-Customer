"use client";
import React, { useState } from "react";
import { Radio } from "antd";
import { sortByData } from "@/libs/productData";

const SortBy = ({ setSearchQuery, searchQuery }) => {
    const [value, setValue] = useState();
    const onChange = (e) => {
        setValue(e.target.value);
        setSearchQuery({ ...searchQuery, sortBy: e.target.value });
    };

    return (
        <Radio.Group
            onChange={onChange}
            value={value || searchQuery?.sortBy}
            className="flex flex-col gap-y-4"
        >
            {sortByData.map((item) => (
                <Radio
                    value={item.value}
                    key={item._id}
                    className={`text-sm custom-radio ${
                        value === item.value
                            ? "text-neutral-700 font-semibold"
                            : "text-neutral-300"
                    }`}
                >
                    {item.label}
                </Radio>
            ))}
        </Radio.Group>
    );
};

export default SortBy;
