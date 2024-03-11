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
                    className={`flex flex-col gap-4 w-[100%] xl:w-[80%] text-left ${
                        index === 1 ? "ml-auto" : ""
                    }`}
                >
                    <h2 className="text-xl lg:text-5xl md:text-4xl sm:text-3xl font-[600]">
                        {data.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {data.details.map((detail, indx) => (
                            <p
                                key={indx}
                                className="text-[16px] lg:text-[20px]"
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
                <div className="bg-[#C1AE91] opacity-75 xl:h-[650px] lg:h-[550px] md:h-[470px] sm:h-[400px] h-[350px] 2xl:w-[650px] lg:w-auto sm:w-[500px] rounded-[25px]">
                    <video
                        src={data.videoLink}
                        autoPlay
                        muted
                        loop
                        className=" xl:h-[650px] lg:h-[550px] md:h-[470px] sm:h-[400px] h-[350px] 2xl:w-[650px] lg:w-auto sm:w-[500px] rounded-[25px] object-fill"
                    />
                </div>

                <div className="absolute w-[90%] 2xl:w-[78%] bottom-1 left-[5%] sm:left-[5%] right-[50%] inline-block mb-[-20px]  sm:mb-[-20px]  md:mb-[-30px] lg:mb-[-30px] border bg-slate-400 px-5 py-5 rounded-[25px]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-400">
                    <h3 className="text-center text-[12px] lg:text-2xl md:text-xl sm:text-base  text-white">
                        {data.videoDetails}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default SingleMarketingSection;
