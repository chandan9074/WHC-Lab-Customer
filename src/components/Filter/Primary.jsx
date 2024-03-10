"use client";
import FilterOptions from "@/sections/Home/Filter";
import { Collapse } from "antd";
import React from "react";
import Icons from "../../../public/assets/Icons";

const Primary = ({ data, setSearchQuery, searchQuery }) => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
            key: "1",
            label: `Yeast Type (${
                searchQuery?.category
                    ? searchQuery.category.split("&").length
                    : 0
            })`,
            component: (
                <FilterOptions.Category
                    data={data}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
            ),
        },
        {
            key: "2",
            label: "Beer Style",
            component: (
                <FilterOptions.Category
                    data={data}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
                // <FilterOptions.SortBy
                //     setSearchQuery={setSearchQuery}
                //     searchQuery={searchQuery}
                // />
            ),
        },
        {
            key: "3",
            label: "Flocculation",
            component: (
                <FilterOptions.Category
                    data={data}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
                // <FilterOptions.Availability
                //     setSearchQuery={setSearchQuery}
                //     searchQuery={searchQuery}
                // />
            ),
        },
        {
            key: "4",
            label: "Price",
            component: (
                <FilterOptions.Price
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
            ),
        },
        // {
        //     key: "5",
        //     label: "Ratings",
        //     component: (
        //         <FilterOptions.Ratings
        //             setSearchQuery={setSearchQuery}
        //             searchQuery={searchQuery}
        //         />
        //     ),
        // },
        // {
        //     key: "6",
        //     label: "Delivery type",
        //     component: <p>{text}</p>,
        // },
        // {
        //     key: "7",
        //     label: "Brands",
        //     component: <p>{text}</p>,
        // },
        // {
        //     key: "6",
        //     label: "Colors",
        //     component: (
        //         <FilterOptions.Colors
        //             setSearchQuery={setSearchQuery}
        //             searchQuery={searchQuery}
        //         />
        //     ),
        // },
        // {
        //     key: "7",
        //     label: "Size",
        //     component: <p>{text}</p>,
        // },
    ];

    return (
        <div className="bg-white rounded-lg w-[282px] border border-[#EBEDF0] px-[26px] py-[18px]">
            <div className="hidden lg:block">
                <h3 className="text-2xl font-bold text-neutral-700">Filters</h3>
            </div>
            <div>
                <Collapse
                    expandIconPosition="left"
                    defaultActiveKey={["1", "2", "3", "4", "5", "6", "7"]}
                    ghost
                >
                    {items.map((item) => (
                        <Collapse.Panel
                            header={
                                <h6 className="text-sm font-semibold text-brand-blue-800 leading-5">
                                    {item.label}
                                </h6>
                            }
                            key={item.key}
                        >
                            {item.component}
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default Primary;
