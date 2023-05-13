import React, { useState } from 'react'
import { AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../login/englogin/englogin.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import '../addoffer/addoffer.css'
import './addbuilding.css'
const Addbuilding = () => {
  const [passshow,setpassshow]=useState(false);
  const [offerdata,setofferdata]=useState({
    company_name:'',
    expec_time:'',
    req_money:'',
    bri_work:'',
    notice:'',
  })
  const handlelogin=()=>{
    if(offerdata.company_name===""){
      toast.warn("enter company name")
      return;
    }
    if(offerdata.expec_time===""){
      toast.warn("enter expected time")
      return;
    }
    if(offerdata.req_money===""){
      toast.warn("enter required money")
      return;
    }
    if(offerdata.bri_work===""){
      toast.warn("enter brief work")
      return;
    }
    if(offerdata.notice===""){
      toast.warn("enter your notice")
      return;
    }
    const  data_send={
      ...offerdata
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
    <div className='signup login addoffer addbuild'>
    <div >
    <h4
      style={{
        fontSize:'20px',
        color:'#4763ac',
        marginTop:'10px'
      }}
    >Add Offer</h4>
    <form
        onSubmit={(e)=>{
          e.preventDefault();
          handlelogin();
        }}
      >
        <div
          style={{
            display:'flex',
            flexDirection:'column',
            marginBottom:'0px'
          }}
        >
          <h4>build image</h4>
          <input
            style={{
              width:'100%'
            }}
          type="file" />
        </div>
        <div
          style={{
            marginBottom:'0px'
          }}
        >
          <h4>building name</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  expec_time:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>build government</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  req_money:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div style={{
          marginBottom:'10px'
        }}>
          <h4>building details</h4>
          <div className="per_img loginemail">
            <textarea
              style={{
                width:'100%',
                height:'100px'
              }}
            ></textarea>
          </div>
        </div>
        <button>
          send offer
        </button>
    </form>
    </div>
    <div className="overlay">

    </div>
  </div>
  )
}

export default Addbuilding
