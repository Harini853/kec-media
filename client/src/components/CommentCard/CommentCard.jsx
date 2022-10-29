
import React from 'react'
import moment from 'moment'
import './CommentCard.scss'
const CommentCard = ({comment}) => {
    console.log(comment)
    const url=`http://localhost:8080/${comment.commentedBy.image}`
  return (
    <div>
    <div className='comment-card-container'>
        <div className="image-container">
            <img src={url} alt="image" />
        </div>
        <div className="postedBy-name">
            <p className='m-0 p-0'>Commented By</p>
            <p>{comment.commentedBy.name}</p>
        </div>
        <div className="content">
            {comment.content}
        </div>
    </div>
    <div className="posted-on">
        {moment(comment.postedOn).fromNow()}
    </div>
    </div>
  )
}

export default CommentCard