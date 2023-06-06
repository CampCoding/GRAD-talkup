import React, { useState } from 'react'
import "./contact.css"
import { toast } from 'react-toastify'
const Contact = () => {
  const [contdata,setcontdata]=useState({
    name:'',
    email:'',
    message:'',
  })
  const valiedemail=(val)=>{
    const reg=/'[a-z0-9]+@[a-z]+\.[a-z]{2,3}'/
    if(reg.test(val)){
      return true;
    }
    return false;
  }
  const handlecontact=()=>{
    if(contdata.name==""){
      toast.warn("enter your name",{
        position:'bottom-right'
      })
      return;
    }
    if(contdata.email==""||!valiedemail(contdata.email)){
      toast.warn("enter your email",{
        position:'bottom-right'
      })
      return;
    }
    if(contdata.message==""){
      toast.warn("enter your message",{
        position:'bottom-right'
      })
      return;
    }

  }
  return (
    <div className='contact_div'>
      <div className="contact">
        <img src={require("../../assets/images/tele.jpg")} alt="" />
        <div className="contact_form">
          <h3>contact us</h3>
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              handlecontact();
            }}
          >
          <input
            style={{}}
            onChange={(e)=>{
              setcontdata({...contdata,name:e.target.value})
            }}
          type="text" placeholder='enter your name'/>
          <input
          onChange={(e)=>{
              setcontdata({...contdata,email:e.target.value})
            }} type="email" placeholder='enter your email'/>
          <textarea             onChange={(e)=>{
              setcontdata({...contdata,message:e.target.value})
            }} placeholder='enter your message'></textarea>
          <div
            style={{
              marginBottom:'20px',
              display:'flex',
              alignItems:'center',
              gap:'20px'
            }}
          >
            <a target='_blank' href={`https://wa.me/+20 102 407 5216`}  >
              <img style={{
                width:'30px'
              }} src={require("../../assets/images/whatsapp.png")} alt="" />
            </a>
            <a target='_blank' href="https://mail.google.com/mail/egyptiantendering@gmail.com‏">
              <img style={{
                width:'30px'
              }} src={require("../../assets/images/email.png")} alt="" />
            </a>
          </div>
          <button style={{display:'flex',alignItems:'center',justifyContent:'center'}}>send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
