import React from 'react'
import './Profile.scss'
import Navbar from '../../components/Navbar/Navbar'
import profile from '../../assets/images/profile.jfif'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className="profile-outer-container">
        <Navbar />
        <div className="container">
        <div className="row">
           <div className="col-md-8 offset-md-2 col-sm-12 profile-container">
                <div className="profile-section">
                    <div className="image-container">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU" alt="profile-image" />
                    </div>
                    <div className="profile-content">
                        <div className="name">Harini_853</div>
                        <div className="joinedOn text-muted">Joined 3 months ago</div>
                        <div className="followers">50 followers</div>
                        <div className="department">Informaton Technology</div>
                        <div className="batch">2020-2024</div>
                    </div>
                </div>
           </div>
        </div>
         <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 my-posts-container">
              <div className="posts-list-heading">
                <h2>My Posts <span className="count">20</span></h2>
                <Link to='/New'>
                <i className="fa-solid fa-plus" />
                </Link>
                
            </div>
         
        </div>
    </div>
    </div>
    </div>
  )
}

export default Profile

