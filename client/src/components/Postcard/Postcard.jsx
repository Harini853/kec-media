import React from 'react'
import './Postcard.scss'
import moment from 'moment'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { likepost,addNewComment } from '../../actions/post'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Postcard =({post})=> {
  const User = useSelector((state)=>(state.detailsReducer))
  const [comment,setComment]=useState(false)
  const [commentText,setText]=useState('')
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [addComment,setAddComment]=useState(false)
  const url = `http://localhost:8080/${post.image}`
  let userId=User?.data?._id
  const updateLike= ()=>{
    const id=post._id
    const userId=post.postedBy._id
    dispatch(likepost({id,userId},navigate))
  }
  const [flag,setFlag]=useState(false)
  
  const heart ={
    color:'red'
  }

  const handleComment = (e)=>{
     e.preventDefault()
     const id=post._id
    const userId=post.postedBy._id
    dispatch(addNewComment({content:commentText,id,userId},navigate))
  }

useEffect(()=>{
    const likes=post.likes
    const liked= likes.findIndex(id =>id==userId)
    if(liked!=-1){
      setFlag(true)
    }
},[post])
 
   
  return (
   
        <div className='post-card-container my-3'>
                  <div className='profile-name-container'> 
                          <i className="fa-regular fa-user"></i>  
                           <h4>{post.postedBy.name} - {post.postedBy.rollno}</h4> 
                          </div>
                          <div className='student-dept my-2'>
                            {post.postedBy.department}
                    </div>
                          <p>{post.description}</p>
                    
                  <div className="post-card-img-container">
                  <img src={url}  alt="card-img"/>
                  </div>
                  <div className="posted-time text-muted">
                    {moment(post.posteddOn).fromNow()}
                  </div>
            <div className='bottom-icons-container'>
              {flag ?  <i style={{color:'red'}}  className="fa-regular fa-heart" onClick={updateLike}></i>  :
                   <i   className="fa-regular fa-heart" onClick={updateLike}></i> }
                  <i className="fa-regular fa-comment"></i>
                  <i  className="fa-regular fa-paper-plane" ></i>
            </div>                                    
            <div className="bottom-icons-content">
              <p>{post.likes.length} likes</p>
              <p>{post.comment.length} comments</p>
            </div>                          
            <div className="view-btn">
              <button onClick={()=>setComment(!comment)} className="btn  m-0">{comment ?'close comments':'View comments' } </button>
            </div>
            {comment &&
            <div className="comments-section">
              <button className="btn btn-outline-info btn-sm" onClick={()=>setAddComment(true)}>Add Comment</button>
                  {post.comment.length==0 ? <p>No comments</p> :
                   <div className='comments-list'>
                    {post.comment.map(c => (
                      <div key={c._id}>
                          <p>{c.content}</p>
                      </div>  
                    ))}  
                    </div>}
                  {addComment && 
                  <div className='comment-form'>
                      <form onSubmit={handleComment}>
                        <div className="mb-3">
                          <input type="text" placeholder='Your comment' className='form-control' value={commentText} onChange={e => setText(e.target.value)} />
                          <button className="btn btn-outline-success my-2" >Add comment</button>
                        </div>
                      </form>
                  </div> }
            </div>
}
      </div>
 


  )
}

export default Postcard