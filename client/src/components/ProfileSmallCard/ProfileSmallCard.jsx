import React from 'react'
import moment from 'moment'
import './ProfileSmallCard.scss'
const ProfileSmallCard = ({post}) => {
  const url=`http://localhost:8080/${post.image}`
  return(
   <div className="profile-small-card-container">
      <div className="img-container">
        <img src={url} alt={post.name} />
      </div>
      <p className="text-muted">{moment(post.postedOn).fromNow()}</p>
      <h5 className="">{post.description}</h5>
      <div className="icons-section">
        <p className="likes">Likes- {post.likes.length}</p>
        <p className='comments'>comments-{post.comment.length}</p>
        <p>View comments</p>
      </div>
   </div>
  )
}

export default ProfileSmallCard