import MakeApiCall from "../MakeApiCall";

const {
    GET_TESTIMONIALS,
    GET_MAIN_CATEGORIES,
    SOCIAL_MEDIA_LINK_URL,
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

const HomeService = {
    getTestimonials,
    getMainCategories,
    getSocialLink,
};

export default HomeService;
