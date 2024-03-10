"use client";
import React, { useState } from "react";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import ProductListContainer from "./ProductListContainer";

const StoreContainer = () => {
    const [selectedTab, setSelectedTab] = useState("Brewing Yeast");

    return (
        <div className="container mx-auto space-y-[14.5px]">
            <StoreTabButtonsSection
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            <ProductListContainer />
        </div>
    );
};

export default StoreContainer;
