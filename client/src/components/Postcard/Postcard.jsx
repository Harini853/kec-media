import React from 'react'
import './Postcard.scss'
function Postcard({post}) {
  const url = `http://localhost:8080/${post.image}`
  console.log(url)
  return (
   
        <div className='post-card-container my-3'>
                  <div className='profile-name-container'> 
                          <i className="fa-regular fa-user"></i>  
                           <h4>{post.postedBy.name}</h4> 
                           
                          </div>
                    <div className='student-dept my-2'>
                            IT department 
                    </div>
                  <div className="post-card-img-container">
                  <img src={url}  alt="card-img"/>
                  </div>
                  <div className="posted-time text-muted">
                    3 mins ago
                  </div>
            <div className='bottom-icons-container'>
                   <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-comment"></i>
                  <i  className="fa-regular fa-paper-plane" ></i>
            </div>                                                              
            <div className="view-btn">
              View Comments
            </div>
      </div>
 


  )
}

export default Postcard