import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {newPost} from '../../actions/post'
import './NewPostForm.scss'


const NewPostForm = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [description,setDesc]=useState('')
  const [file,setFile]=useState('')
  const User=useSelector((state)=>(state.currentUserReducer))
  const handleSubmit =async (e) =>{
    e.preventDefault()
    const id = User?.result?._id
    const formData = new FormData()
     formData.append('photo',file)
     formData.append('description',description)
     formData.append('id',id)
    dispatch(newPost(formData,navigate))
  }
  const cancel = (e) =>{
    e.preventDefault()
    navigate('/Profile')
  }
  return (
    <div className='new-post-form-container'>
        <div className="container my-3">
          <div className="row">
            <div className=" col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
          <div className="card">
            <div className="card-body" >
              <h2 className="text-center my-3">NEW POST</h2>
              <form className='row' onSubmit={handleSubmit} encType="multipart/form-data" >
                <div className="mb-3">
                  <lablel className="form-label">DESCRIPTION</lablel>
                  <textarea name="desc" value={description} onChange={e => setDesc(e.target.value)} cols="1" rows="2" className='form-control'></textarea>
                </div>
                  <div className="form-group mb-3">
                    <label className="form-label">POST IMAGE</label>
                    <input type="file"  className="form-control" onChange={e => setFile(e.target.files[0])} />
                  </div>
                  <div className="col-6 d-grid">
                    <button className="btn btn-primary">Add</button>
                  </div>
                  <div className="col-6 d-grid">
                   <button onClick={cancel} className="btn btn-danger">Cancel</button>
                  </div>
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