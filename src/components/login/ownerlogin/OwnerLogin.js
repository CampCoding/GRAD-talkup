import React, { useState } from 'react'
import './ownerlogin.css'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import axios from 'axios';
const OwnerLogin = () => {
  const [passshow,setpassshow]=useState(false);
  const [logindata,setlogindata]=useState({
    email:'',
    password:'',
  })
  const handlelogin=()=>{
    if(logindata.email===""){
      toast.warn("enter email")
      return;
    }
    if(logindata.password===""){
      toast.warn("enter password")
      return;
    }
    const  data_send={
      ...logindata
    }
    axios.post("url",data_send)
    .then((res)=>{
      if(res.data.status==="success"){

      }
      else if(res.data.status==="error"){
        toast.error(res.data.message);
      }
      else{
        toast.error("حدث خطأ ما برجاء المحاوله مره اخرى")
      }
    })
  }

  return (
    <div className='signup login'>
    <div>
    <h4
      style={{
        fontSize:'20px',
        color:'#4763ac',
        paddingTop:'20px'
      }}
    >log in as owner account</h4>
    <form
        onSubmit={(e)=>{
          e.preventDefault();
          handlelogin();
        }}
      >
        <div>
          <h4>email</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setlogindata({
                  ...logindata,
                  email:e.target.value
                })
              }}
            />
            <AiOutlineMail/>
          </div>
        </div>
        <div className='pass loginpass'>
          <h4>password</h4>
          <div className="per_img">
            <input type={`${passshow?'text':'password'}`}
              onChange={(e)=>{
                setlogindata({
                  ...logindata,
                  password:e.target.value
                })
              }}
            />
            <RiLockPasswordFill/>
            {
              passshow?(
                <AiFillEyeInvisible
                  onClick={()=>{
                    setpassshow(false);
                  }}
                />
              ):(
                <AiFillEye
                onClick={()=>{
                  setpassshow(true);
                }}
                />
              )

            }
          </div>
        </div>
        <button>
          log in
        </button>
    </form>
    </div>
    <div className="overlay">

    </div>
  </div>
  )
}

export default OwnerLogin
