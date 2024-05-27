"use client";
import React, { useEffect, useState } from "react";
import StoreTabButtonsSection from "./StoreTabButtonsSection";
import ProductListContainer from "./ProductListContainer";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import CountrySelectionModal from "./CountrySelectionModal";
import ProductService from "@/services/productsService";
import { getCookie } from "cookies-next";
import { useUserContext } from "@/contexts/UserContext";
import { StoreSkeleton } from "@/components/common/StoreSkeleton";

const StoreContainer = ({ productData, categoryData, initialCategory }) => {
    const {
        productList,
        setProductList,
        selectedTab,
        setSelectedTab,
        handleLocation,
        productLoading,
        setProductLoading,
    } = useUserContext();
    // const [selectedTab, setSelectedTab] = useState(
    //     initialCategory
    //         ? categoryData.find((item) => item.name === initialCategory)
    //         : categoryData[0]
    // );
    setSelectedTab(
        initialCategory
            ? categoryData.find((item) => item.name === initialCategory)
            : categoryData[0]
    );
    setProductList(productData || []);

    const [tagsLoading, setTagsLoading] = useState(false);
    // const [productList, setProductList] = useState(productData || []);
    const [searchQuery, setSearchQuery] = useState({
        yeastType: "",
        beerStyle: "",
        flocculation: "",
        maxPrice: 0,
        minPrice: 0,
        category: "",
    });

    // const handleLocation = async (locationId) => {
    //     const category = selectedTab.name;
    //     const response = await ProductService.getProducts({
    //         locationId,
    //         category,
    //     });
    //     // console.log(response, "reposnse----");
    //     console.log({ response });
    //     setProductList(response?.docs);
    // };

    const handleTabButtonClick = async (data) => {
        const _selectedLocation = getCookie("selected_location");
        const locationId = _selectedLocation && JSON.parse(_selectedLocation);
        // setTagsLoading(true);
        const response = await ProductService.getProducts({
            locationId,
            category: data.name,
        });
        // console.log(response, "reposnse----");
        // setTagsLoading(false);
        // console.log({ response });
        setProductList(response?.docs);
    };

    // useEffect(() => {
    //     const locationId = getCookie("selected_location");
    //     const _selectedLocation = locationId && JSON.parse(locationId);

    //     _selectedLocation &&
    //         handleLocation(_selectedLocation, selectedTab.name);
    // }, [selectedTab]);

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-0 md:pb-20">
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
                    productData={productList}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <CountrySelectionModal handleLocation={handleLocation} />
            </>
        </div>
    );
};

export default StoreContainer;
