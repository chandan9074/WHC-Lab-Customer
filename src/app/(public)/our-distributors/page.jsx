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

const OurDistributors = async (params) => {
    const getDistributors = DistributorsService.getDistributors();
    const getDistinctCountry = DistributorsService.getDistinctCountry();
    const getDistinctCategory = DistributorsService.getDistinctCategory();

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
