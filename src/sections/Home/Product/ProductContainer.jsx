import React from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";

const ProductContainer = ({ featuredProducts }) => {
    return (
        <div className="bg-neutral-10 w-full py-9 sm:py-[46px] md:py-[56px] lg:py-[120px] flex items-center flex-wrap gap-6 overflow-x-auto">
            <Marquee className="gap-5" speed={100} style={{ padding: "10px" }}>
                {featuredProducts.map((data, index) => {
                    return (
                        <Link
                            href={PRODUCT_DETAILS_PATH + data?._id}
                            key={index}
                        >
                            <ProductCard
                                id={index}
                                title={data.name}
                                image={data.featuredImage}
                            />
                        </Link>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default ProductContainer;

const products = [
    {
        name: "Old English-Dehydrated Yeast (500g)",
        image: "/assets/Images/Product_section_image1.svg",
    },
    {
        name: "Tangy Dehydrated Bacteria",
        image: "/assets/Images/Product_section_image2.svg",
    },
    {
        name: "Lactobacillus Plantarum-Dehydrated Bacteria",
        image: "/assets/Images/Product_section_image3.svg",
    },
    {
        name: "Mango Madness-Thermotolerant IPA Yeast-Dehydrated Yeast (500g)",
        image: "/assets/Images/Product_section_image4.svg",
    },
    {
        name: "Low Rider-Session Low Attenuating Yeast-Dehydrated",
        image: "/assets/Images/Product_section_image5.svg",
    },
    {
        name: "Sanders- Modern NEIPA Yeast- Fresh Yeast Pouch",
        image: "/assets/Images/Product_section_image6.svg",
    },
    {
        name: "Hornindal Kveik-Red Hot IPA Yeast-Dehydrated",
        image: "/assets/Images/Product_section_image7.svg",
    },
    {
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        image: "/assets/Images/Product_section_image8.svg",
    },
    {
        name: "Haze Heaven-Juicy NEIPA Yeast-Fresh Yeast Pouch",
        image: "/assets/Images/Product_section_image9.svg",
    },
];
