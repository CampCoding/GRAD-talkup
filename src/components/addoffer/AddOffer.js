import React, { useContext, useState } from 'react'
import { AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../login/englogin/englogin.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import './addoffer.css'
import { AppContext } from '../context/AppContextProvider';
const AddOffer = () => {
  const navigate=useNavigate();
  const {user}=useContext(AppContext);
  console.log(user)
  console.log(user.contractor_id)

  const location=useLocation();
  const {item}=location.state;
  //console.log(item);
  const [passshow,setpassshow]=useState(false);
  const [offerdata,setofferdata]=useState({
    project_id:item,
    constructor_id:user.contractor_id,
    bid_time:'',
    bid_money:'',
    bid_details:'',
    notice:'',
  })
  const [bid_pdf_file,setbid_pdf_file]=useState(null);

  const handlelogin=()=>{
    if(user.contractor_id==null||user.contractor_id==""){
      toast.error("first sign",{
        position:'bottom-right'
      })
    }
    if(offerdata.company_name===""){
      toast.warn("enter company name",{
        position:'bottom-right'
      })
      return;
    }
    if(offerdata.bid_time===""){
      toast.warn("enter expected time",{
        position:'bottom-right'
      })
      return;
    }
    if(offerdata.bid_money===""){
      toast.warn("enter required money",{
        position:'bottom-right'
      })
      return;
    }
    if(offerdata.bid_details===""){
      toast.warn("enter brief work",{
        position:'bottom-right'
      })
      return;
    }
/*     if(offerdata.notice===""){
      toast.warn("enter your notice")
      return;
    } */
  /*   const  data_send={
      ...offerdata
    } */
    console.log(offerdata);
    const formdata=new FormData();
    formdata.append('project_id',item);
    formdata.append('constructor_id',user.contractor_id);
    formdata.append('bid_time',offerdata.bid_time);
    formdata.append('bid_money',offerdata.bid_money);
    formdata.append('bid_details',offerdata.bid_details);
    formdata.append('notices',offerdata.notice);
    formdata.append('bid_pdf_file',bid_pdf_file);

    // console.log(formdata);
    axios.post("http://127.0.0.1:8000/create_bid/",formdata)
    .then((res)=>{

      console.log(res.data)
      if(res.data.status==="success"){
        toast.success(res.data.body,{
          position:'bottom-right'
        });
        navigate(-1)
      }
      else if(res.data.status==="error"){
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
    <div className='signup login addoffer'>
    <div>
    <h4
      style={{
        fontSize:'20px',
        color:'#57707a',
        marginTop:'10px'
      }}
    >Add bid</h4>
    <form
        onSubmit={(e)=>{
          e.preventDefault();
          handlelogin();
        }}
      >
{/*         <div>
          <h4>company name</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  company_name:e.target.value
                })
              }}
            />
          </div>
        </div> */}
{/*         <div className='pass loginpass'>
          <h4>offer details</h4>
          <div className="per_img">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  :e.target.value
                })
              }}
            />
          </div>
        </div> */}
        <div>
          <h4>expected time</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  bid_time:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>required money</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  bid_money:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>Brief about work</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  bid_details:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>notices</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  notice:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>plan or purposal</h4>
          <div className="per_img loginemail">
            <input style={{
              textAlign:'right',
              direction:'rtl',
              padding:'0px',
              height:'50px'
            }} type="file"
              onChange={(e)=>{
                setbid_pdf_file(e.target.files[0])
              }}
            />
          </div>
        </div>
        <button style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          send bid
        </button>
    </form>
    </div>
    <div className="overlay">

    </div>
  </div>
  )
}

export default AddOffer
