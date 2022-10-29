import React,{useState} from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CommentCard from '../CommentCard/CommentCard'
import { deletePost } from '../../actions/post'
import './ProfileSmallCard.scss'
const ProfileSmallCard = ({post}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [comment,setComment]=useState(false)
  const url=`http://localhost:8080/${post.image}`
  const onDelete = ()=>{
        const id =post._id
        dispatch(deletePost(id,navigate))
  }
  return(
   <div className="profile-small-card-container">
      <div className="img-container">
        <img src={url} alt={post.name} />
      </div>
      <div className="image-below-container">
      <p className="text-muted">{moment(post.postedOn).fromNow()}</p>
      <i onClick={onDelete} className="fa-solid fa-trash"></i>
      </div>
      <h5 className="">{post.description}</h5>
      <div className='bottom-icons-container'>
              
                   <i   className="fa-regular fa-heart" ></i> 
                  <i className="fa-regular fa-comment"></i>
                  
            </div> 
        <div className="bottom-icons-content">
              <p>{post.likes.length} likes</p>
              <p>{post.comment.length} comments</p>
            </div>      
            <div className="view-btn">
              <div onClick={()=>setComment(!comment)} className=" m-0">{comment ?'Close comments':'View comments' } </div>
            </div>
            {comment &&
            <div className="comments-section">
              
                  {post.comment.length==0 ? <p>No comments</p> :
                   <div className='comments-list'>
                    {post.comment.map(c => (
                      <div key={c._id}>
                          <CommentCard  comment={c}/>
                      </div>  
                  ))}  
              </div>
              }
                
           
                            
   </div>

}
</div>
  )

}

export default ProfileSmallCard