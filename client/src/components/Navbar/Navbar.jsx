import {NavLink} from "react-router-dom";
import './Navbar.scss'
function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-md">
    <div className="container-lg">
      <a className="navbar-brand" href="#"><i className="fa-solid fa-users" />SOCIAL MEDIA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to='/Home' className="nav-link" activeclassname='active' style={{fontSize:'20px'}}>Home</NavLink>
            </li>
            
            <li className="nav-item">
                <NavLink to='/Profile' className='nav-link' activeclassname='active' style={{fontSize:'20px'}} >Profile</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to='/Auth' className='nav-link' activeclassname='active' style={{fontSize:'20px'}}>Logout</NavLink>
            </li> */}
            
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Navbar;