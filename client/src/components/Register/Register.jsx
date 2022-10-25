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
  const [rollno,setrollno]=useState('')
  const [phone,setPhone]=useState('')
  const [photo,setPhoto]=useState(null)
  const [department,setDepartment]=useState('')
  const [batch,setBatch]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData= new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('photo',photo)
    formData.append('department',department)
    formData.append('rollno',rollno)
    formData.append('phone',phone)
    formData.append('batch',batch)
    dispatch(signUp(formData,navigate))
  }
  const dept = [
      "Civil Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Food Technology",
      "Electrical and Electronics Engineering",
      "Electronics and Instrumentation Engineering",
      "Electronics and Communication Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Design",
      "Artificial Intelligence (AIML & AIDS)",
      "Management Studies",
      "Computer Application",
      "Computer Technology - UG",
      "Computer Technology - PG",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ];
    let batchYear=[]
    var increment;
    var year=new Date().getFullYear()
    for(increment=-4;increment<=4;increment++){
        batchYear.push(year-increment);
    }
  return (
      <div className='container login-container'>
          <Logo />
          <div className='row '>
              <div className="col-lg-6 offset-lg-3">
                  <div className="card shadow">
                      <div className="card-body"> 
                          <h2 className='text-center login-head-content my-3'>Join with us</h2>
                                <form className='row g-2' onSubmit={handleSubmit}>
                                    <div className='mb-3 col-6'>
                                        <label className="form-label">Name</label>
                                        <input type="text" placeholder='Full Name' className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Roll No</label>
                                        <input type="text" placeholder='roll-no' className="form-control" value={rollno} onChange={e => setrollno(e.target.value)} />
                                    </div>
                                    <div className='mb-3 col-6'>
                                          <label className="form-label">Email</label>
                                          <input type="text" placeholder=' Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Phone no</label>
                                        <input type="tel" placeholder='Phone' className='form-control' value={phone} onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">PROFILE IMAGE</label>
                                        <input type="file" className='form-control'onChange={e => setPhoto(e.target.files[0])} />
                                    </div>        
                                    <div className="mb-3 col-6">
                                        <label className="form-label">DEPARTMENT</label>
                                        <select className='form-select' onChange={e => setDepartment(e.target.value)}>
                                          {dept.map((d,idx) =>(
                                            <option key={idx} value={d}>{d}</option>
                                          ))}
                                        </select>
                                  </div>
                                  <div className="mb-3 col-6">
                                    <label className="form-label">Batch</label>
                                    <select className='form-select' onChange={e  => setBatch(e.target.value)}>
                                            {batchYear.map((b,idx)=>(
                                              <option key={idx} value={b}>{b}</option>
                                            ))}

                                    </select>
                                  </div>
                                  <div className='mb-3 col-6'>
                                        <label className="form-label">Password</label>
                                        <input type="password"  placeholder='Password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
                                  </div>
                                  
                                  
                                  <div className='d-grid gap-6'>
                                          <button className="btn btn-primary ">Sign Up</button>
                                  </div>
                          </form>
                       </div>
                    </div>
                  </div>
              </div>
          </div>
  )
}

export default Register