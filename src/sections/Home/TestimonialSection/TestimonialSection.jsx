import React from "react";
import TestimonialCarouselDesktop from "./TestimonialCarouselDesktop";
import Images from "../../../../public/assets/Images";
import TestimonialCarouselMobile from "./TestimonialCarouselMobile";

const TestimonialSection = ({ testimonialsData }) => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto py-9 px-6 md:px-0 md:py-[100px]  w-full flex flex-col">
                <div className="grid grid-cols-12">
                    <div className="hidden lg:block lg:col-span-5 xl:col-span-4" />
                    <h1 className="col-span-12 lg:col-span-7 xl:col-span-8 text-2xl md:text-5xl font-medium text-brand-blue-800 leading-7 md:leading-[57px]">
                        Clients reviews about our products
                    </h1>
                </div>
                <TestimonialCarouselDesktop data={testimonialsData} />
                <TestimonialCarouselMobile data={testimonialsData} />
            </div>
        </div>
    );
};

export default TestimonialSection;

// const testimonialData = [
//     {
//         _id: 1,
//         name: "Walter White",
//         profilePic: Images.profilePic,
//         designation: "Manager of Shopify",
//         rating: 5,
//         comment:
//             "WHCLAB has designed and implemented a quality and testing service for our mobile canning line. It gives me great comfort to know all the batches through the line have been rigorously tested by a 3rd party laboratory with great experience in this field.",
//     },
//     {
//         _id: 2,
//         name: "Walter White",
//         profilePic: Images.profilePic,
//         designation: "Manager of Shopify",
//         rating: 4,
//         comment:
//             "WHCLAB has designed and implemented a quality and testing service for our mobile canning line. It gives me great comfort to know all the batches through the line have been rigorously tested by a 3rd party laboratory with great experience in this field.",
//     },
//     {
//         _id: 3,
//         name: "Walter White",
//         profilePic: Images.profilePic,
//         designation: "Manager of Shopify",
//         rating: 3,
//         comment:
//             "WHCLAB has designed and implemented a quality and testing service for our mobile canning line. It gives me great comfort to know all the batches through the line have been rigorously tested by a 3rd party laboratory with great experience in this field.",
//     },
//     {
//         _id: 2,
//         name: "Walter White",
//         profilePic: Images.profilePic,
//         designation: "Manager of Shopify",
//         rating: 5,
//         comment:
//             "WHCLAB has designed and implemented a quality and testing service for our mobile canning line. It gives me great comfort to know all the batches through the line have been rigorously tested by a 3rd party laboratory with great experience in this field.",
//     },
// ];
