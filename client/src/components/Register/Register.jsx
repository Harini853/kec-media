import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../Logo/Logo'
import {useDispatch} from 'react-redux'
import { signUp } from '../../actions/auth'
const Register = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [name,setName] = useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(signUp({name,password,email},navigate))
  }
  return (
    <div>
  
    <div className='container login-container'>
      <Logo />
      <div className='row '>
          <div className="col-lg-6 offset-lg-3">
              <div className="card shadow">
                    <div className="card-body"> 
                    <h2 className='text-center login-head-content'>Join with us</h2>
                        <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                  <label className="form-label">Email</label>
                                         <input type="text" placeholder=' Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
                                  </div>
                                  <div className='mb-3'>
                                    <label className="form-label">Name</label>
                                      <input type="text" placeholder='Full Name' className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                                  </div>
                              <div className='mb-3'>
                                <label className="form-label">Password</label>
                                      <input type="password"  placeholder='Password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
                              </div>
                              <div className='d-grid gap-6'>
                                          <button class="btn btn-primary ">Sign Up</button>
                              </div>
    
                          </form>
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
                  </div>
  )
}

export default Register