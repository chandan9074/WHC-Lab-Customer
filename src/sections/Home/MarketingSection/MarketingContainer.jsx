import React from "react";

const MarketingContainer = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto px-6 sm:px-3 lg:py-20 sm:py-5 py-4 space-y-10 ">
                {marketingSectionData.map((data, index) => {
                    // console.log(data.videoLink);
                    return (
                        <div
                            className={`flex gap-6 justify-between ${
                                index === 1
                                    ? "flex-col lg:flex-row-reverse"
                                    : "flex-col lg:flex-row"
                            } `}
                            key={index}
                        >
                            <div className="flex-1 ">
                                <div
                                    className={`flex flex-col gap-4 w-[100%] lg:w-[80%] text-left ${
                                        index === 1 ? "ml-auto" : ""
                                    }`}
                                >
                                    <h2 className="text-[24px] lg:text-[48px] font-[600]">
                                        {data.title}
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {data.details.map((data, indx) => (
                                            <p
                                                key={indx}
                                                className="text-[16px] lg:text-[20px]"
                                            >
                                                {data}
                                            </p>
                                        ))}
                                    </div>
                                    <button className="px-6 py-[14px] bg-[#0B2848] text-white rounded-[25px] w-full md:w-[283px] text-xs md:text-[16px]">
                                        EXPLORE OUR STRAINS
                                    </button>
                                </div>
                            </div>
                            {/* <div className=" w-[587px] h-[650px]  rounded-[25px] relative">
                                <video
                                    src={data.videoLink}
                                    autoPlay
                                    muted
                                    loop
                                    // className="w-[587px] h-[760px] rounded-[25px] "
                                    width="587"
                                    height="650"
                                />

                                <div className="absolute w-[90%]  bottom-1 left-[5%] sm:left-[5%] right-[50%] inline-block mb-[-20px]  sm:mb-[-20px]  md:mb-[-30px] lg:mb-[-30px] border bg-slate-400 px-5 py-5 rounded-[25px]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-400">
                                    <h3 className="text-center text-[12px] lg:text-[24px] text-white">
                                        {data.videoDetails}
                                    </h3>
                                </div>
                            </div> */}
                        </div>
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
        videoLink: "/marketing_section_v1.mp4",
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
