import Layouts from "@/layouts";
import ChooseUsContainer from "@/sections/Home/ChooseUs/ChooseUsContainer";
import AboutUs from "@/sections/Home/Hero/AboutUs";
import HeroContainer from "@/sections/Home/Hero/HeroContainer";
import MainCategoriesContainer from "@/sections/Home/MainCategories/MainCategoriesContainer";
import MarketingContainer from "@/sections/Home/MarketingSection/MarketingContainer";
import OfferContainer from "@/sections/Home/Offer/OfferContainer";
import PioneeringExcellenceContainer from "@/sections/Home/PioneeringExcellence/PioneeringExcellenceContainer";
import ProductContainer from "@/sections/Home/Product/ProductContainer";
import Image from "next/image";

export default function Home() {
    return (
        <Layouts.Primary>
            <HeroContainer />
            <ProductContainer />
            <MainCategoriesContainer />
            <OfferContainer />
            <MarketingContainer />
            <ChooseUsContainer />
            <PioneeringExcellenceContainer />
        </Layouts.Primary>
    );
}
