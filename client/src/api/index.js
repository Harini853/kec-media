import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})
const config=  {
    headers:{
        'Content-Type':'multipart/form-data'
    }
}

export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/signup',authData,config)
export const newPost = (postData) => API.post('/post',postData,config)
export const getAllPost =()=> API.get('/post')
export const updateProfile=(profileData)=> API.patch('/user/updateProfile',profileData,config)
export const updatePassword =(passwordData)=>API.patch('/user/updatePassword',passwordData)
export const updateDetails =(data)=>API.patch('/user/updateDetails',data)
export const myDetails =(id)=>API.get(`/user/${id}`)
export const getUser = (userData)=>API.get('/user/profile',userData)

export const getAllUser = ()=>API.get('/user/all')

export const likePost = (postData) => API.patch('/post/like',postData)

export const addComment = (commentData)=>API.patch('/post/comment',commentData)