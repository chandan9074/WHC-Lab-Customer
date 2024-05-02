"use client";
import Filter from "@/components/Filter";
import React, { useCallback, useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductService from "@/services/productsService";
import { getCookie } from "cookies-next";

const ProductListContainer = ({
    data,
    productData,
    selectedTab,
    searchQuery,
    setSearchQuery,
}) => {
    const searchParams = useSearchParams();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [firstRender, setFirstRender] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setProductList(searchParams.toString() ? [] : productData);
    }, [searchParams, productData]);

    const handleSearchProduct = useCallback(async () => {
        setIsLoading(true);
        const paramData = {};
        searchParams.forEach((value, key) => {
            setSearchQuery((prev) => ({ ...prev, [key]: value }));
            paramData[key] = value;
        });

        const locationId = getCookie("selected_location");
        const _selectedLocation = locationId && JSON.parse(locationId);

        const response = await ProductService.getProducts({
            ...paramData,
            // category: selectedTab.name,
            locationId: _selectedLocation,
        });
        setProductList(response?.docs);
        setIsLoading(false);
    }, [searchParams]);

    const handleProductLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    useEffect(() => {
        if (searchParams) {
            handleSearchProduct();
        }
    }, [searchParams, handleSearchProduct]);

    const handleUpdateSearchQuery = useCallback(() => {
        handleProductLoading();
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
            : pathname;

        if (!firstRender) {
            router.push(updatedPath, { scroll: false });
        }
    }, [
        handleProductLoading,
        searchQuery,
        firstRender,
        searchParams,
        pathname,
        router,
    ]);

    useEffect(() => {
        handleUpdateSearchQuery();
    }, [handleUpdateSearchQuery]);

    return (
        <div className="flex gap-x-6">
            <div className="hidden md:block">
                <Filter.Primary
                    data={data}
                    selectedTab={selectedTab}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    handleProductLoading={handleProductLoading}
                />
            </div>

            <ProductDisplay
                selectedTab={selectedTab}
                data={productList}
                productData={productData}
            />
        </div>
    );
};

export default ProductListContainer;
