const { BLOG_URL } = require("@/helpers/apiURLS");
const { default: MakeApiCall } = require("../MakeApiCall");

async function getBlogs(){
    const res = await MakeApiCall({apiUrl:BLOG_URL
    });

    return res;
}

const BlogService = {
    getBlogs
}

export default BlogService;