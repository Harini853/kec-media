import * as api from '../api'
import { setCurrentUser } from './currentUser'

import { setMyDetails } from './details'
export const login = (authdata,navigate) => async(dispatch) =>{
    try {   
        const {data} = await api.logIn(authdata)
        dispatch({type:'SET_USER',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('KEC-MEDIA'))))
       dispatch(setMyDetails())
        navigate('/Home')
    } catch (err) {
        console.log(err.message)
    }
}

export const signUp = (authdata,navigate) => async(dispatch) =>{
    try {   
        const {data} = await api.signUp(authdata)
        console.log(data)
        dispatch({type:'SET_USER',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('KEC-MEDIA'))))
       dispatch(setMyDetails())
        navigate('/Home')
    } catch (err) {
        console.log(err.message)
    }
}

export const updateProfile = (profileData,navigate)=> async(dispatch)=>{
    try {
        const {data}=api.updateProfile(profileData);
        dispatch(setMyDetails())
        navigate('/Profile')
    } catch (err) {
        alert(err.message)
    }
}
export const updatePassword =(passwordData,navigate)=>async(dispatch)=>{
    try {
        const {data}=api.updatePassword(passwordData)
        dispatch(setMyDetails())
        navigate('/Profile')
    } catch (err) {
            alert(err.message)
    }
}

export const updateDetails =(myData,navigate)=>async(dispatch)=>{
    try {
        const {data}=api.updateDetails(myData)
        dispatch(setMyDetails())
        navigate('/Profile')
    } catch (err) {
        alert(err.message)
    }
}


