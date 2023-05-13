import React, { useEffect, useState } from 'react'
import './signup.css';
import {AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail} from 'react-icons/ai'
import {HiUserCircle} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import { toast } from 'react-toastify';
import axios from 'axios'
import{ RiLockPasswordFill}from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Signup = () => {
  const [passshow,setpassshow]=useState(false);
  const [confpassshow,setconfpassshow]=useState(false);
  const [signdata,setsigndata]=useState({
    ident_image:'',
    perimage:'',
    name:'',
    location:'',
    ident_number:'',
    email:'',
    password:'',
  })
  const [confdata,setconfdata]=useState("");

  const validname=(val)=>{
    const count=0;
    for(let i=0;i<val.length;i++){
      if(val[i]===" "){
        count++;
      }
    }
    if(count===3){
      return true;
    }
    return false;
  }

  const isvalidnumber=(val)=>{
    const reg=/^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/
    if(reg.test(val)){
      return true;
    }
    return false;
  }

  const handlesign=()=>{
    if(signdata.ident_image==""){
      toast.warn("enter identify image");
      return;
    }
    if(signdata.perimage==""){
      toast.warn("enter personal image");
      return;
    }
    if(signdata.name==""){
      toast.warn("enter your name");
      return;
    }
    if(signdata.location===""){
      toast.warn("enter your address")
      return;
    }
    if(signdata.ident_number===""||!isvalidnumber(signdata.ident_number)){
      toast.warn("enter valied identify number")
      return;
    }
    if(signdata.email===""){
      toast.warn("enter email")
      return;
    }
    if(signdata.password===""){
      toast.warn("enter password")
      return;
    }
    if(confdata===""){
      toast.warn("enter confirm password")
      return;
    }
    if(signdata.password!==confdata){
      toast.warn("make sure that password is same to confirm password")
    }
    const  data_send={
      ...signdata
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
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='signup'>
      <div>
      <div className='sign_up_eng_img'>
        <img src={require("../../assets/images/eng.png")} alt="" />
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
            handlesign();
          }}
        >
          <div>
            <h4>identify image</h4>
            <div className="per_img">
              <input type="file"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    ident_image:e.target.files[0]
                  })
                }}
              />
              <AiFillCamera/>
            </div>
          </div>
          <div>
            <h4>personal image</h4>
            <div className="per_img">
              <input type="file"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    perimage:e.target.files[0]
                  })
                }}
              />
              <AiFillCamera/>
            </div>
          </div>
          <div>
            <h4>name</h4>
            <div className="per_img">
              <input type="text"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    name:e.target.value
                  })
                }}
              />
              <HiUserCircle/>
            </div>
          </div>
          <div>
            <h4>location</h4>
            <div className="per_img">
              <input type="text"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    location:e.target.value
                  })
                }}
              />
              <GoLocation/>
            </div>
          </div>
          <div>
            <h4>identify number</h4>
            <div className="per_img">
              <input type="text"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    ident_number:e.target.value
                  })
                }}
              />
              <AiOutlineIdcard/>
            </div>
          </div>
{/*           <div>
            <h4>العنوان</h4>
            <div className="per_img">
              <input type="text" />
              <GoLocation/>
            </div>
          </div> */}
          <div>
            <h4>email</h4>
            <div className="per_img">
              <input type="text"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    email:e.target.value
                  })
                }}
              />
              <AiOutlineMail/>
            </div>
          </div>
          <div className='pass'>
            <h4>password</h4>
            <div className="per_img">
              <input type={`${passshow?'text':'password'}`}
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
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
          <div className='pass'>
            <h4>confirm password</h4>
            <div className="per_img">
              <input type={`${confpassshow?'text':'password'}`}
                onChange={(e)=>{
                  setconfdata(e.target.value);
                }}
              />
              <RiLockPasswordFill/>
              {
                confpassshow?(
                  <AiFillEyeInvisible
                    onClick={()=>{
                      setconfpassshow(false);
                    }}
                  />
                ):(
                  <AiFillEye
                  onClick={()=>{
                    setconfpassshow(true);
                  }}
                  />
                )
              }
            </div>
          </div>
          <button>
            sign up
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
          to={"/owsign"}>make work owner account</Link>
      </form>
      </div>
      <div className="overlay">

      </div>
    </div>
  )
}

export default Signup
