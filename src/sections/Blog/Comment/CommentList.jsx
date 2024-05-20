"use client";
import Text from "@/components/Text";
import { formatDate } from "@/utils";
import Image from "next/image";
import React from "react";
import Icons from "../../../../public/assets/Icons";

function CommentList({ comment }) {
    // const comments = Array(4).fill();

    return (
        <div>
            <Text.Secondary>Comment</Text.Secondary>

            {comment.map((comment, index) => (
                <div
                    className={`py-6 flex gap-6 ${
                        index !== comment.length - 1
                            ? "border-b border-stroke-new"
                            : ""
                    }`}
                    key={index}
                >
                    <Image
                        src={Icons.user_avatar}
                        alt="Icon"
                        width={1000}
                        height={1000}
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-brand-blue-500 text-base font-medium">
                            {comment?.author?.authorName}
                        </p>
                        <p className="text-brand-blue-800 text-sm font-normal">
                            {formatDate(comment?.createdAt)}
                        </p>
                        <p className="text-brand-blue-400 text-base font-normal mt-2">
                            {comment.commentText}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
