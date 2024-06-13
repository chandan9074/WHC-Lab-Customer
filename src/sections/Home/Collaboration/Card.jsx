import Buttons from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../../../../public/assets/Icons";

function Card({ data }) {
    const { title, description, images } = data;

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
            <div className="flex flex-row justify-between items-center">
                <div className="flex justify-between">
                    <h3 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-medium text-brand-blue-800">
                        {title}
                    </h3>

                    <Link href={"#"} className="flex gap-x-2.5 items-center">
                        <h3 className="text-brand-blue-500 text-sm lg:text-base font-semibold uppercase">
                            view all images
                        </h3>
                        <Image
                            alt="icon"
                            src={Icons.arrow_up_right_blue}
                            width={1000}
                            height={1000}
                            className=""
                        />
                    </Link>
                </div>
                <div className="w-full md:w-[283px]">
                    <Buttons.IconWithLabel
                        label={"EXPLORE OUR STRAINS"}
                        className="bg-white text-black"
                        bgHoverColor="bg-white text-black"
                        // onClick={() =>
                        //     router.push("/store?category=Brewing+Yeast")
                        // }
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
