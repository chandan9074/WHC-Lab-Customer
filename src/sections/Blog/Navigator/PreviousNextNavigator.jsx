"use client";
import Image from "next/image";
import React from "react";
import Icons from "../../../../public/assets/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

function PreviousNextNavigator({ next = false, data }) {
    const router = useRouter();
    return (
        <button
            // href={`/blog/${data?._id}`}
            onClick={() => router.push(`/blog/${data?._id}`)}
            disabled={data?._id ? false : true}
            className={`flex ${
                next ? "flex-row-reverse" : "justify-start"
            } w-full md:w-1/2 gap-4 items-center text-left`}
        >
            <div className="border border-brand-blue-500 rounded-full">
                <Image
                    src={Icons.chevron_small_left}
                    alt="Icon"
                    width={1000}
                    height={1000}
                    className={`w-[30px] h-[30px] md:w-[35px] md:h-[35px] p-1 md:p-2 ${
                        next ? "rotate-180" : ""
                    } `}
                />
            </div>
            <div className="flex flex-col">
                <p className="text-brand-blue-500 text-base md:text-lg font-semibold font-montserrat">
                    {next ? "Next" : "Previous"}
                </p>
                <p className="text-brand-blue-400 text-sm md:text-base font-normal hidden md:block">
                    {data?.title}
                </p>
            </div>
        </button>
    );
}

export default PreviousNextNavigator;
