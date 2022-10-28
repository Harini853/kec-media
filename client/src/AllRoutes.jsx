import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import NewPostForm from './components/NewPostForm/NewPostForm'
import LandingPage from './pages/LandingPage/LandingPage'
import EditProfileForm from './components/EditProfileForm/EditProfileForm'
import OtherProfile from './pages/OtherProfile/OtherProfile'
const AllRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/Auth' element={<Auth/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Home' element={<Home/>} />
           <Route path='/New' element={<NewPostForm />} />
           <Route path='/Edit' element={<EditProfileForm />}/>
           <Route path='/Profile/:id' element={<OtherProfile />} />
        </Routes>
  )
}

export default AllRoutes