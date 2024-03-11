"use client";
import { chooseUsData } from "@/libs/common";
import React, { useEffect, useRef, useState } from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUsRightSide = () => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const scrollableRef = useRef(null);
    const [activeScroll, setActiveScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the scrollable section element
            const scrollableSection = scrollableRef.current;

            if (scrollableSection) {
                const rect = scrollableSection.getBoundingClientRect();
                // const isVisible =
                //     rect.top < window.innerHeight && rect.bottom >= 0;
                const isVisible = rect.top <= 0 && rect.top >= -10;

                console.log(isVisible, rect.top);

                if (isVisible && !activeScroll) {
                    // Disable body scroll and enable scrollable section scroll
                    document.body.style.overflow = "hidden";
                    scrollableSection.style.overflowY = "auto";
                } else if (activeScroll) {
                    // Enable body scroll and disable scrollable section scroll
                    document.body.style.overflow = "auto";
                    scrollableSection.style.overflowY = "hidden";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleInnerScroll = (e) => {
        const scrollableSection = scrollableRef.current;

        if (scrollableSection) {
            const { scrollTop, scrollHeight, clientHeight } = e.target;

            if (scrollHeight - scrollTop === clientHeight) {
                // User has reached the bottom of the inner section
                document.body.style.overflow = "auto";
                scrollableSection.style.overflowY = "hidden";
                setActiveScroll(true);
                window.scrollTo({
                    top: window.scrollY + 400,
                    behavior: "smooth",
                });
            } else if (scrollTop === 0) {
                document.body.style.overflow = "auto";
                scrollableSection.style.overflowY = "hidden";
                setActiveScroll(true);
                window.scrollTo({
                    top: window.scrollY - 400,
                    behavior: "smooth",
                });
            } else {
                setActiveScroll(false);
            }
        }
    };

    return (
        <div className="lg:col-span-7 col-span-12 ">
            <div
                id="scrollable-section"
                ref={scrollableRef}
                // style={{ overflowY: scrollEnabled && "auto" }}
                className="space-y-12 h-[40rem]"
                onScroll={handleInnerScroll}
            >
                {chooseUsData.map((item) => (
                    <ChooseUsCard key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ChooseUsRightSide;
