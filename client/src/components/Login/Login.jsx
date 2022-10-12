import React,{useState} from 'react'
import './Login.scss'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../Logo/Logo'
import { login } from '../../actions/auth'
const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login({email,password},navigate))
  }
  return (
    
    <div className='container login-container'>
        <Logo />
      <div className='row'>
          <div className="col-md-12 col-lg-6 offset-lg-3">
            <div className="card shadow">
                <div className="card-body ">
                        <h4 className="text-center login-head-content">CONTINUE WITH US...</h4>
                            <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                         <label className='form-label'>Email</label>
                                           <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
                                    </div>
                                    <div className='mb-3'>
                                         <label className='form-label'>Password</label>
                                          <input type="password" name="" id="" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
                                    </div>
                                    <div className='d-grid gap-6'>
                                              <button className="btn ">Log In</button>
                                    </div>
                                
                                      <p className='forgot-container'>Forgot password?</p>
                                

     
      </form>
  </div>
</div>
      
      </div>
    </div>
    </div>
  
  )
}
export default Login