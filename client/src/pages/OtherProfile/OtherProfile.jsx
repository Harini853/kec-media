import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import moment from 'moment';
import OtherProfileCard from '../../components/OtherProfileCard/OtherProfileCard';
import { updateFollower } from '../../actions/user';
import './OtherProfile.scss'
const OtherProfile = () => {
  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [flag,setFlag]=useState(false)
  const Users = useSelector((state)=>(state.usersReducer))
  const current = useSelector((state)=>(state.detailsReducer))
  const userId=current?.data?._id
  const handleFollow =() =>{
      const userId= current?.data._id
      dispatch(updateFollower({id,userId},navigate))
  }
  useEffect(()=>{
  const User = Users?.data.filter(d => id==d._id)
  console.log(User);
  const followers=User[0]?.followers
    const isFollowing= followers.findIndex(id =>id==userId)
    console.log(isFollowing)
    if(isFollowing!=-1){
      setFlag(true)
    }
  },[])

  return (
    <div className='profile-outer-container container mb-5'>
      {Users.data && <>
      {
      Users.data.filter(d => id==d._id).map(user =>(
      <div key={user._id}>
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
                        
                         {flag ?   <button className='btn' >Following <i className="fa-solid fa-wifi"></i></button>
                         :   <button className='btn' onClick={handleFollow} >Follow <i className="fa-solid fa-wifi"></i></button> }
                          
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
         </div>
        ))
      }

  </>
}
    </div>
  )
}

export default OtherProfile