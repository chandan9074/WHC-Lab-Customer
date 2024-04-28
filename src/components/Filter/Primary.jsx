"use client";
import FilterOptions from "@/sections/Home/Filter";
import { Collapse } from "antd";
import React, { Fragment } from "react";
import Icons from "../../../public/assets/Icons";
import { filterData } from "@/libs/productData";
import Image from "next/image";

const Primary = ({ data, setSearchQuery, searchQuery, selectedTab }) => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
            key: "1",
            label: "Yeast Type",
            component: (
                <FilterOptions.FilterCategory
                    data={filterData["yeastType"]}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    name="yeastType"
                />
            ),
        },
        {
            key: "2",
            label: "Beer Style",
            component: (
                <FilterOptions.FilterCategory
                    data={filterData["beerStyle"]}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    name="beerStyle"
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
                <FilterOptions.FilterCategory
                    data={filterData["flocculation"]}
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

    const getVisibility = (label, activeTab) => {
        const tabList = {
            "Brewing Yeast": [
                "Yeast Type",
                "Beer Style",
                "Flocculation",
                "Price",
            ],
            "Distilling Yeast": ["Yeast Type", "Price"],
            "Chemicals and Enzymes": ["Price"],
            "Laboratory Analysis": ["Price"],
        };
        return tabList[activeTab].includes(label);
    };

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
                    expandIcon={({ isActive }) => (
                        <Image
                            src={Icons.caretDown}
                            width={1000}
                            height={1000}
                            alt="caretDown"
                            className={`w-4 h-4 duration-300 ${isActive ? "rotate-0" : "-rotate-90"
                                }`}
                        />
                    )}
                    className="divide-y divide-[#EBEDF0]"
                >
                    {items.map((item) => (
                        <Fragment key={item.key}>
                            {getVisibility(item.label, selectedTab.label) && (
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
                            )}
                        </Fragment>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default Primary;
