import React, { useContext, useState } from 'react'
import './ownerlogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../../context/AppContextProvider';
const OwnerLogin = () => {
  const {owadlogin,ownerlogin}=useContext(AppContext);
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
    axios.post("http://127.0.0.1:8000/building_owner_login/",data_send)
    .then((res)=>{
      console.log(res)
      if(res.data.status==="success"){
        toast.success("success",{
          position:'bottom-right'
        });
        owadlogin(res.data.body);
        ownerlogin(res.data.body);
        localStorage.setItem("owner",JSON.stringify(res.data.body));
        navigate("/",{replace:true});

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
    <h4
      style={{
        fontSize:'20px',
        color:'#8AA4AE',
        paddingTop:'20px'
      }}
      onClick={()=>{
        navigate("")
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
                      >
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
