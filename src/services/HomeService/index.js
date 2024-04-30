import { getCookie } from "cookies-next";
import MakeApiCall from "../MakeApiCall";

const { GET_TESTIMONIALS, GET_MAIN_CATEGORIES } = require("@/helpers/apiURLS");

async function getTestimonials(token){
    const res = await MakeApiCall({apiUrl:GET_TESTIMONIALS
    });

    return res;
}

async function getMainCategories(token){
    const res = await MakeApiCall({apiUrl:GET_MAIN_CATEGORIES
    });

    return res;
}

const HomeService = {
    getTestimonials,getMainCategories
}

export default HomeService;