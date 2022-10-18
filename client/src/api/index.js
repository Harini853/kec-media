import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})
const config=  {
    headers:{
        'Content-Type':'multipart/form-data'
    }
}

export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/signup',authData)
export const newPost = (postData) => API.post('/post',postData,config)
export const getAllPost =()=> API.get('/post')