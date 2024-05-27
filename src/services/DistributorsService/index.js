import { DISTINCT_CATEGORY_URL, DISTINCT_COUNTRY_URL, DISTRIBUTORS_URL } from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";

async function getDistributors(query){
    const res = await MakeApiCall({apiUrl:DISTRIBUTORS_URL, query: query
    });

    return res;
}

async function getDistinctCountry(){
    const res = await MakeApiCall({apiUrl:DISTINCT_COUNTRY_URL
    });

    return res;
}

async function getDistinctCategory(){
    const res = await MakeApiCall({apiUrl:DISTINCT_CATEGORY_URL
    });

    return res;
}

const DistributorsService = {
    getDistributors,getDistinctCountry,getDistinctCategory
}

export default DistributorsService;