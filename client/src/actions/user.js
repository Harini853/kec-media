import * as api from '../api'
import { setMyDetails } from './details';
 export const getAllUsers= ()=> async(dispatch) =>{
    
    try {
        const {data}= await api.getAllUser();
      
        dispatch({type:'SET_USERS',payload:data})
    } catch (err) {
       console.log("error",err.message)
        alert(err.message)
    }
 }


export const updateFollower = (followdata,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.updateFollower(followdata);
        const {id}=followdata
        dispatch(getAllUsers())
        navigate('/Home')
    } catch (error) {
        alert(error.message)
    }
}