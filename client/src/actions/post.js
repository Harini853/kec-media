import * as api from '../api'
import { setMyDetails } from './details'
export const newPost = (postData,navigate) => async(dispatch) =>{
    try{
        const {data}=await api.newPost(postData)
        navigate('/Profile')
        dispatch(getAllPost())
        dispatch(setMyDetails())
    }catch(err){
        console.log(err.message)
    }
}

export const getAllPost = () =>async(dispatch) =>{
    try {
        const {data} = await api.getAllPost();
        dispatch({type:'FETCH_ALL_POST',payload:data})
    } catch (err) {
        console.log(err.message)
    }
}


export const likepost =(postData,navigate)=> async(dispatch)=>{
    try {
        const {data}=await api.likePost(postData)
        dispatch(getAllPost())
        navigate('/Home')
    
    } catch (error) {
        alert(error)
    }
}

export const addNewComment = (commentData,navigate)=> async(dispatch)=>{
    try {
        const {data}=api.addComment(commentData)
        dispatch(getAllPost())
        navigate('/Home')
        
    } catch (err) {
        alert(err)
    }
}

