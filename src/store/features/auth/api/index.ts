import axios from "axios";

const authEndpoint = 'auth'
const apiEndpoint = process.env.NODE_ENV === 'development' ? `http://${window.location.hostname}:4000` : ''

const authApi = axios.create({
    baseURL: [apiEndpoint, authEndpoint].join('/'),
    withCredentials: true
})

export default authApi