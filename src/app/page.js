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

export default async function Home() {
    const getTestimonials = HomeService.getTestimonials();

    const getMainCategories = HomeService.getMainCategories();

    const getNewProducts = ProductService.getProducts();

    const getFeaturedProducts = ProductService.getProducts({
        isFeatured: true,
    });

    const getWhyUsLeftContents = HomeService.getWhyUsContents({
        sectionType: "leftSection",
    });

    const getWhyUsRightContents = HomeService.getWhyUsContents({
        sectionType: "rightSection",
    });

    const getStrains = HomeService.getStrains();

    const getCollaborations = CollaborationService.getCollaborations();

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
