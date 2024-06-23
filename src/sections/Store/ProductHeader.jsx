"use client";
import Buttons from "@/components/Buttons";
import { productsData } from "@/libs/productData";
import { Drawer, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Icons from "../../../public/assets/Icons";
import Filter from "@/components/Filter";

const ProductHeader = ({
    filterData,
    selectedTab,
    dataLength,
    setSearchQuery,
    searchQuery,
    handleProductLoading,
}) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="space-y-4 md:space-y-6">
            <div className="w-full rounded-lg bg-[#F3F5F6] p-4 md:p-6 space-y-4 md:space-y-6 flex flex-col flex-1">
                <h1 className="text-brand-blue-500 text-xl md:text-2xl font-bold leading-8">
                    {selectedTab?.name}
                </h1>
                <p className="text-brand-blue-800 font-light text-sm md:text-base leading-6">
                    {selectedTab?.description}
                </p>
                {selectedTab?.label === "Laboratory Analysis" && (
                    <Buttons.OutlinedIconWithLabel label="Request Collection" />
                )}
            </div>

            <div className="w-full flex items-center justify-between py-5">
                <button
                    className="md:hidden flex gap-x-2 items-center"
                    onClick={showDrawer}
                >
                    <Image
                        alt="filter-icon"
                        src={Icons.filter}
                        width={1000}
                        height={1000}
                        className="w-6 h-6"
                    />
                    <p className="text-brand-blue-800 text-xs sm:text-sm font-normal">
                        Filters
                    </p>
                </button>

                <h5 className="text-xs sm:text-sm md:text-base text-brand-blue-800 font-normal leading-6">
                    Showing <span>{dataLength}</span> products
                </h5>
                <div className="flex items-center">
                    <p className="hidden lg:block text-brand-blue-800 font-normal leading-6 text-xs sm:text-sm md:text-base">
                        Sort by :
                    </p>
                    <Select
                        // defaultValue="newest"
                        placeholder="Select"
                        suffixIcon={
                            <Image
                                src={Icons.caretDown}
                                width={1000}
                                height={1000}
                                alt="caret-down"
                                className="w-4 h-4"
                            />
                        }
                        style={{ width: 110 }}
                        onChange={(value) =>
                            setSearchQuery({
                                ...searchQuery,
                                sortBy: value,
                            })
                        }
                        variant={false}
                        className="text-sm md:text-base text-brand-blue-500"
                        options={[
                            { value: "newest", label: "Newest" },
                            { value: "oldest", label: "Oldest" },
                        ]}
                    />
                </div>
            </div>

            <Drawer
                title={
                    <div className="w-full grid grid-cols-3 items-center">
                        <div className="col-span-1">
                            <Buttons.IconButton
                                alt="left-arrow-icon"
                                icon={Icons.right_arrow_gray}
                                className="rotate-180"
                                width="w-6"
                                height="h-6"
                                onClick={onClose}
                            />
                        </div>

                        <h2 className="text-xl font-medium text-neutral-700 flex w-full justify-center">
                            Filters
                        </h2>
                    </div>
                }
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                width={340}
            >
                <Filter.Primary
                    data={filterData}
                    selectedTab={selectedTab}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    handleProductLoading={handleProductLoading}
                />
            </Drawer>
        </div>
    );
};

export default ProductHeader;
