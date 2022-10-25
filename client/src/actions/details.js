import * as api from '../api'



 export const setMyDetails = ()=> async(dispatch) =>{
    try {
     
        const user=JSON.parse(localStorage.getItem('KEC-MEDIA'))
        const id = user.result._id
        const {data}= await api.myDetails(id);
      
        dispatch({type:'SET_DETAILS',payload:data})
    } catch (err) {
        alert(err.message)
    }
 }