import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import Images from "../../../public/assets/Images";

function BlogContent({ data }) {
    return (
        <div className="flex flex-col gap-4">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />

            {/* <Text.Secondary>Introduction</Text.Secondary> */}
            {/* <Text.TextContainer>
                <p>
                    WHC Lab is a biotechnology business, focused on fermentation
                    in Newcastle, Co. Wicklow, Ireland. We use the latest
                    technologies & processes to manufacture yeast & bacteria
                    strains that are sold globally to customers.
                    <br />
                    <br />
                    Our R&D lab is home to industry-leading equipment. We cater
                    to the brewing, distilling, wine, pharm and animal feed
                    industry.
                </p>
            </Text.TextContainer>

            <div className="py-6 flex flex-col gap-4">
                <Image
                    src={Images.aboutBanner}
                    alt="about banner"
                    width={1000}
                    height={1000}
                    className="w-full h-[214px] md:h-[300px] lg:h-[400px] rounded-2xl object-cover"
                />
                <p className="border-l-2 border-brand-blue-500 p-2 text-xs text-neutral-400">
                    Image caption goes here
                </p>
            </div>

            <Text.TextContainer>
                <p>
                    Our manufacturing journey started with brewing yeast through
                    fermentation process. This has lead to us expanding our
                    facility to cater for the distilling, biofuel, wine, pharm
                    and feed industry.
                    <br />
                    <br />
                    Our facility has grown from 150 litre bioreactor to 50,000
                    litre reactors. We have a wide verity of reactors and
                    technology that allow us to ferment to any size needed.
                    <br />
                    <br />
                    This industry is dominated by only a small collective of
                    multinationals due to the experience needed to manufacture
                    this product. The manufacturing requires very limited,
                    specific equipment, with a high degree of self engineering.
                    <br />
                    <br />
                    We are one of the few companies in the world that can offer
                    any fresh yeast at customers request. We also offer dried
                    yeast but dried in active state. Only a hand full of these
                    facilities exist. We have the option to dry from 3 ton to 10
                    ton.
                    <br />
                    <br />
                    We are also the only yeast manufacturing company in Ireland
                    offering food security in times of crisis. Our sales have
                    doubled every year over the last five years of trading.
                </p>

                <Text.Blockquote>
                    For 60 years, WWF has worked to help people and nature
                    thrive. As the worlds leading conservation organization, WWF
                    works in nearly 100 countries. At every level, we
                    collaborate with people around the world to develop and
                    deliver innovative solutions that protect communities,
                    wildlife, and the places in which they live.
                </Text.Blockquote>
            </Text.TextContainer>
            <Text.Secondary>Conclusion</Text.Secondary>
            <Text.TextContainer>
                <p>
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                </p>
                <br />
                <p>
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                </p>
                <br />
                <p>
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                </p>
            </Text.TextContainer> */}
        </div>
    );
}

export default BlogContent;
