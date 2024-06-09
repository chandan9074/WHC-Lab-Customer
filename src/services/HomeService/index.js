import MakeApiCall from "../MakeApiCall";

const {
    GET_TESTIMONIALS,
    GET_MAIN_CATEGORIES,
    SOCIAL_MEDIA_LINK_URL,
    WHY_US,
} = require("@/helpers/apiURLS");

async function getTestimonials() {
    const res = await MakeApiCall({ apiUrl: GET_TESTIMONIALS });

    return res;
}

async function getMainCategories() {
    const res = await MakeApiCall({ apiUrl: GET_MAIN_CATEGORIES });

    return res;
}

async function getSocialLink() {
    return await MakeApiCall({ apiUrl: SOCIAL_MEDIA_LINK_URL });
}

async function getWhyUsContents(query) {
    const url = `${WHY_US}?${new URLSearchParams({
            ...query,
        })}`
        
    const res = await MakeApiCall({ apiUrl: url, method: "GET" });
    return res;
}

const HomeService = {
    getWhyUsContents,
    getTestimonials,
    getMainCategories,
    getSocialLink,
};

export default HomeService;
