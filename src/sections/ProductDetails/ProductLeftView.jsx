"use client";

import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { Carousel } from "antd";
import Image from "next/image";
import { useRef, useState } from "react";
import Icons from "../../../public/assets/Icons";
import DOMPurify from "dompurify";

const ProductLeftView = ({ forModal = false, data }) => {
    const carouselRef = useRef();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleNextClick = (type) => {
        if (carouselRef && carouselRef.current) {
            if (type === "next") {
                carouselRef.current.next();
            } else {
                carouselRef.current.prev();
            }
        }
    };

    const handleSmallImageClick = (index) => {
        if (carouselRef && carouselRef.current) {
            carouselRef.current.goTo(index);
        }
        setSelectedImageIndex(index);
    };

    // const fetchBanner = useCallback(async () => {
    //     try {
    //         const banner = await BannerService.getBannerImage(
    //             data.featuredImage
    //         );
    //         setBannerImage(banner);
    //     } catch (error) {
    //         console.error("Error fetching banner:", error);
    //     }
    // }, [data.featuredImage]);

    // React.useEffect(() => {
    //     fetchBanner();
    // }, [fetchBanner]);

    const handleAfterChange = (current) => {
        setSelectedImageIndex(current);
    };

    return (
        <div className="space-y-9">
            <div
                className={`flex ${
                    forModal
                        ? "w-[460px] flex-col-reverse gap-y-4"
                        : "flex-row pr-6 gap-x-6"
                }`}
            >
                <div
                    className={`flex ${
                        forModal ? "flex-row gap-x-4" : "flex-col gap-y-4"
                    }`}
                >
                    {[data.featuredImage, ...data.images].map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center duration-300 cursor-pointer border ${
                                index === selectedImageIndex
                                    ? "border-magenta-600"
                                    : "border-neutral-30"
                            } p-2 rounded-sm`}
                            onClick={() => handleSmallImageClick(index)}
                        >
                            <div
                                className={`flex items-center justify-center ${
                                    forModal
                                        ? "w-[62px] h-[62px]"
                                        : "w-[100px] h-[70px] xl:w-[130px] xl:h-[109px]"
                                } rounded-sm`}
                            >
                                <Image
                                    src={`${GET_IMAGE_RENDER}?key=${item}`}
                                    alt="value"
                                    width={1000}
                                    height={1000}
                                    className={`${
                                        forModal
                                            ? "w-[62px] h-[62px]"
                                            : "w-[68px] h-[38px] xl:w-[98px] xl:h-[77px]"
                                    } rounded-sm`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`${
                        forModal ? "w-[460px]" : "w-[360px] xl:w-[512px]"
                    } relative`}
                >
                    <Carousel
                        dots={false}
                        ref={carouselRef}
                        afterChange={handleAfterChange}
                    >
                        {[data.featuredImage, ...data.images].map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className={`flex justify-center items-center border border-[#EBEDF0] rounded-lg overflow-hidden ${
                                        forModal
                                            ? "w-[460px] h-[708px]"
                                            : "h-[480px] xl:h-[513px]"
                                    }`}
                                >
                                    <Image
                                        src={`${GET_IMAGE_RENDER}?key=${item}`}
                                        alt="value"
                                        width={1000}
                                        height={1000}
                                        className={`${
                                            forModal
                                                ? "w-[460px] h-[708px]"
                                                : "h-[480px] xl:h-[513px]"
                                        } w-full  rounded-sm`}
                                    />
                                </div>
                            )
                        )}
                    </Carousel>
                    <button
                        onClick={() => handleNextClick("prev")}
                        className="absolute top-1/2 left-0 p-4 bg-transparent transform -translate-y-1/2"
                    >
                        <Image
                            src={Icons.right_arrow_gray}
                            alt="value"
                            className="w-8 h-8 rotate-180"
                        />
                    </button>
                    <button
                        onClick={() => handleNextClick("next")}
                        className="absolute top-1/2 right-0 p-4 bg-transparent transform -translate-y-1/2"
                    >
                        <Image
                            src={Icons.right_arrow_gray}
                            alt="value"
                            className="w-8 h-8"
                        />
                    </button>
                </div>
            </div>

            {/* {!forModal && (
                <div className="space-y-4">
                    <h3 className="text-neutral-700 font-medium">
                        About the product
                    </h3>
                    <p
                        className="text-neutral-700 font-normal leading-6"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(data.description),
                        }}
                    />
                </div>
            )} */}
        </div>
    );
};

export default ProductLeftView;
