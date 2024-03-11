import React from "react";

function SingleMarketingSection({ data, index }) {
    return (
        <div
            className={`flex gap-9 justify-between ${
                index === 1
                    ? "flex-col lg:flex-row-reverse items-center"
                    : "flex-col lg:flex-row items-center"
            } `}
        >
            <div className="flex-1">
                <div
                    className={`flex flex-col  gap-4 sm:gap-5 md:gap-6 lg:gap-8  xl:gap-9 w-[100%] xl:w-[80%] text-left ${
                        index === 1 ? "ml-auto" : ""
                    }`}
                >
                    <p
                        className="text-xl lg:text-5xl md:text-4xl sm:text-3xl font-[600]  xl:leading-[72px] text-brand-blue-500"
                        // style={{ lineHeight: "72px" }}
                    >
                        {data.title}
                    </p>
                    <div className="flex flex-col gap-6">
                        {data.details.map((detail, indx) => (
                            <p
                                key={indx}
                                className="text-[14px] sm:text-[16px] lg:text-[20px] leading-[25px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-brand-blue-800"
                            >
                                {detail}
                            </p>
                        ))}
                    </div>
                    <button className="px-6 py-[14px] bg-[#0B2848] text-white rounded-[25px] w-full md:w-[283px] text-xs md:text-[16px]">
                        EXPLORE OUR STRAINS
                    </button>
                </div>
            </div>
            <div className="flex-1 rounded-[25px] relative">
                <div className="bg-[#C1AE91] opacity-75 xl:h-[650px] lg:h-[550px] md:h-[470px] sm:h-[400px] h-[350px] 2xl:w-[650px] lg:w-auto sm:w-[500px] rounded-[25px] shadow-lg">
                    <video
                        src={data.videoLink}
                        autoPlay
                        muted
                        loop
                        className="xl:h-[650px] lg:h-[550px] md:h-[470px] sm:h-[400px] h-[350px] 2xl:w-[650px] lg:w-auto sm:w-[500px] rounded-[25px] object-fill shadow-lg "
                    />
                </div>

                <div className="absolute w-[90%] 2xl:w-[78%] bottom-1 left-[5%] sm:left-[5%] right-[50%] inline-block mb-[-20px]  sm:mb-[-20px]  md:mb-[-30px] lg:mb-[-30px] border bg-transparent px-5 py-[8px] rounded-[25px]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[#0000001A] shadow-md">
                    <h3 className="text-center text-[12px] sm:text-base md:text-xl lg:text-xl xl:text-2xl    text-white py-[8px] sm:py-[12px] md:py-[16px] lg:py-[32px] xl:">
                        {data.videoDetails}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default SingleMarketingSection;
