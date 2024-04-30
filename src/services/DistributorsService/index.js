import { DISTRIBUTORS_URL } from "@/helpers/apiURLS";
import MakeApiCall from "../MakeApiCall";

async function getDistributors(){
    const res = await MakeApiCall({apiUrl:DISTRIBUTORS_URL
    });

    return res;
}

const DistributorsService = {
    getDistributors
}

export default DistributorsService;