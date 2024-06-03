import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import { BLOG_URL } from "@/helpers/apiURLS";
import Layouts from "@/layouts";
import BlogContainer from "@/sections/Blog/BlogContainer";
import BlogService from "@/services/BlogService";
import MakeApiCall from "@/services/MakeApiCall";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function getBlogsData(token) {
    const res = await MakeApiCall({
        apiUrl: BLOG_URL,
        headers: { Authorization: token },
        query: { page: 1, limit: 9 },
    });
    return res;
}

async function page() {
    const token = getCookie("accessToken", { cookies });
    const blogsData = await getBlogsData(token);

    return (
        <Layouts.Primary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading="Blog" />
            <InfoPagesContainer>
                <BlogContainer blogsData={blogsData} />
            </InfoPagesContainer>
        </Layouts.Primary>
    );
}

export default page;

// export const blogsData = [
//     {
//         _id: "65f2f25ff2cb7067b2976284",
//         title: "Thermotolerant yeast and efficient fermentation solutions",
//         category: "Business",
//         author: {
//             _id: "65f282e7ff5a77502038275a",
//             firstName: "Aleksandra",
//             lasName: "Jaworska",
//             image: Images.profilePic,
//         },
//         image: Images.our_product_image,
//         createdAt: "2024-03-14T12:49:35.129Z",
//         updatedAt: "2024-03-14T12:49:51.700Z",
//     },
//     {
//         _id: "65f2f25ff2cb7067b2976283",
//         title: "Five Best New England-style IPAs (NEIPAs)",
//         category: "Business",56
//         author: {
//             _id: "65f282e7ff5a77502038275a",
//             firstName: "Aleksandra",
//             lasName: "Jaworska",
//             image: Images.profilePic,
//         },
//         image: Images.our_product_image,
//         createdAt: "2024-03-14T12:49:35.129Z",
//         updatedAt: "2024-03-14T12:49:51.700Z",
//     },
//     {
//         _id: "65f2f25ff2cb7067b2976243",
//         title: "Beer Basics: How To Identify A Good Beer?",
//         category: "Business",
//         author: {
//             _id: "65f282e7ff5a77502038275a",
//             firstName: "Aleksandra",
//             lasName: "Jaworska",
//             image: Images.profilePic,
//         },
//         image: Images.our_product_image,
//         createdAt: "2024-03-14T12:49:35.129Z",
//         updatedAt: "2024-03-14T12:49:51.700Z",
//     },
//     {
//         _id: "65f2f25ff2cb7067b29756765",
//         title: "Thermotolerant yeast and efficient fermentation solutions",
//         category: "Business",
//         author: {
//             _id: "65f282e7ff5a77502038275a",
//             firstName: "Aleksandra",
//             lasName: "Jaworska",
//             image: Images.profilePic,
//         },
//         image: Images.our_product_image,
//         createdAt: "2024-03-14T12:49:35.129Z",
//         updatedAt: "2024-03-14T12:49:51.700Z",
//     },
//     {
//         _id: "65f2f25ff2cb7067b29756764",
//         title: "Thermotolerant yeast and efficient fermentation solutions",
//         category: "Business",
//         author: {
//             _id: "65f282e7ff5a77502038275a",
//             firstName: "Aleksandra",
//             lasName: "Jaworska",
//             image: Images.profilePic,
//         },
//         image: Images.our_product_image,
//         createdAt: "2024-03-14T12:49:35.129Z",
//         updatedAt: "2024-03-14T12:49:51.700Z",
//     },
// ];
