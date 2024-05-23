import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import BlogContainer from "@/sections/Blog/BlogContainer";
import BlogService from "@/services/BlogService";

async function page() {
    const blogsData = await BlogService.getBlogs();

    return (
        <Layouts.Secondary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading="Blog" />
            <InfoPagesContainer>
                <BlogContainer
                    blogsData={blogsData.docs}
                    blogDataTotalPage={blogsData.totalPages}
                    blogDataLimit={blogsData.limit}
                />
            </InfoPagesContainer>
        </Layouts.Secondary>
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
