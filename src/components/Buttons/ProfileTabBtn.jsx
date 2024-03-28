import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const ProfileTabBtn = ({
    label,
    icon,
    alt,
    iconWidth,
    iconHeight,
    className,
    active,
    ...rest
}) => {
    return (
        <button
            className={`${className} w-full h-12 flex justify-between`}
            {...rest}
        >
            <div className="flex items-center gap-x-2">
                <Image
                    src={icon}
                    alt={alt}
                    width={1000}
                    height={1000}
                    className={`${iconWidth} ${iconHeight}`}
                />
                <p
                    className={`text-sm ${
                        active
                            ? "text-brand-blue-500"
                            : label === "Logout"
                            ? "text-error-500"
                            : "text-neutral-400"
                    } ${
                        active
                            ? "font-medium md:font-semibold"
                            : "font-normal md:font-medium"
                    } `}
                >
                    {label}
                </p>
            </div>

            {active && (
                <Image
                    src={Icons.active}
                    alt="save"
                    width={1000}
                    height={1000}
                    className="w-6 h-6"
                />
            )}
        </button>
    );
};

export default ProfileTabBtn;
