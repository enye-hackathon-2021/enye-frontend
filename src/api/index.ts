import axios from "axios"

const API = axios.create({
  baseURL: "https://ffrozen-thicket-57367.herokuapp.com/api/v1",
});


API.interceptors.request.use((req) => {
    // retrieve token from localstorage if there is any
    return req;
})

// signIn function handler
export const signIn = (formData:any) => API.post('/auth/register', formData)
export const logIn = (formData:any) => API.post("/", formData);