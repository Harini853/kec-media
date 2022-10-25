import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './EditProfileForm.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateDetails,updatePassword,updateProfile } from '../../actions/auth'
const EditProfileForm = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const User = useSelector((state)=>(state.detailsReducer))
   
  const [password,setPassword]=useState('')
  const [profile,setProfile]=useState(false)
  const [phone,setPhone]=useState(User?.data.phone)
  const [photo,setPhoto]=useState(null)
  const [change,setChange]=useState(false)
  const [cpassword,setCPassword]=useState('')
  
  const handleDetails= (e)=>{

    e.preventDefault()
    const id=User?.data._id
    dispatch(updateDetails({id,phone},navigate))
  }
  const handlePassword= (e)=>{
    e.preventDefault()
    const id=User.data?._id
    dispatch(updatePassword({id,password},navigate))
  }
  const handleProfile = async(e)=>{
    
    e.preventDefault();
    const id=User?.data?._id
    const formData=new FormData()
    formData.append('photo',photo)
    formData.append('id',id)
    console.log(formData)
    dispatch(updateProfile(formData,navigate))
  }
  return (
    <div className='edit-profile-form-container'>
        <div className="row">
            <div className="col-6 offset-3 my-5">
                    <div className="card shadow" >
                      <div className="card-body">
                        <div className="header">
                        <h4 className="text-center my-3">EDIT YOUR PROFILE - {User?.data.name}</h4>
                        <Link to='/Profile'><i className="fa-solid fa-xmark" /></Link>
                        </div>
                        <div className="image-container ">
                              <img src={`http://localhost:8080/${User?.data.image}`} alt="edit-profile-img" />
                        </div>
                       {!profile &&  <div className="text-center"> 
                          <button onClick={()=>setProfile(!profile)} className="btn text-center change-profile my-2 ">Change Profile Picture</button>
                        </div>
                      }
                        {profile &&
                            <div className="profile-pic-form-container card shadow">
                              <div className="card-body">
                              <form className='row'onSubmit={handleProfile} >
                                <div className="mb-2">
                                    <label className="form-label">NEW-PROFILE</label>
                                    <input type="file" className='form-control' onChange={e => setPhoto(e.target.files[0])} /> 
                                  </div>
                                  <div className="d-grid gap-2 col-6">
                                    <button className="btn btn-success">UPDATE PROFILE</button>
                                  </div>
                                  <div className="d-grid gap-2 col-6">
                                    <button onClick={()=>setProfile(!profile)} className="btn btn-danger">Cancel</button>
                                  </div>
                              </form>
                              </div>
                            </div> 
                      }
                        <form onSubmit={handleDetails} >
                                    <div className="mb-3 ">
                                        <label className="form-label">Phone no</label>
                                        <input type="tel" placeholder='Phone' className='form-control' value={phone} onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    <div className="d-grid gap-4">
                                        <button className="btn btn-primary">Update</button>
                                    </div>
                                 
                        </form>
                        {!change && <div className="text-center">
                          <button onClick={()=>setChange(!change)} className="btn text-center change-profile my-2 ">Change Password</button>
                        </div>
                        }
                        {
                          change && 
                          <form className='row g-2 my-2'>
                          
                            <h2>Password Details</h2>
                            <div className="mb-3 col-6">
                              <label className="form-label">New Password</label>
                              <input type="password" className='form-control' value={password} onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3 col-6">
                              <label className="form-label">Confirm Password</label>
                              <input type="password" className='form-control' value={cpassword} onChange={e=>setCPassword(e.target.value)}/>
                            </div>
                            <div className="d-grid gap-2 col-6">
                              <button onClick={handlePassword} className="btn btn-primary">Update</button>
                            </div>
                            <div className="d-grid gap-2 col-6">
                              <button onClick={()=> setChange(!change)} className="btn btn-danger">Cancel</button>
                            </div>
                             
                          </form>
                        }
                       
                           
                        </div>

                        
                    </div>
          </div>
      </div>
  </div>
  )
}


export default EditProfileForm
