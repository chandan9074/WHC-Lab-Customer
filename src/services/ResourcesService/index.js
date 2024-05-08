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

function downloadResource(link) {
    const _link = document.createElement("a");
    _link.href = `${DOWNLOAD_RESOURCE}${link}`;
    _link.setAttribute("download", `${DOWNLOAD_RESOURCE}${link}`);

    window.document.body.appendChild(_link);
    _link.click();

    // Clean up and remove the link
    _link.parentNode.removeChild(_link);
}

const ResourceService = {
    getResources,
    downloadResource,
};

export default ResourceService;
