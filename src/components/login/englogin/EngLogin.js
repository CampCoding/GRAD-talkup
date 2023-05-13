import React, { useState } from 'react'
import { AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './englogin.css'
import { toast } from 'react-toastify';
import axios from 'axios';
const Login = () => {
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
    <div className='sign_up_eng_img'>
      <img src={require("../../../assets/images/eng.png")} alt="" />
    </div>
    <h4
      style={{
        fontSize:'20px',
        color:'#4763ac'
      }}
    >Engineer/Developer</h4>
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
        <Link
          style={{
            display:'block',
            marginTop:'20px',
            textDecoration:'none',
            cursor:'pointer',
            textTransform:'capitalize',
            fontSize:'20px'
          }}
        to={"/owlogin"}>log in as owner account</Link>
    </form>
    </div>
    <div className="overlay">

    </div>
  </div>
  )
}

export default Login
