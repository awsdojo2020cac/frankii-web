import inetUtils from "./inetUtils";


function getFrankiiQuestions() {
    return inetUtils.getJson("https://3bglwwbrx3.execute-api.ap-northeast-1.amazonaws.com/prod/frankiis-questions");
}

const inet = {
    getFrankiiQuestions,

};

export default inet;