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
import { Spin } from "antd";

const StoreContainer = ({ productData, categoryData, initialCategory }) => {
    // const {
    //     productList,
    //     setProductList,
    //     selectedTab,
    //     setSelectedTab,
    //     handleLocation,
    //     productLoading,
    //     setProductLoading,
    // } = useUserContext();
    const [selectedTab, setSelectedTab] = useState(
        initialCategory
            ? categoryData.find((item) => item.name === initialCategory)
            : {}
    );
    const [loading, setLoading] = useState(false);
    // setSelectedTab(
    //     initialCategory
    //         ? categoryData.find((item) => item.name === initialCategory)
    //         : categoryData[0]
    // );
    // setProductList(productData || []);

    // const [tagsLoading, setTagsLoading] = useState(false);
    const [productList, setProductList] = useState(productData || []);
    const { navLocation, setNavLocationValue } = useUserContext();
    const [searchQuery, setSearchQuery] = useState({
        yeastType: "",
        beerStyle: "",
        flocculation: "",
        maxPrice: 0,
        minPrice: 0,
        category: "",
        sortBy: "",
    });

    const handleLocation = async (locationId) => {
        const category = selectedTab.name;
        setNavLocationValue(locationId);
        setLoading(true);
        const response = await ProductService.getProducts({
            locationId,
            category,
        });
        // console.log(response, "reposnse----");
        console.log({ response });
        setLoading(false);
        setProductList(response?.docs);
    };

    const handleTabButtonClick = async () => {
        const _selectedLocation = getCookie("selected_location");
        // setTagsLoading(true);
        // const response = await ProductService.getProducts({
        //     locationId,
        //     category: data.name,
        // });
        // console.log(response, "reposnse----");
        // setTagsLoading(false);
        // console.log({ response });
        // setProductList(response?.docs);
    };

    useEffect(() => {
        if (navLocation) {
            console.log(navLocation);
            handleLocation(navLocation);
        }
    }, [navLocation]);

    // useEffect(() => {
    //     const locationId = getCookie("selected_location");
    //     const _selectedLocation = locationId && JSON.parse(locationId);

    //     _selectedLocation &&
    //         handleLocation(_selectedLocation, selectedTab.name);
    // }, [selectedTab]);

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
                    productData={productList}
                    categoryData={categoryData}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <CountrySelectionModal handleLocation={handleLocation} />
            </>
        </div>
    );
};

export default StoreContainer;
