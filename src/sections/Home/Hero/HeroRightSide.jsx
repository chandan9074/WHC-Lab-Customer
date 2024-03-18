import React from "react";

const HeroRightSide = () => {
    return (
        <div className="relative">
            <video
                src={"/hero-video.mp4"}
                autoPlay
                muted
                loop
                className="w-full h-[180px] sm:h-[280px] md:h-[384px] md:absolute md:top-0 md:-z-10"
            />
        </div>
    );
};

export default HeroRightSide;
