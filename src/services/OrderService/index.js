import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

import { ORDERS_URL } from "@/helpers/apiURLS";

export default class OrderService {

    static async getOrderData(number, token) {
        const res = await MakeApiCall({
            apiUrl: ORDERS_URL,
            query:{
             number
            },
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });
        return res;
    }
}
