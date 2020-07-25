import inetUtils from "./inetUtils";


function getFrankiiQuestions() {
    return inetUtils.getJson("https://www.google.com");
}

function searchOnGoogle() {
    return inetUtils.getJson("https://www.googleapis.com/customsearch/v1?api");
}

const inet = {
    getFrankiiQuestions,
    searchOnGoogle
};

export default inet;