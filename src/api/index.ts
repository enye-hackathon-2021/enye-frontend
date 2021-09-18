import axios from "axios"

const API = axios.create({
  baseURL: "https://frozen-thicket-57367.herokuapp.com/api/v1/auth",
});


API.interceptors.request.use((req) => {
    // retrieve token from localstorage if there is any
     const token = localStorage.getItem("profile");
    
     if (token) {
       req.headers.Authorization = `Bearer ${JSON.parse(token).data.token}`;
     }
    return req;
})

// signIn function handler
export const signIn = (formData: any) => API.post("/register", formData);
export const logIn = (formData:any) => API.post("/login", formData);
export const getWallet = () => API.get("/balance")