import {
    DISTINCT_CATEGORY_URL,
    DISTINCT_COUNTRY_URL,
    DISTRIBUTORS_URL,
} from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";

async function getDistributors(query, ip) {
    const res = await MakeApiCall({
        apiUrl: DISTRIBUTORS_URL,
        query: query,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });

    return res;
}

async function getDistinctCountry(ip) {
    const res = await MakeApiCall({
        apiUrl: DISTINCT_COUNTRY_URL,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });

    return res;
}

async function getDistinctCategory(ip) {
    const res = await MakeApiCall({
        apiUrl: DISTINCT_CATEGORY_URL,
        ...(ip && MethodsStructure.getMethod({ "x-client-ip": ip })),
    });

    return res;
}

const DistributorsService = {
    getDistributors,
    getDistinctCountry,
    getDistinctCategory,
};

export default DistributorsService;
