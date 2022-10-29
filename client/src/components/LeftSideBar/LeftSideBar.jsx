import React,{useState} from 'react'
import './LeftSideBar.scss'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMyDetails } from '../../actions/details'
const LeftSideBar = () => {
  const dispatch = useDispatch()
  const User = useSelector((state)=>(state.detailsReducer))
  useEffect(()=>{
    if(User.data==null){
        dispatch(setMyDetails())
    }
  })
  useEffect(()=>{
      dispatch(setMyDetails())
  },[dispatch])
  return (
    <div>
      {User.data!=null&&
    <div className='left-side-bar-container shadow'>
        <div className="img-container">
            <img src={`http://localhost:8080/${User?.data.image}`} alt="profile" />
            
        </div>
        <div className='profile-content'>
              <p className="profile-name"><Link to='/Profile'>{User?.data?.name} -{User?.data?.rollno}</Link></p>
              <p className="profile-joined text-muted p-0">Joined  {moment(User?.data.joinedOn).fromNow()}</p>
              <div className="profile-details">
               <p className="followers">{User?.data?.followers.length} Followers</p>
                <p className="posts">{User?.data?.posts.length} posts</p>
              </div >
        </div>
    </div>
}
    </div>
  )
}

export default LeftSideBar

