import inetUtils from "./inetUtils";

//temporarily using api gateway hard code urls
const FRANKII_BACKEND_ENDPOINT = "https://gd3f5l1jvi.execute-api.ap-northeast-1.amazonaws.com/dev";

function getFrankiiQuestionCategories() {
    return inetUtils.get(FRANKII_BACKEND_ENDPOINT + "/user/question-categories");
}

function getInputTemplate(category) {
    return inetUtils.get(FRANKII_BACKEND_ENDPOINT + "/user/input-template/" + category);
}

function formatQuestionText(req) {
    return inetUtils.postJson("https://3bglwwbrx3.execute-api.ap-northeast-1.amazonaws.com/prod/format", req);
}

const inet = {
    getFrankiiQuestionCategories,
    getInputTemplate,
    formatQuestionText
};

export default inet;