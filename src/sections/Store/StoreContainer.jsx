"use client";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import ProductListContainer from "./ProductListContainer";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const StoreContainer = ({ productData, categoryData, initialCategory }) => {
    const [selectedTab, setSelectedTab] = useState(
        initialCategory
            ? categoryData.find((item) => item.name === initialCategory)
            : {}
    );
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const params = new URLSearchParams(searchParams);
    const [searchQuery, setSearchQuery] = useState({
        maxPrice: params.get("maxPrice"),
        minPrice: params.get("minPrice"),
        category: params.get("category"),
        sortBy: params.get("sortBy"),
        tag: params.get("tag"),
    });

    const handleTabButtonClick = async () => {
        Object.keys(searchQuery).forEach((key) => {
            if (searchQuery[key]) {
                params.set(key, searchQuery[key]);
            } else {
                params.delete(key);
            }
        });

        const queryString = params.toString();
        const updatedPath = `${pathname}?${queryString}`;

        router.push(updatedPath, { scroll: false });
    };

    useEffect(() => {
        if (productData) {
            setLoading(false);
        }
    }, [productData]);

    useEffect(() => {
        handleTabButtonClick();
    }, [searchQuery]);

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-10 md:pb-20">
            <Spin fullscreen spinning={loading} />
            <>
                <StoreTabButtonsSection
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    categoryData={categoryData}
                    handleTabButtonClick={handleTabButtonClick}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <ProductListContainer
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    productData={productData}
                    categoryData={categoryData}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </>
        </div>
    );
};

export default StoreContainer;
