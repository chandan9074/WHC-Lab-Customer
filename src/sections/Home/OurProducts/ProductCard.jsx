import Image from "next/image";
import React from "react";
import Images from "../../../../public/assets/Images";
import Buttons from "@/components/Buttons";
import Icons from "../../../../public/assets/Icons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Link from "next/link";

const ProductCard = ({ index, data }) => {
    return (
        <div className="relative rounded-xl w-[300px] sm:w-[320px] md:w-[370px] lg:w-[390px] xl:w-[420px] 2xl:w-[467px] overflow-hidden">
            <Image
                src={Images.product_shape}
                alt="product_bg"
                width={1000}
                height={1000}
                className="w-full h-full absolute top-0 left-0 z-10 object-fill  backdrop-blur-md"
            />
            <div className="absolute left-0 bottom-0 z-20 ">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-[32px] p-2.5 text-white font-light">
                    {index > 9 ? index : `0${index}`}
                </p>
            </div>
            <div className="relative z-20 p-4 md:p-5 lg:p-6 xl:p-[30px]">
                <Image
                    src={`${GET_IMAGE_RENDER}?key=${data.featuredImage}`}
                    alt="product_image"
                    width={1000}
                    height={1000}
                    className="w-full h-[218px] object-cover rounded-[9.81px]"
                />
                <p className="h-24 line-clamp-2 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-[30px] text-lg md:text-xl lg:text-2xl xl:text-[32px] text-white left-7 sm:leading-8 md:leading-9 lg:leading-[44px] tracking-[0.285px]">
                    {data.name}
                </p>
                <div className="mt-6 flex justify-end">
                    <Link
                        href={`/store/product-details/${data?._id}`}
                    >
                        <Buttons.IconWithLabel
                            label="View Details"
                            icon={Icons.arrow_up_right_white}
                            bgColor="bg-transparent"
                            textColor="text-white"
                            border="border border-white"
                            width="w-auto"

                        />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
