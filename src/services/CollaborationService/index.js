const { COLLABORATION_URL } = require("@/helpers/apiURLS");
import MakeApiCall from "../MakeApiCall";
// const { default: MakeApiCall } = require("../MakeApiCall");
import { MethodsStructure } from "../MethodsStructure";

async function getCollaborations() {
    return await MakeApiCall({ apiUrl: COLLABORATION_URL });
}

async function getCollaboration(id) {
    return await MakeApiCall({ apiUrl: `${COLLABORATION_URL}?id=${id}` });
}

const CollaborationService = {
    getCollaborations,
    getCollaboration,
};

export default CollaborationService;
