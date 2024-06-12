"use client";
import { chooseUsData } from "@/libs/common";
import React, { useEffect, useRef, useState } from "react";
import ChooseUsCard from "./ChooseUsCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ChooseUsRightSide = ({ refId, whyUsRightContents }) => {
    // const [scrollEnabled, setScrollEnabled] = useState(true);
    // const scrollableRef = useRef(null);
    // const [activeScroll, setActiveScroll] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Get the scrollable section element
    //         const scrollableSection = scrollableRef.current;

    //         if (scrollableSection) {
    //             const rect = scrollableSection.getBoundingClientRect();
    //             const isVisible =
    //                 rect.top < window.innerHeight && rect.bottom >= 0;
    //             // const isVisible = rect.top <= 0 && rect.top >= -10;

    //             console.log(isVisible, rect.top);

    //             if (isVisible && !activeScroll) {
    //                 // Disable body scroll and enable scrollable section scroll
    //                 document.body.style.overflow = "hidden";
    //                 scrollableSection.style.overflowY = "auto";
    //             } else if (activeScroll) {
    //                 // Enable body scroll and disable scrollable section scroll
    //                 document.body.style.overflow = "auto";
    //                 scrollableSection.style.overflowY = "hidden";
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const handleInnerScroll = (e) => {
    //     const scrollableSection = scrollableRef.current;

    //     if (scrollableSection) {
    //         const { scrollTop, scrollHeight, clientHeight } = e.target;

    //         if (scrollHeight - scrollTop === clientHeight) {
    //             // User has reached the bottom of the inner section
    //             document.body.style.overflow = "auto";
    //             scrollableSection.style.overflowY = "hidden";
    //             setActiveScroll(true);
    //             window.scrollTo({
    //                 top: window.scrollY + 400,
    //                 behavior: "smooth",
    //             });
    //         } else if (scrollTop === 0) {
    //             document.body.style.overflow = "auto";
    //             scrollableSection.style.overflowY = "hidden";
    //             setActiveScroll(true);
    //             window.scrollTo({
    //                 top: window.scrollY - 400,
    //                 behavior: "smooth",
    //             });
    //         } else {
    //             setActiveScroll(false);
    //         }
    //     }
    // };

    // const sectionOneRef = useRef(null);
    // const textOneRef = useRef(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const textOne = textOneRef.current;
    //     // const textTwo = textTwoRef.current;

    //     const tweenOne = gsap.to(textOne, {
    //         y: 400 - textOne.clientHeight - 32,
    //         scrollTrigger: {
    //             trigger: sectionOneRef.current,
    //             pin: sectionOneRef.current,
    //             scrub: true,
    //             start: "top top",
    //             end: "+=700px",
    //             markers: true,
    //         },
    //     });

    //     // const tweenTwo = gsap.to(textTwo, {
    //     //   y: 400 - textTwo.clientHeight - 32,
    //     //   scrollTrigger: {
    //     //     trigger: sectionTwoRef.current,
    //     //     pin: sectionTwoRef.current,
    //     //     scrub: true,
    //     //     start: "top top",
    //     //     end: "+=700px",
    //     //     markers: true
    //     //   }
    //     // });

    //     // Cleanup
    //     return () => {
    //         tweenOne.kill();
    //     };
    // }, []);

    return (
        <div className="lg:col-span-7 col-span-12 h-[40rem] overflow-auto choose-us-scroll">
            <div
                id="scrollable-section"
                // ref={scrollableRef}
                ref={refId}
                // style={{ overflowY: scrollEnabled && "auto" }}
                className="space-y-12"
                // onScroll={handleInnerScroll}
            >
                {whyUsRightContents.map((item, index) => (
                    <ChooseUsCard index={index} key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ChooseUsRightSide;
