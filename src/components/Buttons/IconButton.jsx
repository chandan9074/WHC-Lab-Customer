"use client";
import Image from "next/image";
import React from "react";

const IconBtn = ({ icon, alt, width, height, className, ...rest }) => {
    return (
        <button className={className} {...rest}>
            <Image
                src={icon}
                alt={alt}
                width={1000}
                height={1000}
                className={`${width} ${height}`}
            />
        </button>
    );
};

export default IconBtn;
