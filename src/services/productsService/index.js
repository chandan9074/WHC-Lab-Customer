import { CATEGORY_URL, GET_PRODUCTS, REVIEW_URL } from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

async function getProducts(query, ip) {
    const url = query
        ? `${GET_PRODUCTS}?${new URLSearchParams({
              ...query,
          })}`
        : `${GET_PRODUCTS}`;

    const res = await MakeApiCall({
        apiUrl: url,
        method: "GET",
        ...MethodsStructure.getMethod({ "x-client-ip": ip }),
    });
    return res;
}

async function getCategories(ip) {
    const res = await MakeApiCall({
        apiUrl: CATEGORY_URL,
        method: "GET",
        ...MethodsStructure.getMethod({ "x-client-ip": ip }),
    });
    return res;
}

async function postProductReview(data, token) {
    return MakeApiCall({
        apiUrl: REVIEW_URL,
        body: { ...data },
        ...MethodsStructure.postMethod({ Authorization: `${token}` }),
    });
}

const ProductService = {
    getProducts,
    getCategories,
    postProductReview,
};

export default ProductService;
