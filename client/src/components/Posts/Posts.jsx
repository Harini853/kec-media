import React from 'react'
import './Posts.scss'
import PostCard from '../Postcard/Postcard'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Posts = ({posts}) => {
   const Posts = useSelector((state)=>(state.postReducer))
  
   
  return (
    <div className='posts-container shadow'>
      {Posts.data && <>
        {Posts?.data.map((p)=>(
            <div key={p._id}>
                    <PostCard  post={p}/>
                </div>
        ))} </>
  }
    </div>
  )
}

export default Posts
