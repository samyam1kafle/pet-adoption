import axios from "axios";
import API_URL from ".";

const sendRequest = (postfix, success, failed = undefined) => {
    if (failed == undefined){
        failed = () => {
            console.log(failed.data)
        }
    }

    axios.get(`${API_URL}${postfix}`)
    .then(success)
    .catch(failed);
}

export default sendRequest