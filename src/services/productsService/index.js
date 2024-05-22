import { CATEGORY_URL, GET_PRODUCTS, REVIEW_URL } from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

async function getProducts(query) {
    const url = query
        ? `${GET_PRODUCTS}?${new URLSearchParams({
              ...query,
          })}`
        : `${GET_PRODUCTS}`;

    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
}

async function getCategories() {
    // const res = await fetch(url, {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });

    // return res.json();
    const res = await MakeApiCall({ apiUrl: CATEGORY_URL, method: "GET" });
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
