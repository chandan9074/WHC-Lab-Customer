import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

import { GET_LOCATIONS } from "@/helpers/apiURLS";

export default class LocationService {
    static async getLocation(token) {
        const res = await MakeApiCall({
            apiUrl: GET_LOCATIONS,
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });
        return res;
    }
}
