import { formatDate } from "@/utils";
import React from "react";
import Images from "../../../public/assets/Images";
import Text from "@/components/Text";
import Image from "next/image";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Link from "next/link";

function RecentPost({ data }) {
    const recentPosts = data.slice(0, 4);
    // console.log("ungabunga----------", recentPosts);
    return (
        <div className="p-6 border border-stroke-new rounded-2xl bg-white flex flex-col gap-8 md:gap-9">
            <Text.Secondary>Recent Post</Text.Secondary>

            <div className="flex flex-col gap-6">
                {recentPosts?.map((post, index) => (
                    <Link
                        href={`/blog/${post?._id}`}
                        className="flex gap-3 items-start"
                        key={index}
                    >
                        <Image
                            src={`${GET_IMAGE_RENDER}?key=${post.featuredImage}`}
                            alt="Icon"
                            width={1000}
                            height={1000}
                            className="w-[50px] h-[100%]"
                        />
                        <div>
                            <p className="text-base font-medium clamp cursor-pointer text-brand-blue-800">
                                {post.title}
                            </p>
                            <p className="text-neutral-400">
                                {formatDate(post.createdAt)}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecentPost;
