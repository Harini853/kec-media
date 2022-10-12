import React from 'react'
import './LandingPage.scss'
import {Link} from "react-router-dom";
function LandingPage() {
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
      
        
        <Link className="started-link btn btn-success" to="/Auth"style={{marginLeft:"10px"}}>Get Started </Link>
        </div>
    </div>
  )
}

export default LandingPage