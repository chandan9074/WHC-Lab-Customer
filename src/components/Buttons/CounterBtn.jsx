"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";

const CounterBtn = ({
    className,
    handleCurrentCount,
    maxLimit,
    current,
    disabled,
    rest,
}) => {
    const [counter, setCounter] = useState(current || 1);

    const handleEffect = useCallback(() => {
        handleCurrentCount(counter);
        if (maxLimit < counter) {
            setCounter(1);
        }
    }, [counter, handleCurrentCount, maxLimit]);

    useEffect(() => {
        handleEffect();
    }, [handleEffect]);

    return (
        <div
            className={`flex justify-between items-center w-[120px] lg:w-40 h-14 rounded-full bg-transparent border border-brand-blue-100 px-4 ${className}`}
        >
            <button
                onClick={() => counter > 1 && setCounter(counter - 1)}
                disabled={disabled}
            >
                <Image
                    width={1000}
                    height={1000}
                    alt="minus icon"
                    src={counter > 1 ? Icons.minus : Icons.disabled_minus}
                    className="w-5 h-5"
                />
            </button>
            <span className="flex justify-center text-neutral-800 text-lg font-normal">
                {current < counter ? current : counter}
            </span>

            <button
                onClick={() => counter < maxLimit && setCounter(counter + 1)}
                disabled={disabled}
            >
                <Image
                    width={1000}
                    height={1000}
                    alt="plus icon"
                    src={maxLimit <= counter ? Icons.disabled_plus : Icons.plus}
                    className="w-5 h-5"
                />
            </button>
        </div>
    );
};

export default CounterBtn;
