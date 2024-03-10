import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ProductContainer = () => {
    return (
        <div className="bg-light-gray w-full h-[412px] flex items-center flex-wrap gap-6 overflow-x-auto">
            <Marquee className="gap-5" speed={100} style={{ padding: "10px" }}>
                {products.map((data, index) => {
                    return (
                        <div
                            className={`bg-white w-[281px] h-[172px] border px-6 py-5 flex flex-col justify-between rounded-[25px] mx-[20px] ${
                                index === 0 ? "mr-4 ml-0" : ""
                            }`}
                            key={index}
                        >
                            <h3 className="text-[16px] font-semibold line-clamp-2">
                                {index + 1}.&nbsp;
                                {data?.name}
                            </h3>
                            <div className="flex justify-between items-center rounded-3xl">
                                <div className=" h-[60px] w-[88px] bg-[#F5F6F7] flex items-center justify-center p-4 rounded-[16px]">
                                    <Image
                                        src={`${data.image}`}
                                        className="h-[60px] w-[60px]"
                                        height={1000}
                                        width={1000}
                                    />
                                </div>
                                <Image
                                    src={`/assets/Images/Product_section_arrow.svg`}
                                    className="h-[36px] w-[36px]"
                                    height={1000}
                                    width={1000}
                                />
                            </div>
                        </div>
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
