import React from "react";
import Icons from "../../../../public/assets/Icons";
import Image from "next/image";
import Images from "../../../../public/assets/Images";
import CategoryCard from "./CategoryCard";
import SectionHeader from "@/components/common/SectionHeader";

const MainCategoriesContainer = ({ mainCategoriesData }) => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage:
                    'url("/assets/Images/main_category_section_banner.png")',
            }}
        >
            <div className="flex flex-col container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 gap-6 md:gap-12">
                <SectionHeader title={"Main Categories"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                    {mainCategoriesData.slice(0, 3).map((item) => (
                        <CategoryCard key={item._id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCategoriesContainer;
