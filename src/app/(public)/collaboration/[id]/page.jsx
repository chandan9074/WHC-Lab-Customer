import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import CollaborationService from "@/services/CollaborationService";
import Image from "next/image";
import React from "react";

async function CollaborationDetailsPage({ params }) {
    const collaborationId = params.id;

    const getCollaboration = await CollaborationService.getCollaboration(
        collaborationId
    );

    return (
        <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-10 md:pb-20 mt-10">
            <div className="flex flex-col gap-5 mb-5">
                <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-brand-blue-800">
                    {getCollaboration?.doc?.title}
                </h3>
                <p className="leading-6 text-base text-justify">
                    {getCollaboration?.doc?.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {getCollaboration?.doc?.images.map((item, index) => (
                    <Image
                        key={index}
                        alt="collab-img"
                        className="col-span-1 rounded-md"
                        width={1000}
                        height={1000}
                        src={`${GET_IMAGE_RENDER}?key=${item}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default CollaborationDetailsPage;
