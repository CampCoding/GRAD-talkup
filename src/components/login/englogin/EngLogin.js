import React, { useContext, useState } from 'react'
import { AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './englogin.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../../context/AppContextProvider';
const Login = () => {const {login}=useContext(AppContext)
  const navigate=useNavigate();
  const [passshow,setpassshow]=useState(false);
  const [logindata,setlogindata]=useState({
    email:'',
    password:'',
  })
  const handlelogin=()=>{
    if(logindata.email===""){
      toast.warn("enter email",{
        position:'bottom-right'
      })
      return;
    }
    if(logindata.password===""){
      toast.warn("enter password",{
        position:'bottom-right'
      })
      return;
    }
    const  data_send={
      ...logindata
    }
    console.log(data_send)
    axios.post("http://127.0.0.1:8000/contractor_login/",data_send)
    .then((res)=>{
      console.log(res)
      if(res.data.status==="success"){
        //localStorage.setItem('contractor',JSON.stringify(res.data.body));
        login(res.data.body);
        navigate("/",{replace:true})
      }
      else if(res.data.status==="faild"){
        toast.error(res.data.body,{
          position:'bottom-right'
        });
      }
      else{
        toast.error("حدث خطأ ما برجاء المحاوله مره اخرى",{
          position:'bottom-right'
        })
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
        color:'#8AA4AE'
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
            <input
            style={{
              direction:'ltr'
            }}
            type="text"
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
            <input
              style={{
                direction:'ltr'
              }}
            type={`${passshow?'text':'password'}`}
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
        <button 
                className='gradiant'
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'10px'
        }}>
          log in
        </button>
        <Link
          style={{
            display:'flex',alignItems:'center',justifyContent:'center',
            marginTop:'20px',
            textDecoration:'none',
            cursor:'pointer',
            textTransform:'capitalize',
            fontSize:'20px',
            color:'#8AA4AE'
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
