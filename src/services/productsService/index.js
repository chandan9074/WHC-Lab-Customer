import { CATEGORY_URL, GET_PRODUCTS } from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";

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

const ProductService = {
    getProducts,
    getCategories,
};

export default ProductService;
