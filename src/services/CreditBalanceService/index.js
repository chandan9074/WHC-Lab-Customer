const { CREDIT_BALANCE_URL } = require("@/helpers/apiURLS");
const { default: MakeApiCall } = require("../MakeApiCall");
import { MethodsStructure } from "../MethodsStructure";

async function getCredits(page, token) {
    return await MakeApiCall({
        apiUrl: CREDIT_BALANCE_URL,
        query: { page },
        ...MethodsStructure.getMethod({ Authorization: `${token}` }),
    });
}

const CreditService = {
    getCredits,
};

export default CreditService;
