import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Image from "next/image";
import React from "react";
import Images from "../../../../public/assets/Images";

function ProductCard({ id, title, image }) {
    console.log("img-----------------", image);
    return (
        <div
            className={`bg-white w-[281px] h-[172px] border px-6 py-5 flex flex-col justify-between rounded-[25px] mx-[20px] ${
                id === 0 ? "mr-4 ml-0" : ""
            }`}
        >
            <h3 className="text-[16px] font-semibold line-clamp-2">
                {id + 1}.&nbsp;
                {title}
            </h3>
            <div className="flex justify-between items-center rounded-3xl">
                <div className=" h-[60px] w-[88px] bg-[#F5F6F7] flex items-center justify-center p-4 rounded-[16px]">
                    <Image
                        src={
                            image
                                ? `${GET_IMAGE_RENDER}?key=${image}`
                                : Images.noImageFound
                        }
                        alt={title}
                        className="h-[60px] w-[60px]"
                        height={1000}
                        width={1000}
                    />
                </div>
                <Image
                    src={`/assets/Images/Product_section_arrow.svg`}
                    alt={"icon"}
                    className="h-[36px] w-[36px]"
                    height={1000}
                    width={1000}
                />
            </div>
        </div>
    );
}

export default ProductCard;
