import React,{useState} from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import './Auth.scss'
const Auth = () => {
    const [login,isLogin]=useState(true)
    const handleSwitch= ()=>{
        isLogin(!login )
    }
    return(
        <div>
        {login  ? <div> <Login /> <p className='text-center mt-3 switch-auth'  onClick={handleSwitch}>Don't Have an account? <span>Register</span> </p> </div> : <div> <Register /> <p className='text-center switch-auth mt-3' onClick={handleSwitch}>Have an account ?<span>Login</span></p> </div>}
        </div>
  )
}
export default Auth