import React,{useState} from 'react'
import './RightSideBar.scss'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getAllUsers} from '../../actions/user'
import SearchCard from '../SearchCard/SearchCard'
const RightSideBar = () => {
  const dispatch=useDispatch()
    const [search,searchKey]=useState('')
    const [user,setUsers]=useState(null)
    const arr=[1,2,1]
    const User=useSelector((state)=>(state.usersReducer))
    useEffect(()=>{
      if(User.data!=null){
        setUsers(User.data)
      }
    },[])
    useEffect(()=>{
      dispatch(getAllUsers())
    },[dispatch])
    useEffect(()=>{
        if(search!=null){
        let str=search.toLowerCase()
        const data =  User?.data?.filter(user=>user.name.toLowerCase().includes(str))
       
       if(data){
             setUsers(data)
       }
      }
    },[search])
    useEffect(()=>{
        console.log(user)
    },[user])
    useEffect(()=>{
      dispatch(getAllUsers())
    },[])

  return (
    <div className='right-side-bar-container shadow'>
            <div className="input-search">
                <input type="text" className="form-control" placeholder='Search Friends' value={search} onChange={e => searchKey(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {user &&
            <div className="search-list">
                <p className="top-results">Top Results</p>
                  <div className="list">
                    {user.map((u) => <SearchCard key={u._id} user={u}/>)}
                  </div>
            </div>
      }
    </div>
  )
}

export default RightSideBar
