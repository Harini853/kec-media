import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import Posts from '../../components/Posts/Posts'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import './Home.scss'
const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <LeftSideBar />
            </div>
            <div className="col-6">
              <Posts />
            </div>
            <div className="col-3">
              <RightSideBar />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home