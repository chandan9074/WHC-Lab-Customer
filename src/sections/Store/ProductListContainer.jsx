"use client";
import Filter from "@/components/Filter";
import React, { useCallback, useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductService from "@/services/productsService";

const ProductListContainer = ({ data, productData, selectedTab }) => {
    const searchParams = useSearchParams();
    const [productList, setProductList] = useState(
        searchParams.toString() ? [] : productData
    );
    const [isLoading, setIsLoading] = useState(false);
    const [firstRender, setFirstRender] = useState(false);
    const [searchQuery, setSearchQuery] = useState({
        yeastType: "",
        beerStyle: "",
        flocculation: "",
        maxPrice: 0,
        minPrice: 0,
    });
    const pathname = usePathname();
    const router = useRouter();

    const handleSearchProduct = useCallback(async () => {
        setIsLoading(true);
        const paramData = {};
        searchParams.forEach((value, key) => {
            setSearchQuery((prev) => ({ ...prev, [key]: value }));
            paramData[key] = value;
        });

        const response = await ProductService.getProducts(paramData);
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

            <ProductDisplay selectedTab={selectedTab} data={productList} />
        </div>
    );
};

export default ProductListContainer;
