import MakeApiCall from "../MakeApiCall";

const {
    GET_TESTIMONIALS,
    GET_MAIN_CATEGORIES,
    SOCIAL_MEDIA_LINK_URL,
    WHY_US,
    STRAINS,
} = require("@/helpers/apiURLS");

async function getTestimonials(ip) {
    const res = await MakeApiCall({
        apiUrl: GET_TESTIMONIALS,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });

    return res;
}

async function getMainCategories(ip) {
    const res = await MakeApiCall({
        apiUrl: GET_MAIN_CATEGORIES,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });

    return res;
}

async function getSocialLink() {
    return await MakeApiCall({ apiUrl: SOCIAL_MEDIA_LINK_URL });
}

async function getWhyUsContents(query, ip) {
    const url = `${WHY_US}?${new URLSearchParams({
        ...query,
    })}`;

    const res = await MakeApiCall({
        apiUrl: url,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });
    return res;
}

async function getStrains(ip) {
    return await MakeApiCall({
        apiUrl: STRAINS,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });
}

const HomeService = {
    getStrains,
    getWhyUsContents,
    getTestimonials,
    getMainCategories,
    getSocialLink,
};

export default HomeService;
