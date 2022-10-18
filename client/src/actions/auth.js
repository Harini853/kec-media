import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const login = (authdata,navigate) => async(dispatch) =>{
    try {   
        const {data} = await api.logIn(authdata)
        dispatch({type:'SET_USER',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('KEC-MEDIA'))))
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
        navigate('/Home')
    } catch (err) {
        console.log(err.message)
    }
}
