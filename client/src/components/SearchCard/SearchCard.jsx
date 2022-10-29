import React from 'react'
import './SearchCard.scss'
import { useNavigate } from 'react-router-dom'
const SearchCard = ({user}) => {
      const url=`http://localhost:8080/${user.image}`
      const navigate=useNavigate()
      const handleNavigate = ()=>{
        const id=user._id
        navigate(`/Profile/${id}`)
      }
  return (
    <div onClick={handleNavigate} className="search-card-container shadow mb-3">
        <div className="image-container">
            <img src={url} alt="search-profile-image" />
        </div>
        <div className="profile-details">
            <p className="name">{user.name}</p>

        </div>
    </div>
  )
}

export default SearchCard