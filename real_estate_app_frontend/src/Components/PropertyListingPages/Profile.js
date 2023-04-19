import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'

function Profile() {
  let name = localStorage.getItem("name");
  let id = localStorage.getItem("userid");
  let email = localStorage.getItem("email")
  let navigate = useNavigate()

  return (
    <div id='profileCard' className='container-fluid card d-flex align-items-center justify-content-center' style={{ maxWidth: "400px", maxHeight: "600px" }}>
      <div className='' id='profile'><BsPersonCircle /></div>
      <div >
        <ul className='list-group'>
          <li className='list-group-item'>Name :- {name}</li>
          <li className='list-group-item'>Mail ID :- {email}</li>
          <li className='list-group-item'>User ID :- {id}</li>
        </ul>
      </div>
      <div className='btn-group mb-3'>
        <button className='btn btn-secondary mr-2 rounded' onClick={()=>{
          navigate("/property");
        }}>Back</button>
      <button className='btn btn-info ml-2 rounded' onClick={()=>{
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("userid");
        localStorage.removeItem("token");
        navigate("/");
      }}>Logout</button>
      </div>
      
    </div>
  )
}

export default Profile