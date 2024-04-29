"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Images from "../../../../public/assets/Images";
import SectionHeader from "@/components/common/SectionHeader";
import Buttons from "@/components/Buttons";
import NavHeader from "./NavHeader";
import ProductCard from "./ProductCard";
import { Carousel } from "antd";
import { generateLeftMargin } from "@/helpers/utils";
import Icons from "../../../../public/assets/Icons";
import ProductService from "@/services/productsService";

const OurProductsContainer = ({ data }) => {
    const [activeTab, setActiveTab] = useState("New Products");
    const [productList, setProductList] = useState(data);
    const [leftMargin, setLeftMargin] = useState();
    const [slides, setSlides] = useState(0);

    console.log(productList);

    useEffect(() => {
        // console.log(window.innerWidth);
        // let x = 0;
        // let value = 0;
        // if (window.innerWidth >= 1568) {
        //     x = (window.innerWidth - 1568) / 2;
        //     value = window.innerWidth - (1568 + x);
        // } else if (window.innerWidth >= 1280) {
        // } else if (window.innerWidth >= 1029) {
        // } else if (window.innerWidth >= 768) {
        // } else if (window.innerWidth >= 640) {
        // }
        const value = generateLeftMargin();
        setLeftMargin(value.margin);
        setSlides(value.slides);
    }, []);

    const handleNavChange = async (value) => {
        if (value === "Best Seller") {
            const bestSellerProducts = await ProductService.getProducts({
                isBestSeller: true,
            });
            setProductList(bestSellerProducts.docs);
        } else if (value === "WHC Signature") {
            const whcSignatureProducts = await ProductService.getProducts({
                isSignature: true,
            });
            setProductList(whcSignatureProducts.docs);
        } else {
            const newProducts = await ProductService.getProducts();
            setProductList(newProducts.docs);
        }
    };
    return (
        <div className="bg-our-product bg-cover pl-6 sm:pl-3 xl:py-[100px] lg:py-20 md:py-14 sm:py-10 py-6">
            <div className={`container mx-auto`}>
                <SectionHeader
                    title={"VARIOUS SERVICES WE OFFER"}
                    color="text-white"
                />
                <NavHeader
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleNavChange={handleNavChange}
                />
                <div className="h-[1px] w-full bg-stroke-new mt-6" />
            </div>
            <div
                className="mt-9 cursor-grab"
                style={{ marginLeft: `${leftMargin}px` }}
            >
                <Carousel
                    slidesToShow={slides}
                    initialSlide={slides === 1 ? 1.2 : slides}
                    dots={false}
                    draggable
                    centerMode={slides === 1.05 ? false : true}
                >
                    {productList?.map((item, index) => (
                        <ProductCard key={item} index={index + 1} data={item} />
                    ))}
                </Carousel>
            </div>
            <div className="flex lg:hidden mt-10 justify-center pr-6">
                <Buttons.IconWithLabel
                    label="Explore Our All Strains"
                    icon={Icons.arrow_up_right_blue}
                    bgColor="bg-white"
                    textColor="text-brand-blue-800"
                />
            </div>
        </div>
    );
};

export default OurProductsContainer;
