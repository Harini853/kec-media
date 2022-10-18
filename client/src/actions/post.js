import * as api from '../api'

export const newPost = (postData,navigate) => async(dispatch) =>{
    try{
        const {data}=await api.newPost(postData)
        navigate('/Profile')
        dispatch(getAllPost())
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

