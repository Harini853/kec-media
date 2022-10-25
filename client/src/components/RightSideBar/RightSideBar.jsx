import React,{useState} from 'react'
import './RightSideBar.scss'
import ProfileSmallCard from '../ProfileSmallCard/ProfileSmallCard'
const RightSideBar = () => {
    const [search,searchKey]=useState('')
    const arr=[1,2,1]
  return (
    <div className='right-side-bar-container shadow'>
            <div className="input-search">
                <input type="text" className="form-control" placeholder='Search Freinds' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search-list">
                <p className="top-results">Top Results</p>
                  <div className="list">
                    {/* {arr.map((a,idx) => <ProfileSmallCard key={idx}/>)} */}
                  </div>
            </div>
    </div>
  )
}

export default RightSideBar
