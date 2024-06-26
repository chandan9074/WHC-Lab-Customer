import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

const {
    RESOURCES,
    DOWNLOAD_RESOURCE,
    GET_IMAGE_RENDER,
} = require("@/helpers/apiURLS");

async function getResources(slug) {
    const res = await MakeApiCall({
        apiUrl: `${RESOURCES}?type=${slug}`,
        ...MethodsStructure.getMethod(),
    });

    return res;
}

// function downloadResource(links, text) {
//     console.log(links, text);
//     const url = `${GET_IMAGE_RENDER}?key=${links}`;
//     // console.log({ url });
//     // const link = document.createElement("a");
//     // link.href = url;
//     // link.download = text; // Specify the filename here
//     // document.body.appendChild(link);
//     // link.click();
//     // document.body.removeChild(link);

//     fetch(url)
//         .then((response) => response.blob())
//         .then((blob) => {
//             const link = document.createElement("a");
//             const objectURL = URL.createObjectURL(blob);
//             link.href = objectURL;
//             link.download = text; // Specify the filename here
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(objectURL); // Clean up the object URL after the download
//         })
//         .catch((error) => console.error("Error downloading the file:", error));
// }

async function downloadResource(links, text) {
    const url = `${GET_IMAGE_RENDER}?key=${links}`;

    try {
        const response = await fetch(url);
        const blob = await response.blob();

        // Check for File System Access API support
        if ("showSaveFilePicker" in window) {
            const options = {
                suggestedName: text,
                types: [
                    {
                        description: "Files",
                        accept: {
                            "application/octet-stream": [
                                ".mp4",
                                ".pdf",
                                ".jpeg",
                                ".jpg",
                                ".png",
                            ],
                        },
                    },
                ],
            };
            const handle = await window.showSaveFilePicker(options);
            const writableStream = await handle.createWritable();
            await writableStream.write(blob);
            await writableStream.close();
            console.log("File saved successfully.");
        } else {
            // Fallback for browsers without File System Access API support
            const link = document.createElement("a");
            const objectURL = URL.createObjectURL(blob);
            link.href = objectURL;
            link.download = text; // Specify the filename here
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(objectURL); // Clean up the object URL after the download
        }
    } catch (error) {
        console.error("Error downloading the file:", error);
    }
}

const ResourceService = {
    getResources,
    downloadResource,
};

export default ResourceService;
