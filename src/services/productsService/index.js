import { GET_PRODUCTS } from "@/helpers/apiURLS";

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

const ProductService = {
    getProducts,
};

export default ProductService;
