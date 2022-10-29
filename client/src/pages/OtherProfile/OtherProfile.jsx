import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import moment from 'moment';
import OtherProfileCard from '../../components/OtherProfileCard/OtherProfileCard';
import './OtherProfile.scss'
const OtherProfile = () => {
  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const Users = useSelector((state)=>(state.usersReducer))
  
  return (
    <div className='profile-outer-container container mb-5'>
      {Users.data && <>
      {
         Users.data.filter(d => id==d._id).map(user =>(
          
  <>
        <div className="row">
           <div className="col-md-8 offset-md-2 col-sm-12 profile-container">
                <div className="profile-section">
                    <div className="image-container">
                      <img src={`http://localhost:8080/${user.image}`} alt="profile-image" />
                    </div>
                    <div className="profile-content">
                        <div className="name">{user?.name} - {user?.rollno}</div>
                        <div className="joinedOn text-muted">Joined {moment(user?.joinedOn).fromNow()}</div>
                        <div className="followers">{user.followers.length} followers</div>
                        <div className="department">{user.department}</div>
                        <div className="batch">Batch - {user.batch}</div>
                        <div className="email">Email - {user.email}</div>
                        <div className="phone">Phone no - {user.phone}</div>
                        <div className="edit-profile-btn">
                        
                            <button className='btn'>Follow <i className="fa-solid fa-wifi"></i></button>
                          
                    </div>
                    
                    </div>
                     
                </div>
           </div>
        </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 my-posts-container">
               <div className="posts-list-heading">
                  <h2>{user.name} Posts <span className="count">{user.posts.length}</span></h2>
                </div>
          
             <div className="row my-posts-list">
                {user?.posts.map(p => (
                  <div className="col-4" key={p._id}>
                      <OtherProfileCard post={p} />
                  </div>
                ))}
                </div>
             </div>
        
       
        
    </div>
         </>
        ))
      }

  </>
}
    </div>
  )
}

export default OtherProfile