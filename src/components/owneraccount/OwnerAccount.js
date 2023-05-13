import React, { useEffect, useState } from 'react'
import './owneraccount.css'
import axios from 'axios'
import {FaUserCircle} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {BiCreditCard} from 'react-icons/bi'
import {BsFillImageFill, BsFillShieldLockFill} from 'react-icons/bs'
import {AiFillIdcard} from 'react-icons/ai'
import { toast } from 'react-toastify'
import {Spin} from 'antd'
const OwnerAccount = () => {
  const [signloading,setsignloading]=useState(false);
  const [ownersign,setownersign]=useState({
    per_image:'',
    ident_image:'',
    name:'',
    location:'',
    ident_num:'',
    password:'',
  })

  const [confpass,setconfpass]=useState("");

  const handlesign=()=>{
    if(ownersign.per_image==""){
      toast.warn("enter personal image");
      return ;
    }
    if(ownersign.ident_image==""){
      toast.warn("enter identify image");
      return ;
    }
    if(ownersign.name==""){
      toast.warn("enter your name");
      return ;
    }
    if(ownersign.location==""){
      toast.warn("enter your location");
      return ;
    }
    if(ownersign.ident_num==""){
      toast.warn("enter your identify number");
      return ;
    }
    if(ownersign.ident_num*0!=0){
      toast.warn("make sure that identify number does not have any character than numbers");
      return;
    }
    if(ownersign.password==""){
      toast.warn("enter your password");
      return ;
    }
    if(confpass==""){
      toast.warn("enter your confirm password");
      return ;
    }
    if(confpass!==ownersign.password){
      toast.warn("make sure that password is smiler to confirm password");
    }
    const data_send={
      ...ownersign
    }
    setsignloading(true);
    /* axios.post("url",data_send)
    .then((res)=>{
      if(res.data.status==="success"){

      }
      else if(res.data.status==="error"){
        toast.error(res.data.message);
      }
    }).finally(()=>{
      setsignloading(false);
    }) */
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='owneraccount'>
      <div className="owner_form">
        <h4>Create an owner account</h4>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            handlesign()
          }}
        >
          <div className="input">
            <input type="file" placeholder='name'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                per_image:e.target.value,
              })
            }}
            />
            <BsFillImageFill/>
          </div>
          <div className="input">
            <input type="file" placeholder='name'
              onChange={(e)=>{
                setownersign({
                  ...ownersign,
                  ident_image:e.target.value,
                })
              }}
            />
            <AiFillIdcard/>
          </div>
          <div className="input">
            <input type="text" placeholder='name'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                name:e.target.value,
              })
            }}
            />
            <FaUserCircle/>
          </div>
          <div className="input">
            <input type="text" placeholder='location'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                location:e.target.value,
              })
            }}
            />
            <GoLocation/>
          </div>
          <div className="input">
            <input type="text" placeholder='identify number'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                ident_num:e.target.value,
              })
            }}
            />
            <BiCreditCard/>
          </div>
          <div className="input">
            <input type="password" placeholder='password'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                password:e.target.value,
              })
            }}
            />
            <BsFillShieldLockFill/>
          </div>
          <div className="input">
            <input type="password" placeholder='confirm password'
            onChange={(e)=>{
              setconfpass(e.target.value)
            }}
            />
            <BsFillShieldLockFill/>
          </div>
          {
            signloading?(
              <div
              style={{
                textAlign:'center'
              }}
              >
                <Spin/>
              </div>
            ):(
              <button>sign up</button>
            )
          }
        </form>
      </div>
      <div className="overlay">

      </div>
    </div>
  )
}

export default OwnerAccount
