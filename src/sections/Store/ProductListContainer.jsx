"use client";
import Filter from "@/components/Filter";
import { useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductListContainer = ({
    data,
    productData,
    selectedTab,
    setSelectedTab,
    categoryData,
    searchQuery,
    setSearchQuery,
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleFilter = () => {
        const params = new URLSearchParams(searchParams);

        Object.keys(searchQuery).forEach((key) => {
            if (searchQuery[key]) {
                params.set(key, searchQuery[key]);
            } else {
                params.delete(key);
            }
        });

        const queryString = params.toString();
        const updatedPath = queryString
            ? `${pathname}?${queryString}`
            : `${pathname}?category=Brewing Yeast`;

        router.push(updatedPath, { scroll: false });
    };

    useEffect(() => {
        handleFilter();
    }, [searchQuery]);

    return (
        <div className="flex gap-x-6">
            <div className="hidden md:block">
                <Filter.Primary
                    data={data}
                    selectedTab={selectedTab}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
            </div>

            <ProductDisplay
                selectedTab={selectedTab}
                data={productData}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                productData={productData}
                filterData={data}
            />
        </div>
    );
};

export default ProductListContainer;
