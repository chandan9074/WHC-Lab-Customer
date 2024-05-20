const { CREDIT_BALANCE_URL, MAKE_PAYMENT } = require("@/helpers/apiURLS");
const { default: MakeApiCall } = require("../MakeApiCall");
import { MethodsStructure } from "../MethodsStructure";

async function getCredits(page, search, token) {
    // Construct query object conditionally
    const query = { page };
    if (search) {
        query.search = search;
    }

    return await MakeApiCall({
        apiUrl: CREDIT_BALANCE_URL,
        query,
        ...MethodsStructure.getMethod({ Authorization: `${token}` }),
    });
}

async function applyForCredit(token) {
    return await MakeApiCall({
        apiUrl: CREDIT_BALANCE_URL,
        ...MethodsStructure.getMethod({ Authorization: `${token}` }),
    });
}

async function makePayment(number, token) {
    return await MakeApiCall({
        apiUrl: MAKE_PAYMENT,
        query: { number },
        ...MethodsStructure.postMethod({ Authorization: `${token}` }),
    });
}

const CreditService = {
    getCredits,
    applyForCredit,
    makePayment,
};

export default CreditService;
