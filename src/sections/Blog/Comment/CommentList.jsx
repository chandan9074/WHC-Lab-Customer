"use client";
import Text from "@/components/Text";
import { formatDate } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "../../../../public/assets/Icons";
import Buttons from "@/components/Buttons";

function CommentList({ comments }) {
    // const comments = Array(4).fill();
    const initialDisplayCount = 3;
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const [commentList, setCommentList] = useState([]);

    const handleShowMore = () => {
        setDisplayCount((prevCount) => prevCount + initialDisplayCount);
    };
    const handleShowLess = () => {
        setDisplayCount(initialDisplayCount);
    };

    useEffect(() => {
        setCommentList(comments);
    }, [comments]);

    return (
        <div>
            <Text.Secondary>Comment</Text.Secondary>

            {commentList.slice(0, displayCount).map((comment, index) => (
                <div
                    className={`py-6 flex gap-6 ${
                        index !== comments.length - 1
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
            <div className="w-full flex justify-center mt-6">
                {commentList.length > displayCount ? (
                    <Buttons.OutlinedButton
                        label="Show more"
                        onClick={handleShowMore}
                    />
                ) : (
                    commentList.length > initialDisplayCount && (
                        <Buttons.OutlinedButton
                            label="Show less"
                            onClick={handleShowLess}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default CommentList;
