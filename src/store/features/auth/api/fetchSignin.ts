import authApi from "."
import AuthTypes from "../types"

const fetchSignin = (input: AuthTypes.Signin.Input): AuthTypes.FetchAuthPromise => {
    const { username, password } = input
    const authorization = `${username}:${password}`

    return new Promise((resolve, reject) => {
        authApi.post('/signin', {}, {
            headers: {
                'Authorization': `Basic ${window.btoa(encodeURIComponent(authorization))}`
            },
        })
            .then(response => resolve(response.data))
            .catch(error => reject(error.response.data.message))
    })
}

export default fetchSignin