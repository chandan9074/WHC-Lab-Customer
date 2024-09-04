import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import dynamic from "next/dynamic";
import Layouts from "@/layouts";
import { Suspense } from "react";
import DistributorsService from "@/services/DistributorsService";

const DistributorContainer = dynamic(
    () => import("@/sections/OurDistributors/DistributorContainer"),
    {
        ssr: false,
    }
);

import { headers } from "next/headers";
function IP() {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

const OurDistributors = async (params) => {
    const ip = IP();

    const getDistributors = DistributorsService.getDistributors({}, ip);
    const getDistinctCountry = DistributorsService.getDistinctCountry(ip);
    const getDistinctCategory = DistributorsService.getDistinctCategory(ip);

    const [distributorsData, distinctCountry, distinctCategory] =
        await Promise.all([
            getDistributors,
            getDistinctCountry,
            getDistinctCategory,
        ]);

    // console.log("distributorsData-----", distributorsData);
    // console.log("ctgry-----", distinctCategory);

    return (
        <Suspense fallback={null}>
            <Layouts.Primary>
                <InfoPagesContainer>
                    <DistributorContainer
                        distinctCategory={distinctCategory.doc}
                        distinctCountry={distinctCountry.doc}
                        distributorsData={distributorsData.docs}
                    />
                </InfoPagesContainer>
            </Layouts.Primary>
        </Suspense>
    );
};

export default OurDistributors;
