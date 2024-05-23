import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Images from "../../../public/assets/Images";

function BlogInfoCard({ data }) {
    return (
        <Link href={`/blog/${data?._id}`}>
            <div className="border border-stroke-new rounded-2xl bg-white group">
                <div className="w-full h-[214px] lg:h-[300px] overflow-hidden rounded-t-2xl">
                    <Image
                        src={`${GET_IMAGE_RENDER}?key=${data?.featuredImage}`}
                        alt="search"
                        width={1000}
                        height={1000}
                        className="w-full h-[214px] lg:h-[300px] object-cover group-hover:scale-110 duration-300"
                    />
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-brand-blue-500 bg-stroke-white px-2 py-[1px] rounded">
                            {data?.categoryName}
                        </p>
                        <p className="text-brand-blue-300">
                            {formatDate(data?.createdAt)}
                        </p>
                    </div>
                    <div className="h-12">
                        <p className="font-montserrat text-base font-semibold clamp cursor-pointer text-brand-blue-800">
                            {data?.title}
                        </p>
                    </div>
                    <div className="h-[1px] bg-stroke-new"></div>
                    <div className="flex gap-4 items-center">
                        <Image
                            src={
                                data?.authorDetails?.profilePicture
                                    ? `${GET_IMAGE_RENDER}?key=${data?.authorDetails?.profilePicture}`
                                    : Images.profile_avatar
                            }
                            alt="search"
                            width={1000}
                            height={1000}
                            className={`w-[48px] h-[48px] cursor-pointer rounded-full`}
                        />
                        <p className="font-montserrat text-base font-semibold text-brand-blue-800">
                            {" "}
                            {`${
                                data?.authorDetails?.firstName
                                    ? data?.authorDetails?.firstName
                                    : "--"
                            } ${
                                data?.authorDetails?.lastName
                                    ? data?.authorDetails?.lastName
                                    : "--"
                            }`}{" "}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogInfoCard;
