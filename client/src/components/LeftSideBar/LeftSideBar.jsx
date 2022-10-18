import React,{useState} from 'react'
import './LeftSideBar.scss'
import { useSelector } from 'react-redux'
import profile from '../../assets/images/profile.jfif'
const LeftSideBar = () => {
  const User = useSelector((state)=>(state.currentUserReducer))
  return (
    <div className='left-side-bar-container shadow'>
        <div className="img-container">
            <img src={profile} alt="profile" />
            
        </div>
        <div className='profile-content'>
              <p className="profile-name">{User?.result?.name}</p>
              <p className="profile-joined text-muted p-0">Joined 3 months ago</p>
              <div className="profile-details">
               <p className="followers">50 followers</p>
                <p className="posts">10 posts</p>
              </div >
        </div>
    </div>
  )
}

export default LeftSideBar

