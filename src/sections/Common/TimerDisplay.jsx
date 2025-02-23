import React, { useCallback, useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

const TimerDisplay = ({ timeRemaining, setTimeRemaining }) => {
    const memoizedSetCookie = useCallback((name, value) => {
        setCookie(name, value, {
            maxAge: 60 * 60 * 12,
        });
    }, []);

    const memoizedDeleteCookie = useCallback((name) => {
        deleteCookie(name);
    }, []);

    useEffect(() => {
        const initialTime = getCookie("timeRemaining");
        if (initialTime) {
            initialTime === "0"
                ? setTimeRemaining(300)
                : setTimeRemaining(initialTime);
        }

        return () => {
            memoizedDeleteCookie("timeRemaining");
        };
    }, [memoizedDeleteCookie, setTimeRemaining]);

    useEffect(() => {
        if (timeRemaining > 0) {
            const intervalId = setInterval(() => {
                setTimeRemaining((time) => {
                    const newTime = time - 1;
                    memoizedSetCookie("timeRemaining", newTime);
                    return newTime;
                });
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timeRemaining, memoizedSetCookie, setTimeRemaining]);

    return (
        <>
            {/* {timeRemaining === 0 ? (
                <p
                    onClick={resetTimer}
                    className="text-neutral-700 text-sm font-semibold cursor-pointer"
                >
                    Re-send Code
                </p>
            ) : (
                <p className="text-neutral-300 text-sm font-normal leading-[18.23px]">
                    {`${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60)
                        .toString()
                        .padStart(2, "0")}`}
                </p>
            )} */}
            <p className="text-neutral-300 text-sm font-normal leading-[18.23px]">
                {`${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60)
                    .toString()
                    .padStart(2, "0")}`}
            </p>
        </>
    );
};

export default React.memo(TimerDisplay);
