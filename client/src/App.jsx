import './App.scss';
import {BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './actions/currentUser';
import { useEffect } from 'react';
import { getAllPost } from './actions/post';
import {setMyDetails} from './actions/details'
import { getAllUsers } from './actions/user';
const App = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    const result= localStorage.getItem('KEC-MEDIA')
    if(result!=null){
    dispatch(setCurrentUser(JSON.parse(result)))
    dispatch(setMyDetails())
    }
    dispatch(getAllPost())
    dispatch(getAllUsers())
  },[dispatch])
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
 
    </div>
  );
}
export default App;
