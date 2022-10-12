import React from 'react'
import './ProfileSmallCard.scss'
import profile from '../../assets/images/profile.jfif'
const ProfileSmallCard = () => {
  return (
    <div className='profile-small-card-container'>
        <div className="row">
            <div className="col-7">
              <div className="img-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU" alt="image" />
              </div>
            </div>
            <div className="col-5">
                <p className="name p-0 m-0">Harini</p>
                <p className="dept text-muted ">IT</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileSmallCard
