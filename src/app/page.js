import Layouts from "@/layouts";
import ChooseUsContainer from "@/sections/Home/ChooseUs/ChooseUsContainer";
import ContactUsSection from "@/sections/Home/ContactUsSection/ContactUsSection";
import HeroContainer from "@/sections/Home/Hero/HeroContainer";
import MainCategoriesContainer from "@/sections/Home/MainCategories/MainCategoriesContainer";
import MarketingContainer from "@/sections/Home/MarketingSection/MarketingContainer";
import OfferContainer from "@/sections/Home/Offer/OfferContainer";
import OurProductsContainer from "@/sections/Home/OurProducts/OurProductsContainer";
import PioneeringExcellenceContainer from "@/sections/Home/PioneeringExcellence/PioneeringExcellenceContainer";
import ProductContainer from "@/sections/Home/Product/ProductContainer";
import TestimonialSection from "@/sections/Home/TestimonialSection/TestimonialSection";
import HomeService from "@/services/HomeService";
import ProductService from "@/services/productsService";

export default async function Home() {

    const getTestimonials = HomeService.getTestimonials();

    const getMainCategories = HomeService.getMainCategories();

    const getNewProducts = ProductService.getProducts();

    const getFeaturedProducts = ProductService.getProducts({isFeatured:true});

    const getWhyUsLeftContents = HomeService.getWhyUsContents({sectionType:"leftSection"})

    const getWhyUsRightContents = HomeService.getWhyUsContents({sectionType:"rightSection"})

    const [testimonialsData,mainCategoriesData,featuredProducts,newProducts,whyUsLeftContents,whyUsRightContents] = await Promise.all([getTestimonials,getMainCategories,getFeaturedProducts,getNewProducts,getWhyUsLeftContents,getWhyUsRightContents]);


    return (
        <Layouts.Primary breadcrumb={false}>
            <HeroContainer />
            <ProductContainer featuredProducts={featuredProducts.docs}/>
            <MainCategoriesContainer mainCategoriesData={mainCategoriesData.docs}/>
            <OfferContainer />
            <MarketingContainer />
            <OurProductsContainer data={newProducts.docs}/>
            <ChooseUsContainer whyUsLeftContents={whyUsLeftContents.docs} whyUsRightContents={whyUsRightContents.docs}/>
            <PioneeringExcellenceContainer />
            <TestimonialSection testimonialsData={testimonialsData.docs}/>
            <ContactUsSection />
        </Layouts.Primary>
    );
}
