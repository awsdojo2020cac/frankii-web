import inetUtils from "./inetUtils";


function getFrankiiQuestions(req) {
    return inetUtils.getJson("https://3bglwwbrx3.execute-api.ap-northeast-1.amazonaws.com/prod/frankiis-questions",req);
}

function formatQuestionText(req) {
    return inetUtils.postJson("https://3bglwwbrx3.execute-api.ap-northeast-1.amazonaws.com/prod/format", req);
}

const inet = {
    getFrankiiQuestions,
    formatQuestionText

};

export default inet;