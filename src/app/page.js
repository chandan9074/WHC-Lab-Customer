import Layouts from "@/layouts";
import ChooseUsContainer from "@/sections/Home/ChooseUs/ChooseUsContainer";
import CollaborationSection from "@/sections/Home/Collaboration/HomeSection";
import ContactUsSection from "@/sections/Home/ContactUsSection/ContactUsSection";
import HeroContainer from "@/sections/Home/Hero/HeroContainer";
import MainCategoriesContainer from "@/sections/Home/MainCategories/MainCategoriesContainer";
import MarketingContainer from "@/sections/Home/MarketingSection/MarketingContainer";
import OfferContainer from "@/sections/Home/Offer/OfferContainer";
import OurProductsContainer from "@/sections/Home/OurProducts/OurProductsContainer";
import PioneeringExcellenceContainer from "@/sections/Home/PioneeringExcellence/PioneeringExcellenceContainer";
import PopupModalComponent from "@/sections/Home/PopupModalSection";
import ProductContainer from "@/sections/Home/Product/ProductContainer";
import TestimonialSection from "@/sections/Home/TestimonialSection/TestimonialSection";
import CollaborationService from "@/services/CollaborationService";
import HomeService from "@/services/HomeService";
import ProductService from "@/services/productsService";
import { headers } from "next/headers";

function IP() {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export default async function Home() {
    const ip = IP();
    // const requestHeaders = headers();

    // Check the headers for the client's IP address
    // const ipAddress =
    //     requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
    //     requestHeaders.get("x-real-ip") ||
    //     requestHeaders.get("cf-connecting-ip") ||
    //     requestHeaders.get("x-client-ip") ||
    //     requestHeaders.get("x-forwarded") ||
    //     requestHeaders.get("forwarded-for") ||
    //     requestHeaders.get("forwarded") ||
    //     "unknown";

    // console.log({ ipAddress });

    const getTestimonials = HomeService.getTestimonials(ip);

    const getMainCategories = HomeService.getMainCategories(ip);

    const getNewProducts = ProductService.getProducts({}, ip);

    const getFeaturedProducts = ProductService.getProducts({
        isFeatured: true,
        ip,
    });

    const getWhyUsLeftContents = HomeService.getWhyUsContents(
        {
            sectionType: "leftSection",
        },
        ip
    );

    const getWhyUsRightContents = HomeService.getWhyUsContents(
        {
            sectionType: "rightSection",
        },
        ip
    );

    const getStrains = HomeService.getStrains(ip);

    const getCollaborations = CollaborationService.getCollaborations(1, 3, ip);

    const [
        testimonialsData,
        mainCategoriesData,
        featuredProducts,
        newProducts,
        whyUsLeftContents,
        whyUsRightContents,
        strainsData,
        collaborationData,
    ] = await Promise.all([
        getTestimonials,
        getMainCategories,
        getFeaturedProducts,
        getNewProducts,
        getWhyUsLeftContents,
        getWhyUsRightContents,
        getStrains,
        getCollaborations,
    ]);

    return (
        <Layouts.Primary breadcrumb={false}>
            <HeroContainer />
            <ProductContainer featuredProducts={featuredProducts.docs} />
            <MainCategoriesContainer
                mainCategoriesData={mainCategoriesData.docs}
            />
            <OfferContainer />
            <MarketingContainer strainsData={strainsData.docs} />
            <OurProductsContainer data={newProducts.docs} />
            <CollaborationSection data={collaborationData} />
            <ChooseUsContainer
                whyUsLeftContents={whyUsLeftContents.docs}
                whyUsRightContents={whyUsRightContents.docs}
            />
            <PioneeringExcellenceContainer />
            <TestimonialSection testimonialsData={testimonialsData.docs} />
            <ContactUsSection />
            <PopupModalComponent pageLocation="homepage" />
        </Layouts.Primary>
    );
}
