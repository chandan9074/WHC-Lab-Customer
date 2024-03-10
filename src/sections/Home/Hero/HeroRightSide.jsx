import React from "react";
// import heroVideo from "../../../../public/assets/hero-video.mp4";

const HeroRightSide = () => {
    return (
        <div className="relative">
            {/* <video controls>
                <source src={"/hero-video.mp4"} type="video/mp4" />
            </video> */}
            {/* <iframe
                src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
                frameborder="0"
                allowfullscreen
            /> */}
            <video
                src={require("./hero-video.mp4")}
                autoPlay
                muted
                loop
                className="w-full h-[180px] md:h-[384px] md:absolute md:top-0 md:-z-10"
            />
        </div>
    );
};

export default HeroRightSide;
