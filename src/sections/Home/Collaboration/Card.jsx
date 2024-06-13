import Buttons from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../../../../public/assets/Icons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Images from "../../../../public/assets/Images";

function Card({ data }) {
    const { _id, title, description, images } = data;

    console.log({ _id });
    const processImages = (obj) => {
        let pickedImages = [];

        if (obj.images.length >= 2) {
            pickedImages = obj.images.slice(0, 2); // Pick the first two images
        } else if (obj.images.length === 1) {
            pickedImages = obj.images.slice(0, 1); // Pick the only image
        }

        return pickedImages;
    };

    const selectedImages = processImages(data);
    console.log(selectedImages);

    return (
        <div className="bg-[#fff] w-full lg:py-6 lg:px-9 md:p-6 sm:p-5 p-4 border border-neutral-40 rounded-3xl ">
            <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex justify-between items-center w-full">
                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-brand-blue-800">
                        {title}
                    </h3>

                    <Link
                        href={`/collaboration/${_id}`}
                        className="flex gap-x-2.5 items-center"
                    >
                        <h3 className="text-brand-blue-500 text-sm whitespace-nowrap lg:text-base font-medium uppercase">
                            view all images
                        </h3>
                        <Image
                            alt="icon"
                            src={Icons.arrow_up_right_blue}
                            width={1000}
                            height={1000}
                            className="w-6 h-6"
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {selectedImages?.map((item, index) => (
                        <Image
                            key={index}
                            alt="collab-img"
                            className="col-span-1 rounded-md"
                            width={1000}
                            height={1000}
                            src={`${GET_IMAGE_RENDER}?key=${item}`}
                        />
                    ))}
                </div>

                <p className="line-clamp-2 leading-6 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Card;
