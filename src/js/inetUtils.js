import axios from "axios";

function get(url) {
    return axios.get(url).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}

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
    get,
    getJson,
    postJson
};

export default inetUtils;