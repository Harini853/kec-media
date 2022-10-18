import React from 'react'
import './Posts.scss'
import PostCard from '../Postcard/Postcard'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Posts = ({posts}) => {
   const Posts = useSelector((state)=>(state.postReducer))
    const arr=[1,2,3,4,5,6,]
    
    console.log(Posts);
  return (
    <div className='posts-container shadow'>
        {Posts?.data.map((p)=>(
            <div key={p._id}>
                    <PostCard  post={p}/>
                </div>
        ))}
    </div>
  )
}

export default Posts
