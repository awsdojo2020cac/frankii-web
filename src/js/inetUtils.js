import axios from "axios";

function getJson(url) {
    return axios.get(url).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}


const inetUtils = {
    getJson
};

export default inetUtils;