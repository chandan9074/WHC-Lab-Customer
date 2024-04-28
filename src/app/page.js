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
import { getCookie } from "cookies-next";
import {cookies} from "next/headers"

export default async function Home() {

    const token = getCookie("accessToken",{cookies});

    const getTestimonials = HomeService.getTestimonials(token);

    const getMainCategories = HomeService.getMainCategories(token);

    const getNewProducts = ProductService.getProducts();

    const getFeaturedProducts = ProductService.getProducts({isFeatured:true});

    const [testimonialsData,mainCategoriesData,featuredProducts,newProducts] = await Promise.all([getTestimonials,getMainCategories,getFeaturedProducts,getNewProducts]);

    console.log("categories----------------",newProducts.docs);

    return (
        <Layouts.Primary>
            <HeroContainer />
            <ProductContainer featuredProducts={featuredProducts.docs}/>
            <MainCategoriesContainer mainCategoriesData={mainCategoriesData.docs}/>
            <OfferContainer />
            <MarketingContainer />
            <OurProductsContainer data={newProducts.docs}/>
            <ChooseUsContainer />
            <PioneeringExcellenceContainer />
            <TestimonialSection testimonialsData={testimonialsData.docs}/>
            <ContactUsSection />
        </Layouts.Primary>
    );
}
