import { useUserContext } from "@/contexts/UserContext";
import { Input, InputNumber, Slider } from "antd";
import React, { useEffect, useState } from "react";

const Price = ({ setSearchQuery, searchQuery }) => {
    // const [inputValue, setInputValue] = useState([0, 20]);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(999999);

    const { currency } = useUserContext();

    useEffect(() => {
        if (searchQuery?.maxPrice) {
            setMaxValue(Number(searchQuery?.maxPrice));
        }
        if (searchQuery?.minPrice) {
            setMinValue(Number(searchQuery?.minPrice));
        }
    }, [searchQuery?.maxPrice, searchQuery?.minPrice]);

    const handleChange = (newValue) => {
        setMinValue(newValue[0]);
        setMaxValue(newValue[1]);
        setSearchQuery((prev) => ({
            ...prev,
            minPrice: newValue[0],
            maxPrice: newValue[1],
        }));
    };

    const handleInputFieldChange = (e, type) => {
        if (type === "min") {
            setMinValue(e);
            setSearchQuery((prev) => ({ ...prev, minPrice: e }));
        } else {
            setMaxValue(e);
            setSearchQuery((prev) => ({ ...prev, maxPrice: e }));
        }
    };

    const handlePressEnter = (e, type) => {
        if (type === "min") {
            setSearchQuery((prev) => ({ ...prev, minPrice: e }));
        } else {
            setSearchQuery((prev) => ({ ...prev, maxPrice: e }));
        }
    };

    const handleSliderComplete = (newValue) => {
        setSearchQuery((prev) => ({
            ...prev,
            minPrice: newValue[0],
            maxPrice: newValue[1],
        }));
    };
    return (
        <div>
            <Slider
                range
                defaultValue={[minValue, maxValue]}
                value={[minValue, maxValue]}
                max={500}
                onChange={handleChange}
                onChangeComplete={handleSliderComplete}
            />
            <div className="grid grid-cols-2 gap-x-9 mt-5">
                <InputNumber
                    placeholder="Min price"
                    className="h-10"
                    controls={false}
                    value={minValue}
                    type="number"
                    onChange={(e) => handleInputFieldChange(e, "min")}
                    onPressEnter={(e) => handlePressEnter(e, "min")}
                    prefix={
                        <span className="text-[#262626] text-sm font-medium">
                            {currency?.icon}
                        </span>
                    }
                />
                <InputNumber
                    placeholder="Max price"
                    className="h-10"
                    controls={false}
                    value={maxValue}
                    type="number"
                    onChange={(e) => handleInputFieldChange(e, "max")}
                    onPressEnter={(e) => handlePressEnter(e, "max")}
                    prefix={
                        <span className="text-[#262626] text-sm font-medium">
                            {currency?.icon}
                        </span>
                    }
                />
            </div>
        </div>
    );
};

export default Price;
