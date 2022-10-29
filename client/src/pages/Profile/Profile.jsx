import React,{useState} from 'react'
import './Profile.scss'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useEffect } from 'react'
import { setMyDetails } from '../../actions/details'
import ProfileSmallCard from '../../components/ProfileSmallCard/ProfileSmallCard'

const Profile = () => {
  const dispatch = useDispatch()
  const User=useSelector((state)=>(state.detailsReducer))
  useEffect(()=>{
    dispatch(setMyDetails())
  },[])
  useEffect(()=>{
    dispatch(setMyDetails())
  },[dispatch])
  return (
    <div className="profile-outer-container">
        <Navbar />
        {User?.data!=null &&
        <div className="container mb-5">
        <div className="row">
           <div className="col-md-8 offset-md-2 col-sm-12 profile-container">
                <div className="profile-section">
                    <div className="image-container">
                      <img src={`http://localhost:8080/${User?.data.image}`} alt="profile-image" />
                    </div>
                    <div className="profile-content">
                        <div className="name">{User?.data?.name} - {User?.data.rollno}</div>
                        <div className="joinedOn text-muted">Joined {moment(User?.data.joinedOn).fromNow()}</div>
                        <div className="followers">{User?.data.followers.length} followers</div>
                        <div className="department">{User?.data.department}</div>
                        <div className="batch">Batch - {User?.data.batch}</div>
                        <div className="email">Email - {User.data?.email}</div>
                        <div className="phone">Phone no - {User?.data.phone}</div>
                        <div className="edit-profile-btn">
                        <Link to='/Edit' >
                            <button className='btn'>EDIT PROFILE  <i className="fa-solid fa-pen-to-square" /></button>
                          </Link>
                    </div>
                    
                    </div>
                     
                </div>
           </div>
        </div>
         <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 my-posts-container">
               <div className="posts-list-heading">
                  <h2>My Posts <span className="count">{User?.data.posts.length}</span></h2>
                   <Link to='/New'> <i className="fa-solid fa-plus" /></Link>
                </div>
          
             <div className="row my-posts-list">
                {User?.data.posts.map(p => (
                  <div className="col-4" key={p._id}>
                      <ProfileSmallCard post={p} />
                  </div>
                ))}
                </div>
             </div>
        
       
        
    </div>
    </div>
}
    </div>
  )
}

export default Profile

