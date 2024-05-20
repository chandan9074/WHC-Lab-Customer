const { BLOG_URL, COMMENTS } = require("@/helpers/apiURLS");
const { default: MakeApiCall } = require("../MakeApiCall");
import { MethodsStructure } from "../MethodsStructure";

async function getBlogs() {
    const res = await MakeApiCall({ apiUrl: BLOG_URL });

    return res;
}

async function createBlogs(data, token) {
    try {
        const res = MakeApiCall({
            apiUrl: COMMENTS,
            body: data,
            ...MethodsStructure.postMethod({ Authorization: `${token}` }),
        });

        return res;
    } catch (e) {
        return e;
    }
}

const BlogService = {
    getBlogs,
    createBlogs,
};

export default BlogService;
