import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const ADLogin = () => {
  const navigate=useNavigate();
  const [data,setdata]=useState({
    email:'',
    password:'',
  })
  const handlelogin=()=>{
    const data_send={
      ...data
    }
    console.log(data);
    if(data.email=="admin@gmail.com"&&data.password=="admin"){
      navigate("/allcontructor")
    }
    else {
      toast.error("data is error",{
        position:'bottom-right'
      })
    }
    /* axios.post("",JSON.stringify(data_send))
    .then((res)=>{
      if(res.data.status=="success"){
        navigate("/adpage");
        toast.success("done");
      }
      else if(res.data.status=="error"){
        console.log()
        toast.error(res.data.message);
      }
    }) */
  }
  return (
    <div className='login_div'>
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          handlelogin();
        }}
      className='login_form'>
        <h4>login</h4>
        <input
          onChange={(e)=>{
            setdata({...data,email:e.target.value})
          }}
        type="text" placeholder='enter your email'/>
        <input
        onChange={(e)=>{
          setdata({...data,password:e.target.value})
        }}
        type="text" placeholder='enter your password'/>
        <button>login</button>
      </form>
    </div>
  )
}

export default ADLogin
