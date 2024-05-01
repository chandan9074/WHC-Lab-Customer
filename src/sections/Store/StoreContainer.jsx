"use client";
import React, { useEffect, useState } from "react";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import ProductListContainer from "./ProductListContainer";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import CountrySelectionModal from "./CountrySelectionModal";
import ProductService from "@/services/productsService";
import { getCookie } from "cookies-next";

const StoreContainer = ({ productData, categoryData }) => {
    const [selectedTab, setSelectedTab] = useState(categoryData[0]);
    const [productList, setProductList] = useState(productData || []);
    const locationId = getCookie("selected_location");

    const handleLocation = async (locationId, category) => {
        const response = await ProductService.getProducts({
            locationId,
            category,
        });
        // console.log(response, "reposnse----");
        console.log({ response });
        setProductList(response?.docs);
    };

    const handleTabButtonClick = () => {};

    useEffect(() => {
        const locationId = getCookie("selected_location");
        const _selectedLocation = locationId && JSON.parse(locationId);

        _selectedLocation &&
            handleLocation(_selectedLocation, selectedTab.name);
    }, [selectedTab]);

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
            <StoreTabButtonsSection
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                categoryData={categoryData}
                handleTabButtonClick={handleTabButtonClick}
            />

            <ProductListContainer
                selectedTab={selectedTab}
                productData={productList}
            />

            <CountrySelectionModal handleLocation={handleLocation} />
        </div>
    );
};

export default StoreContainer;
