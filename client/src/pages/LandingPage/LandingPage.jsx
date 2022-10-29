import React from 'react'
import './LandingPage.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../actions/currentUser';
const LandingPage=()=> {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const handleNavigate =async ()=>{
    const token =await localStorage.getItem('KEC-MEDIA')
    if(token!=null){
      dispatch(setCurrentUser(JSON.parse(token)))
        navigate('/Home')
    }
    else{
      navigate('/Auth')
    }
  
  }
  return (
    <div className='landing-page-container'>
        <div className='p-container'>
        <p className='text-center'>
              Join With our KEC Community...!!!  <br />
           To Share Your Photos,videos,thoughts.... <br />
                     Updates of Kec!
          </p>
      
        </div>
        <div className='get-started-link text-center'>
      
        
        <button onClick={handleNavigate} className="btn btn-outline-light" >Get Started </button>
        </div>
    </div>
  )
}

export default LandingPage