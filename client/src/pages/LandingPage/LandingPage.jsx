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
    <div className='body-container'>
        <div className='p-container'>
        <pre className='text-white'>{`
              Join With our KEC Community...!!!  
           To Share Your Photos,videos,thoughts....
                     Updates of Kec!
          `}</pre>
      
        </div>
        <div className='get-started-link'>
      
        
        <button onClick={handleNavigate} className="started-link btn btn-success" style={{marginLeft:"10px"}}>Get Started </button>
        </div>
    </div>
  )
}

export default LandingPage