"use client";
import React, { useState } from "react";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import ProductListContainer from "./ProductListContainer";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import CountrySelectionModal from "./CountrySelectionModal";

const StoreContainer = ({ productData }) => {
    const [selectedTab, setSelectedTab] = useState(StoreTabButtonsData[0]);

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
            <StoreTabButtonsSection
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            <ProductListContainer
                selectedTab={selectedTab}
                productData={productData}
            />

            <CountrySelectionModal />
        </div>
    );
};

export default StoreContainer;
