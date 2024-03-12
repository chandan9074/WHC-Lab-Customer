import { GET_PRODUCTS } from "@/helpers/apiURLS";
import { whcFetch } from "../BaseWHCHTTP";
import { MethodsStructure } from "../MethodsStructure";

export default class ProductService {
    static async getProducts(query) {
        const res = await whcFetch({
            endpoint: GET_PRODUCTS,
            query: query,
            ...MethodsStructure.getMethod(),
        });
        return res;
    }

    // static async getSingleProduct(id) {
    //     const res = await palooiFetch({
    //         endpoint: GET_PRODUCTS,
    //         query: { id },
    //         ...MethodsStructure.getMethod(),
    //     });
    //     return res;
    // }
}
