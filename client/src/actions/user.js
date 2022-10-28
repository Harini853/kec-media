import * as api from '../api'
 export const getAllUsers= ()=> async(dispatch) =>{
    try {
        const {data}= await api.getAllUser();
        dispatch({type:'SET_USERS',payload:data})
    } catch (err) {
       
        alert(err.message)
    }
 }



