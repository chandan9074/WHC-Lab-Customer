"use client";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    Xs,
} from "next-share";

function SocialMediaShare({ title, quote, hashtag }) {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const formattedHashtags = hashtag.map((tag) => `#${tag}`).join("");
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/3">
            <p className="text-sm md:text-base font-medium text-neutral-400">
                {title}
            </p>
            <div className="flex items-center gap-4">
                {/* <Image
                    src={Icons.facebook_regular}
                    alt="Icon"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px] p-2 rounded-full bg-stroke-new-10"
                /> */}
                <FacebookShareButton
                    url={shareUrl}
                    quote={quote}
                    hashtag={formattedHashtags}
                >
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton
                    url={shareUrl}
                    quote={quote}
                    hashtag={formattedHashtags}
                >
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton
                    url={shareUrl}
                    quote={quote}
                    hashtag={formattedHashtags}
                >
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
            </div>
        </div>
    );
}

export default SocialMediaShare;
