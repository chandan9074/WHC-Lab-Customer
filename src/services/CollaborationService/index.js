const { COLLABORATION_URL } = require("@/helpers/apiURLS");
import MakeApiCall from "../MakeApiCall";
// const { default: MakeApiCall } = require("../MakeApiCall");
import { MethodsStructure } from "../MethodsStructure";

async function getCollaborations(page = 1, limit = 3) {
    return await MakeApiCall({
        apiUrl: `${COLLABORATION_URL}?page=${page}&limit=${limit}`,
    });
}

async function getCollaboration(id) {
    return await MakeApiCall({
        apiUrl: `${COLLABORATION_URL}?id=${id}`,
        cache: "no-store",
    });
}

const CollaborationService = {
    getCollaborations,
    getCollaboration,
};

export default CollaborationService;
