import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Images from "../../../public/assets/Images";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";

function AuthorInfo({ data }) {
    console.log({ data });
    return (
        <div className="p-6 bg-stroke-new-10 bg-opacity-50 flex rounded-2xl gap-4 w-full md:w-1/3">
            <Image
                src={
                    data?.profilePicture
                        ? `${GET_IMAGE_RENDER}?key=${data?.profilePicture}`
                        : Images.profile_avatar
                }
                alt="Icon"
                width={1000}
                height={1000}
                className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col gap-1">
                <p className="text-brand-blue-500 font-semibold text-base md:text-lg">
                    {`${data?.firstName ? data?.firstName : "--"} ${
                        data?.lastName ? data?.lastName : "--"
                    }`}
                </p>
                <p className="text-sm text-neutral-400">Business Owner</p>
            </div>
        </div>
    );
}

export default AuthorInfo;
