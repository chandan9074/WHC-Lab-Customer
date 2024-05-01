import MakeApiCall from "../MakeApiCall";

const { TAGS_URL } = require("@/helpers/apiURLS");

async function getTags(){
    const res = await MakeApiCall({apiUrl:TAGS_URL
    });

    return res;
}

const TagService = {
    getTags
}

export default TagService;