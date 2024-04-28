"use client";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { useEffect, useState } from "react";
import Buttons from "@/components/Buttons";
import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import { whcFetch } from "@/services/BaseWHCHTTP";
import { FAQ_URL } from "@/helpers/apiURLS";

export default function FAQ() {
    const [collapse, setCollapse] = useState("01");
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await whcFetch({
                endpoint: FAQ_URL,
            });
            setFaqs(response.body.docs);
        };
        fetchData();
    }, []);

    // Function to toggle collapse state
    const toggleCollapse = (itemId) =>
        setCollapse((prevState) => (prevState === itemId ? null : itemId));

    return (
        <Layouts.Secondary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage
                pageHeading="FAQ"
                backgroundImage={"/assets/Images/page_header_bg.png"}
            />
            <InfoPagesContainer>
                <div className="flex gap-4 flex-col">
                    {faqs.map((item, index) => (
                        <div
                            onClick={() => toggleCollapse(item._id)}
                            className={` cursor-pointer flex justify-between gap-1 items-start p-4 md:p-8 border ${
                                collapse === item._id
                                    ? "border-brand-blue-500"
                                    : "border-stroke-new "
                            } rounded-2xl`}
                            key={index}
                        >
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-sm md:text-[18px] text-brand-blue-500 font-montserrat">
                                    {item.question}
                                </p>
                                <p
                                    className={`text-[#474D66] font-normal text-xs md:text-base animate-fadeIn ${
                                        collapse === item._id
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    {item.answer}
                                </p>
                            </div>

                            <Image
                                src={Icons.right_arrow_gray}
                                alt="search"
                                width={1000}
                                height={1000}
                                className={`w-[30px] h-[30px] cursor-pointer transform transition-transform duration-300 ${
                                    collapse === item._id
                                        ? "-rotate-90"
                                        : "rotate-90"
                                }`}
                            />
                        </div>
                    ))}

                    <div
                        className={`flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-center p-8 border transform transition-colors duration-300 border-stroke-new rounded-2xl`}
                    >
                        <p className="font-semibold text-sm md:text-lg text-brand-blue-500 font-montserrat">
                            Do all tokens need to be used at onceDo all tokens
                            need to be used at once?
                        </p>
                        <Buttons.PrimaryButton
                            label={"Contact Us"}
                            className="whitespace-nowrap px-14"
                        />
                    </div>
                </div>
            </InfoPagesContainer>
        </Layouts.Secondary>
    );
}
