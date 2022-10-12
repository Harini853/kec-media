import React from 'react'
import './Posts.scss'
import PostCard from '../Postcard/Postcard'
const Posts = () => {
    const arr=[1,2,3,4,5,6,]
  return (
    <div className='posts-container shadow'>
        {arr.map((m,idx)=>(
            <div key={idx}>
                    <PostCard />
                </div>
        ))}
    </div>
  )
}

export default Posts
