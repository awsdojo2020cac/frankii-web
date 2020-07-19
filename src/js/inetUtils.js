import axios from "axios";

function getJson(url, req) {
    return axios.get(url, req).then(response => {
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