import React from 'react'
import './Postcard.scss'
function Postcard() {
  return (
   
        <div className='post-card-container my-3'>
                  <div className='profile-name-container'> 
                          <i className="fa-regular fa-user"></i>  
                           <h4>Bharathi R</h4> 
                           
                          </div>
                    <div className='student-dept my-2'>
                            IT department 
                    </div>
                  <div className="post-card-img-container">
                  <img src="https://media-exp1.licdn.com/dms/image/C5622AQFAdWbXoz3-aQ/feedshare-shrink_1280/0/1662393562922?e=1666828800&v=beta&t=jQlnCFvneazBdP3M54t0mdzW_ZyCLEx9QS9QXTrNnWU"  alt="card-img"/>
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