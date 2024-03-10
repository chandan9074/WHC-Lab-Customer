import { ratingsData } from "@/libs/productData";
import { Checkbox, Rate } from "antd";
import React, { useState } from "react";

const Ratings = ({ setSearchQuery, searchQuery }) => {
    // const [values, setValues] = useState([]);

    const onChange = (checkedValues) => {
        // setValues(checkedValues);
        const valueStr = checkedValues.join("&");
        setSearchQuery((prev) => ({ ...prev, ratings: valueStr }));
    };

    return (
        <Checkbox.Group onChange={onChange} className="flex flex-col gap-4">
            {ratingsData.map((item) => (
                <Checkbox
                    value={item.value}
                    key={item._id}
                    className={`text-sm ${
                        searchQuery?.ratings.split("&").includes(item.value)
                            ? "text-neutral-700 font-medium"
                            : "text-neutral-300"
                    }`}
                >
                    {item.label}{" "}
                    <Rate
                        disabled
                        defaultValue={item.value === "5" ? 5 : 1}
                        className="text-sm ml-2 text-[#F08200]"
                        count={item.value === "5" ? 5 : 1}
                    />
                    {item.value !== "5" && <span className="ml-2.5">& up</span>}
                </Checkbox>
            ))}
        </Checkbox.Group>
    );
};

export default Ratings;
