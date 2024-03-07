import Layouts from "@/layouts";
import AboutUs from "@/sections/Home/Hero/AboutUs";
import HeroContainer from "@/sections/Home/Hero/HeroContainer";
import Image from "next/image";

export default function Home() {
    return (
        <Layouts.Primary>
            <HeroContainer />
        </Layouts.Primary>
    );
}
