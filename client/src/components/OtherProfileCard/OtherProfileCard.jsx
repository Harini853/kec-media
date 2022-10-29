import React,{useState} from 'react'
import moment from 'moment'

const OtherProfileCard = ({post}) => {
  
  const [comment,setComment]=useState(false)
  const url=`http://localhost:8080/${post.image}`
 
  return(
   <div className="profile-small-card-container">
      <div className="img-container">
        <img src={url} alt={post.name} />
      </div>
      <div className="image-below-container">
      <p className="text-muted">{moment(post.postedOn).fromNow()}</p>
    
      </div>
      <h5 className="">{post.description}</h5>
      <div className='bottom-icons-container'>
              
                   <i   className="fa-regular fa-heart" ></i> 
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
              
                  {post.comment.length==0 ? <p>No comments</p> :
                   <div className='comments-list'>
                    {post.comment.map(c => (
                      <div key={c._id}>
                          <p>{c.content}</p>
                      </div>  
                  ))}  
              </div>
              }
                
           
                            
   </div>

}
</div>
  )

}

export default OtherProfileCard