import authApi from ".";
import AuthTypes from "../types";

function fetchAuth(): AuthTypes.FetchAuthPromise {
    return new Promise((resolve, reject) => {
        authApi.get('/')
            .then(response => resolve(response.data))
            .catch(error => reject(error.response.data.message))
    })
}

export default fetchAuth