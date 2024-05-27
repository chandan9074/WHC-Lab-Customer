import ResourceService from "@/services/ResourcesService";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";

function Documentation({ data }) {
    return (
        <div className="flex flex-col mt-5">
            <h3 className="mb-4">Documentation</h3>
            {data?.downloadable.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="cursor-pointer flex flex-row items-center gap-1"
                    >
                        <Image
                            src={Icons.download}
                            width={1000}
                            height={1000}
                            alt="download"
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <h1
                            className="font-medium"
                            onClick={() =>
                                ResourceService.downloadResource(item?.key)
                            }
                        >
                            {item.originalFilename}
                        </h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Documentation;
