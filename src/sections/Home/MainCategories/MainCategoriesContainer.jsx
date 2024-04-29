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
                    {/* <div className="relative overflow-hidden">
                        <div className="bg-red-500 w-12 h-12 absolute right-0 top-0 transition-all ease"></div>

                        <div className="bg-white rounded-3xl flex flex-col gap-12 px-4 py-5 md:px-5 md:py-6 md:h-[456px] md:gap-0 md:justify-between">
                            <div className="flex justify-between items-center">
                                <button className="bg-[#E7EAED] rounded-3xl py-[6.5px] px-[13px] text-sm text-brand-blue-500 font-medium md:py-2 md:px-4">Brewing</button>
                                <Image
                                    src={Icons.arrow_up_right_brand_blue_gradient}
                                    alt='Arrow up right'
                                    width={1000}
                                    height={1000}
                                    className="w-10 h-10"
                                />
                            </div>
                            <h3 className="text-brand-blue-500 font-medium text-xl md:text-4xl">Laboratory <br /> Analysis</h3>
                            <div className="flex justify-between items-center">
                                <Image
                                    src={Icons.brewing_yeast}
                                    alt='Arrow up right'
                                    width={1000}
                                    height={1000}
                                    className="w-24"
                                />
                                <button className="rounded-[20px] border border-brand-blue-500 text-sm font-medium px-[13px] py-[6.5px] md:text-[18px] md:px-4 md:py-2">Explore Now</button>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl flex flex-col gap-12 px-4 py-5 md:px-5 md:py-6 md:h-[456px] md:gap-0 md:justify-between">
                        <div className="flex justify-between items-center">
                            <button className="bg-[#E7EAED] rounded-3xl py-[6.5px] px-[13px] text-sm text-brand-blue-500 font-medium md:py-2 md:px-4">Brewing</button>
                            <Image
                                src={Icons.arrow_up_right_brand_blue_gradient}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-brand-blue-500 font-medium text-xl md:text-4xl">Laboratory <br /> Analysis</h3>
                        <div className="flex justify-between items-center">
                            <Image
                                src={Icons.brewing_yeast}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-24"
                            />
                            <button className="rounded-[20px] border border-brand-blue-500 text-sm font-medium px-[13px] py-[6.5px] md:text-[18px] md:px-4 md:py-2">Explore Now</button>
                        </div>

                    </div>


                    <div className="bg-white rounded-3xl flex flex-col gap-12 px-4 py-5 md:px-5 md:py-6 md:h-[456px] md:gap-0 md:justify-between">
                        <div className="flex justify-between items-center">
                            <button className="bg-[#E7EAED] rounded-3xl py-[6.5px] px-[13px] text-sm text-brand-blue-500 font-medium md:py-2 md:px-4">Brewing</button>
                            <Image
                                src={Icons.arrow_up_right_brand_blue_gradient}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-brand-blue-500 font-medium text-xl md:text-4xl">Laboratory <br /> Analysis</h3>
                        <div className="flex justify-between items-center">
                            <Image
                                src={Icons.brewing_yeast}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-24"
                            />
                            <button className="rounded-[20px] border border-brand-blue-500 text-sm font-medium px-[13px] py-[6.5px] md:text-[18px] md:px-4 md:py-2">Explore Now</button>
                        </div>

                    </div>


                    <div className="bg-white rounded-3xl flex flex-col gap-12 px-4 py-5 md:px-5 md:py-6 md:h-[456px] md:gap-0 md:justify-between">
                        <div className="flex justify-between items-center">
                            <button className="bg-[#E7EAED] rounded-3xl py-[6.5px] px-[13px] text-sm text-brand-blue-500 font-medium md:py-2 md:px-4">Brewing</button>
                            <Image
                                src={Icons.arrow_up_right_brand_blue_gradient}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-brand-blue-500 font-medium text-xl md:text-4xl">Laboratory <br /> Analysis</h3>
                        <div className="flex justify-between items-center">
                            <Image
                                src={Icons.brewing_yeast}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-24"
                            />
                            <button className="rounded-[20px] border border-brand-blue-500 text-sm font-medium px-[13px] py-[6.5px] md:text-[18px] md:px-4 md:py-2">Explore Now</button>
                        </div>

                    </div> */}

                    {mainCategoriesData.slice(0, 3).map((item) => (
                        <CategoryCard key={item._id} data={item} />
                    ))}

                    {/* <CategoryCard />
                    <CategoryCard />
                    <CategoryCard /> */}
                </div>
            </div>
        </div>
    );
};

export default MainCategoriesContainer;
