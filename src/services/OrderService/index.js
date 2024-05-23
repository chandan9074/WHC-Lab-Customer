import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

import { ORDERS_URL } from "@/helpers/apiURLS";

export default class OrderService {
    static async getOrderData(key, value, token) {
        const query = { [key]: value };

        const res = await MakeApiCall({
            apiUrl: ORDERS_URL,
            query,
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });
        return res;
    }
}
