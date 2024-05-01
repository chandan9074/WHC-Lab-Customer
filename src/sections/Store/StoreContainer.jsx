"use client";
import React, { useEffect, useState } from "react";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import ProductListContainer from "./ProductListContainer";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import CountrySelectionModal from "./CountrySelectionModal";
import ProductService from "@/services/productsService";
import { getCookie } from "cookies-next";

const StoreContainer = ({ productData }) => {
    const [selectedTab, setSelectedTab] = useState(StoreTabButtonsData[0]);
    const [productList, setProductList] = useState(productData || []);
    const locationId = getCookie("selected_location");
    const _selectedLocation = locationId && JSON.parse(locationId);

    const handleLocation = async (locationId) => {
        const response = await ProductService.getProducts({ locationId });
        // console.log(response, "reposnse----");
        console.log({ response });
        setProductList(response?.docs);
    };

    useEffect(() => {
        const locationId = getCookie("selected_location");
        const _selectedLocation = locationId && JSON.parse(locationId);
        _selectedLocation && handleLocation(_selectedLocation);
    }, []);

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
            <StoreTabButtonsSection
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
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
