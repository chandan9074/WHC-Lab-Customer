import { availabilityData } from "@/libs/productData";
import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";

const Availability = ({ setSearchQuery, searchQuery }) => {
    const [values, setValues] = useState([availabilityData[0].value]);
    console.log(searchQuery, "value data");

    useEffect(() => {
        if (searchQuery?.availability) {
            console.log(searchQuery?.availability.split("&"), "availability");
            setValues(searchQuery?.availability.split("&"));
        }
    }, [searchQuery?.availability]);

    const onChange = (checkedValues) => {
        setValues(checkedValues);
        console.log(checkedValues.join("&"), "values");
        const valueStr = checkedValues.join("&");
        setSearchQuery((prev) => ({ ...prev, availability: valueStr }));
    };

    return (
        <Checkbox.Group
            // defaultValue={searchQuery?.availability?.split("&")}
            onChange={onChange}
            className="flex flex-col gap-4"
        >
            {availabilityData.map((item) => (
                <Checkbox
                    value={item.value}
                    defaultChecked={values.includes(item.value)}
                    key={item._id}
                    checked={values.includes(item.value) ? true : false}
                    className={`text-sm ${
                        values.includes(item.value)
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

export default Availability;
