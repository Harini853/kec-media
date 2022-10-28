import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import './OtherProfile.scss'
const OtherProfile = () => {
  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const Users = useSelector((state)=>(state.usersReducer))
  console.log(Users)
  useEffect(()=>{
      let user = Users.data.filter(f => f._id == id)
      console.log(user);
  },[Users])
  return (
    <div>OtherProfile</div>
  )
}

export default OtherProfile