import React, { useContext, useEffect, useState } from 'react'
import './owneraccount.css'
import axios from 'axios'
import {FaUserCircle} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {BiCreditCard} from 'react-icons/bi'
import {BsFillImageFill, BsFillShieldLockFill} from 'react-icons/bs'
import {AiFillIdcard, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { toast } from 'react-toastify'
import {Spin} from 'antd'
import { AppContext } from '../context/AppContextProvider'
import { useNavigate } from 'react-router'
const OwnerAccount = () => {const navigate=useNavigate();
  const {owadlogin,ownerlogin}=useContext(AppContext);
  const [signloading,setsignloading]=useState(false);
  const [ownersign,setownersign]=useState({
    owner_name:'',
    email:'',
    owner_phone:'',
    password:'',
    address:'',
    identify_number:'',
    identify_image:'',

  })

  const [confpass,setconfpass]=useState("");

  const handlesign=()=>{
    if(ownersign.identify_image==""){
      toast.warn("enter identify image",{
        position:'bottom-right'
      });
      return ;
    }
    if(ownersign.owner_name==""){
      toast.warn("enter your name",{
        position:'bottom-right'
      });
      return ;
    }
    if(ownersign.owner_phone==""){
      toast.warn("enter your phone",{
        position:'bottom-right'
      });
      return ;
    }
    if(ownersign.address==""){
      toast.warn("enter your address",{
        position:'bottom-right'
      });
      return ;
    }
    if(ownersign.identify_number==""){
      toast.warn("enter your identify number",{
        position:'bottom-right'
      });
      return ;
    }
    if(ownersign.identify_number*0!=0){
      toast.warn("make sure that identify number does not have any character than numbers",{
        position:'bottom-right'
      });
      return;
    }
    if(ownersign.password==""){
      toast.warn("enter your password",{
        position:'bottom-right'
      });
      return ;
    }
    if(confpass==""){
      toast.warn("enter your confirm password");
      return ;
    }
    if(confpass!==ownersign.password){
      toast.warn("make sure that password is smiler to confirm password",{
        position:'bottom-right'
      });
    }
/*     const data_send={
      ...ownersign
    } */
    const formdata=new FormData();
    formdata.append('owner_name',ownersign.owner_name);
    formdata.append('owner_phone',ownersign.owner_phone);
    formdata.append('email',ownersign.email);
    formdata.append('password',ownersign.password);
    formdata.append('address',ownersign.address);
    formdata.append('identify_number',ownersign.identify_number);
    formdata.append('identify_image',ownersign.identify_image);
    setsignloading(true);
    //console.log(data_send)
    axios.post("http://127.0.0.1:8000/register_building_owner/",formdata)
    .then((res)=>{
      console.log(res)
      if(res.data.status==="success"){
        //console.log(res.data.body);
        //alert(JSON.stringify(res.data.body));
        owadlogin(res.data.body);
        ownerlogin(res.data.body)
        localStorage.setItem("owner",JSON.stringify(res.data.body))
        navigate("/",{replace:true});
      }
      else if(res.data.status==="faild"){
        toast.error(res.data.body,{
          position:'bottom-right'
        });
      }
    }).finally(()=>{
      setsignloading(false);
    })
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='owneraccount'>
      <div className="owner_form">
        <h4 className='color'>Create an owner account</h4>
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
                  identify_image:e.target.value,
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
                owner_name:e.target.value,
              })
            }}
            />
            <FaUserCircle/>
          </div>
          <div className="input">
            <input type="text" placeholder='phone'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                owner_phone:e.target.value,
              })
            }}
            />
            <AiOutlinePhone/>
          </div>
          <div className="input">
            <input type="text" placeholder='email'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                email:e.target.value,
              })
            }}
            />
            <AiOutlineMail/>
          </div>
          <div className="input">
            <input type="text" placeholder='address'
            onChange={(e)=>{
              setownersign({
                ...ownersign,
                address:e.target.value,
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
                identify_number:e.target.value,
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
              <button
              className='gradiant'
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >sign up</button>
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
