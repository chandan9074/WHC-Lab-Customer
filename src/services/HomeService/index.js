import { getCookie } from "cookies-next";
import MakeApiCall from "../MakeApiCall";

const { GET_TESTIMONIALS } = require("@/helpers/apiURLS");

async function getTestimonials(token){
    const res = await MakeApiCall({apiUrl:GET_TESTIMONIALS,
        headers:{ Authorization: token }
    });

    return res;
}

const HomeService = {
    getTestimonials
}

export default HomeService;