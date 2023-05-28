import axios from "axios";
import API_URL from ".";

const sendRequest = (postfix, requestType = "POST", data, success, failed = undefined) => {
    if (failed == undefined){
        failed = (e) => {
            console.log(e)
        }
    }
    if(requestType == "GET"){
        axios.get(`${API_URL}${postfix}`, data)
        .then(success)
        .catch(failed);
    }
    if(requestType == "PUT"){
        axios.put(`${API_URL}${postfix}`, data)
        .then(success)
        .catch(failed);
    }
    else{
        axios.post(`${API_URL}${postfix}`, data)
        .then(success)
        .catch(failed);
    }
}

export default sendRequest