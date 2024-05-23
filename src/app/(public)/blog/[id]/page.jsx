import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import AuthorInfo from "@/sections/Blog/AuthorInfo";
import SocialMediaShare from "@/sections/Blog/SocialMediaShare";
import PreviousNextNavigator from "@/sections/Blog/Navigator/PreviousNextNavigator";
import BlogContent from "@/sections/Blog/BlogContent";
import RecentPost from "@/sections/Blog/RecentPost";
import TagLists from "@/sections/Blog/TagLists";
import CommentList from "@/sections/Blog/Comment/CommentList";
import CommentForm from "@/sections/Blog/Comment/CommentForm";
import Text from "@/components/Text";
import BlogContainer from "@/sections/Blog/BlogContainer";
import BlogService from "@/services/BlogService";
// import { useRouter } from "next/router";

async function BlogDetails({ params }) {
    const blogsData = await BlogService.getBlogs();

    const singleBlogData = blogsData?.docs?.find(
        (blog) => blog?._id === params?.id
    );
    // console.log("single------------------", singleBlogData);

    const currentIndex = blogsData.docs.findIndex(
        (blog) => blog._id === singleBlogData?._id
    );

    // Find the previous and next blog posts
    const prevBlog = currentIndex > 0 ? blogsData.docs[currentIndex - 1] : null;
    const nextBlog =
        currentIndex < blogsData.docs.length - 1
            ? blogsData.docs[currentIndex + 1]
            : null;

    // console.log("Previous Blog:", prevBlog);
    // console.log("Next Blog:", nextBlog);

    // console.log({ singleBlogData });

    return (
        <Layouts.Primary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading={singleBlogData?.title} />
            <InfoPagesContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-12">
                    <div className="flex flex-col gap-12 col-span-2">
                        {/* blog content */}
                        <BlogContent data={singleBlogData} />

                        {/* Author info and share option */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                            {/* author info */}
                            <AuthorInfo data={singleBlogData.authorDetails} />

                            {/* social media share */}
                            <SocialMediaShare
                                quote={singleBlogData?.title}
                                hashtag={singleBlogData?.tags}
                            />
                        </div>

                        {/* navigator  previous & Next*/}
                        <div className="flex justify-between items-center gap-5">
                            <PreviousNextNavigator data={prevBlog} />
                            <PreviousNextNavigator
                                next={true}
                                data={nextBlog}
                            />
                        </div>

                        {/* divider */}
                        <div className="h-[1px] bg-stroke-new w-full"></div>

                        {/* comment section */}
                        <CommentList comments={singleBlogData?.comment} />
                        <CommentForm blogId={singleBlogData?._id} />
                    </div>

                    {/* blog page sidebar */}
                    <div className="flex flex-col gap-8 w-full">
                        <RecentPost data={blogsData.docs} />
                        <TagLists data={singleBlogData.tags} />
                    </div>
                </div>

                {/* recent blogs recommendation */}
                <div className="flex flex-col gap-10 md:gap-12 mt-16">
                    <Text.Secondary className="text-2xl md:text-4xl">
                        Recent Blogs
                    </Text.Secondary>
                    <BlogContainer blogsData={blogsData.docs.slice(0, 3)} />
                </div>
            </InfoPagesContainer>
        </Layouts.Primary>
    );
}

export default BlogDetails;
