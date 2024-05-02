import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import React from "react";
import DownloadableResource from "@/components/common/DownloadableResource";
import ResourceService from "@/services/ResourcesService";

async function BreweryResources() {
    const getResources = await ResourceService.getResources(
        "BREWIGN_RESOURCES"
    );
    console.log({ getResources });

    return (
        <Layouts.Secondary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading="BREWING RESOURCES" />
            <InfoPagesContainer>
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-blue-500">
                        BREWING RESOURCES
                    </h3>

                    <div className="flex items-center justify-center">
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
        </Layouts.Secondary>
    );
}

export default BreweryResources;
