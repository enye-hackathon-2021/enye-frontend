import axios from "axios"

const API = axios.create({baseURL: ""})

API.interceptors.request.use((req) => {
    // retrieve token from localstorage if there is any
    return req;
})

// signIn function handler
export const signIn = (formData:any) => API.post('/', formData)
export const logIn = (formData:any) => API.post("/", formData);