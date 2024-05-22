import { currencyData } from "@/libs/common";
import React from "react";

const PriceFormatter = ({
    fontSize,
    color,
    variant,
    price,
    fontWeight,
    className,
    currency,
}) => {
    const priceVariant = {
        default: ` ${fontSize ? fontSize : "text-[15px] lg:text-base"} ${
            color ? color : "text-neutral-400"
        } ${fontWeight ? fontWeight : "font-medium"} `,
        secondary: ` line-through ${
            fontSize ? fontSize : "text-[11px] lg:text-[15px]"
        } ${color ? color : "text-neutral-400"} ${
            fontWeight ? fontWeight : "font-semibold"
        }`,
    };
    return (
        <div className="flex gap-1">
            <p
                className={`whitespace-nowrap ${className} ${priceVariant[variant]}`}
            >
                {currencyData[currency]?.icon} {price}
            </p>
        </div>
    );
};

export default PriceFormatter;
