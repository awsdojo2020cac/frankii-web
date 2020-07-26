import axios from "axios";

function getJson(url) {
    return axios.get(url).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}

function postJson(url, req) {
    return axios.post(url, req)
        .then(response => {
            return response;
        }).catch(error => {
        return error;
    });
}


const inetUtils = {
    getJson,
    postJson
};

export default inetUtils;