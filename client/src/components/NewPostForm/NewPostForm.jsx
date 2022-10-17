import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './NewPostForm.scss'
const NewPostForm = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [file,setFile]=useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()

  }
  const cancel = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='new-post-form-container'>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-6 offset-3 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input type="text" />
                  <input type="file" onChange={e => setFile(e.target.value)} />
                  
              </form>
            </div>
          </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default NewPostForm