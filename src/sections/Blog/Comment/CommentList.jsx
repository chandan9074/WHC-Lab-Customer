"use client";
import Text from "@/components/Text";
import { formatDate } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "../../../../public/assets/Icons";
import Buttons from "@/components/Buttons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";

function CommentList({ comments }) {
    // const comments = Array(4).fill();
    console.log(comments, "hello");
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
                    className={`py-6 flex gap-5 ${
                        index !== commentList.slice(0, displayCount).length - 1
                            ? "border-b border-stroke-new"
                            : ""
                    }`}
                    key={index}
                >
                    <Image
                        src={`${GET_IMAGE_RENDER}?key=${comment?.author?.profilePic}`}
                        alt="Icon"
                        width={1000}
                        height={1000}
                        className="w-[48px] h-[48px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-brand-blue-500 text-base font-medium leading-6">
                            {comment?.author?.authorName}
                        </p>
                        <p className="text-[#474D66] text-sm font-normal leading-5">
                            {formatDate(comment?.createdAt)}
                        </p>
                        <p className="text-neutral-400 text-base font-normal leading-6 mt-2">
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
