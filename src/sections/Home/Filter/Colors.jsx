import { colorsData } from "@/libs/productData";
import { Checkbox } from "antd";
import React, { useState } from "react";

const Colors = ({ setSearchQuery, searchQuery }) => {
    const [values, setValues] = useState([]);

    const onChange = (checkedValues) => {
        // setValues(checkedValues);
        const valueStr = checkedValues.join("&");
        setSearchQuery((prev) => ({ ...prev, colors: valueStr }));
    };
    return (
        <Checkbox.Group onChange={onChange} className="flex flex-col gap-4">
            {colorsData.map((item) => (
                <Checkbox
                    value={item.value}
                    key={item._id}
                    className={`text-sm ${
                        searchQuery?.colors?.split("&").includes(item.value)
                            ? "text-neutral-700 font-medium"
                            : "text-neutral-300"
                    }`}
                >
                    {item.label}
                </Checkbox>
            ))}
        </Checkbox.Group>
    );
};

export default Colors;
