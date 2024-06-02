import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

const { RESOURCES, DOWNLOAD_RESOURCE } = require("@/helpers/apiURLS");

async function getResources(slug) {
    const res = await MakeApiCall({
        apiUrl: `${RESOURCES}?type=${slug}`,
        ...MethodsStructure.getMethod(),
    });

    return res;
}

function downloadResource(links,text) {
    const url = links;
    const link = document.createElement('a');
    link.href = url;
    link.download = text;  // Specify the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const ResourceService = {
    getResources,
    downloadResource,
};

export default ResourceService;
