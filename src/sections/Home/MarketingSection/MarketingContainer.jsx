import React from "react";
import SingleMarketingSection from "./SingleMarketingSection";

const MarketingContainer = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto px-6 sm:px-3  lg:py-[120px] sm:py-5 py-9  flex flex-col gap-[36px] sm:gap-10 md:gap-16 xl:gap-[120px] ">
                {marketingSectionData.map((data, index) => {
                    return (
                        <SingleMarketingSection
                            key={index}
                            data={data}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MarketingContainer;

const marketingSectionData = [
    {
        title: "Brewing Brilliance, Every Batch!",
        details: [
            "We work closely with 100s of breweries globally to make sure our product is of the absolute highest quality. We can help with strain selection or increasing fermentation performance for new beers or improve old ones. We can help improve any processes within the breweries with a consultation. ",
            "Our R&D Laboratory can help with keeping your QC within in check for batch releases and screen for any contaminants within the brewery.",
        ],

        link: "",
        videoLink: "/marketing_section_video.mp4",
        videoDetails:
            "We work closely with 100s of breweries globally to make sure our product is of the absolute highest quality. ",
    },
    {
        title: "Elevate Your Distilling Game!",
        details: [
            "Interested in any spirit production. We can help with increasing performance within the distillery or developing new products. Whether efficiency, flavor improvement or fermentation improvement is the goal we can help.",
            "We currently offer liquid, cream or dried distillers yeast so we have something for every business.",
        ],
        link: "",
        videoLink: "./megamenu-video.mp4",
        videoDetails:
            "We can help with increasing performance within the distillery or developing new products.",
    },
];
