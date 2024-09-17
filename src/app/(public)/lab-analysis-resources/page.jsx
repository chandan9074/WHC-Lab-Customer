import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import React from "react";
import DownloadableResource from "@/components/common/DownloadableResource";
import ResourceService from "@/services/ResourcesService";

import { headers } from "next/headers";
function IP() {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function LabAnalysisResources() {
    const ip = IP();

    const getResources = await ResourceService.getResources(
        "LAB_ANALYSIS_RESOURCES",
        ip
    );

    return (
        <Layouts.Primary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading="Lab Analysis Resources" />
            <InfoPagesContainer>
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-blue-500">
                        LAB ANALYSIS Resources
                    </h3>

                    <div
                        className={` ${
                            getResources?.docs?.length > 0
                                ? ""
                                : "flex items-center justify-center"
                        }`}
                    >
                        {getResources?.docs?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {getResources?.docs?.map((data, index) => (
                                    <>
                                        <DownloadableResource
                                            key={index}
                                            text={data.originalFilename}
                                            link={data.key}
                                        />
                                    </>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="bg-slate-300 w-[60%] h-[10rem] flex items-center justify-center rounded-md">
                                    <h4 className="text-lg font-medium">
                                        No resource found
                                    </h4>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </InfoPagesContainer>
        </Layouts.Primary>
    );
}

export default LabAnalysisResources;
