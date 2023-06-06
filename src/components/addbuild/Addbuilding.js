import React, { useContext, useState } from 'react'
import { AiFillCamera, AiFillEye, AiFillEyeInvisible, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import '../login/englogin/englogin.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import '../addoffer/addoffer.css'
import './addbuilding.css'
import { AppContext } from '../context/AppContextProvider';
import { Select, Spin } from 'antd';
const Addbuilding = () => {
  const {ownserdata,ownerdata}=useContext(AppContext);
  console.log(ownerdata)
  const navigate=useNavigate();
  const [loading,setloading]=useState(false);
  const [passshow,setpassshow]=useState(false);
  console.log(ownerdata.owner_id);
  const [offerdata,setofferdata]=useState({
    project_name:'',
    project_image:null,
    project_address:'',
    project_government:'Alexandria',
    project_details:'',
    ministry:'',
    project_owner_id:ownerdata.owner_id,
  })
  const governments=[

    {
      value: ' Alexandria',
      label: ' Alexandria',
    },
    {
      value: 'Sharqia',
      label: 'Sharqia',
    },
    {
      value: 'Asyut',
      label: 'Asyut',
    },
    {
      value: 'Beheira',
      label: 'Beheira',
    },
    {
      value: 'cairo',
      label: 'cairo',
    },
    {
      value: 'Damietta',
      label: 'Damietta',
    },
    {
      value: 'Kafr el-Sheikh',
      label: 'Kafr el-Sheikh',
    },
    {
      value: 'Luxor',
      label: 'Luxor',
    },
    {
      value: 'elmonofia',
      label: 'elmonofia',
    },
    {
      value: 'al-Minya',
      label: 'al-Minya',
    },
    {
      value: 'Port Said',
      label: 'Port Said',
    },
    {
      value: 'elqaliobia',
      label: 'elqaliobia',
    },
    {
      value: 'Ismailia',
      label: 'Ismailia',
    },
    {
      value: 'Aswan',
      label: 'Aswan',
    },
    {
      value: 'Beni Suef',
      label: 'Beni Suef',
    },
    {
      value: 'Dakahlia',
      label: 'Dakahlia',
    },
    {
      value: 'Faiyum',
      label: 'Faiyum',
    },
    {
      value: 'Gharbia',
      label: 'Gharbia',
    },
    {
      value: 'giza',
      label: 'giza',
    },
    {
      value: 'Red Sea',
      label: 'Red Sea',
    },
    {
      value: 'South Sinai',
      label: 'South Sinai',
    },
    {
      value: 'North Sinai',
      label: 'North Sinai',
    },
    {
      value: 'Suez',
      label: 'Suez',
    },
    {
      value: 'Sohag',
      label: 'Sohag',
    },
    {
      value: 'New Valley',
      label: 'New Valley',
    },
    {
      value: 'Matruh',
      label: 'Matruh',
    },
  ]
  const ministries = [

    {
      value: 'Ministry of Agriculture and Land Reclamation',
      label: 'Ministry of Agriculture and Land Reclamation',
    },
    {
      value: 'Ministry of Antiquities',
      label: 'Ministry of Antiquities',
    },
    {
      value: 'Ministry of Civil Aviation',
      label: 'Ministry of Civil Aviation',
    },
    {
      value: 'Ministry of Communications and Information Technology',
      label: 'Ministry of Communications and Information Technology',
    },
    {
      value: 'Ministry of Defense and Military Production',
      label: 'Ministry of Defense and Military Production',
    },
    {
      value: 'Ministry of Education and Technical Education',
      label: 'Ministry of Education and Technical Education',
    },
    {
      value: 'Ministry of Electricity and Renewable Energy',
      label: 'Ministry of Electricity and Renewable Energy',
    },
    {
      value: 'Ministry of Environment',
      label: 'Ministry of Environment',
    },
    {
      value: 'Ministry of Finance',
      label: 'Ministry of Finance',
    },
    {
      value: 'Ministry of Foreign Affairs',
      label: 'Ministry of Foreign Affairs',
    },
    {
      value: 'Ministry of Health and Population',
      label: 'Ministry of Health and Population',
    },
    {
      value: 'Ministry of Higher Education and Scientific Research',
      label: 'Ministry of Higher Education and Scientific Research',
    },
    {
      value: 'Ministry of Housing, Utilities, and Urban Communities',
      label: 'Ministry of Housing, Utilities, and Urban Communities',
    },
    {
      value: 'Ministry of Immigration and Egyptian Expatriates Affairs',
      label: 'Ministry of Immigration and Egyptian Expatriates Affairs',
    },
    {
      value: 'Ministry of Industry and Trade',
      label: 'Ministry of Industry and Trade',
    },
    {
      value: 'Ministry of Interior',
      label: 'Ministry of Interior',
    },
    {
      value: 'Ministry of Investment and International Cooperation',
      label: 'Ministry of Investment and International Cooperation',
    },
    {
      value: 'Ministry of Local Development',
      label: 'Ministry of Local Development',
    },
    {
      value: 'Ministry of Manpower',
      label: 'Ministry of Manpower',
    },
    {
      value: 'Ministry of Military Justice',
      label: 'Ministry of Military Justice',
    },
    {
      value: 'Ministry of Planning and Economic Development',
      label: 'Ministry of Planning and Economic Development',
    },
    {
      value: 'Ministry of Petroleum and Mineral Resources',
      label: 'Ministry of Petroleum and Mineral Resources',
    },
    {
      value: 'Ministry of Public Business Sector',
      label: 'Ministry of Public Business Sector',
    },
    {
      value: 'Ministry of Religious Endowments (Awqaf)',
      label: 'Ministry of Religious Endowments (Awqaf)',
    },
    {
      value: 'Ministry of Social Solidarity',
      label: 'Ministry of Social Solidarity',
    },
    {
      value: 'Ministry of Sports and Youth',
      label: 'Ministry of Sports and Youth',
    },
    {
      value: 'Ministry of Tourism and Antiquities',
      label: 'Ministry of Tourism and Antiquities',
    },
    {
      value: 'Ministry of Transport',
      label: 'Ministry of Transport',
    },
    {
      value: 'Ministry of Water Resources and Irrigation',
      label: 'Ministry of Water Resources and Irrigation',
    },
  ];
  const handlelogin=()=>{
    if(offerdata.project_image===""){
      toast.warn("enter image name",{
        position:'bottom-right'
      })
      return;
    }
    if(offerdata.project_name===""){
      toast.warn("enter name",{
        position:'bottom-right'
      })
      return;
    }
    if(offerdata.project_government===""){
      toast.warn("enter required money",{
        position:'bottom-right'
      })
      return;
    }

    if(offerdata.project_details===""){
      toast.warn("enter project details",{
        position:'bottom-right'
      })
      return;
    }
    // const  data_send={
    //   ...offerdata
    // }
    const formdata=new FormData();
    formdata.append("project_name",offerdata.project_name);
    formdata.append("project_image",offerdata.project_image);
    formdata.append("project_address",offerdata.project_address);
    formdata.append("project_government",offerdata.project_government);
    formdata.append("project_details",offerdata.project_details);
    formdata.append("project_details",offerdata.project_details);
    formdata.append("ministry",offerdata.ministry);
    formdata.append("project_owner_id",ownerdata.owner_id);
    console.log(formdata)
    // console.log(offerdata)
    axios.post("http://127.0.0.1:8000/create_project/",formdata)
    .then((res)=>{
      setloading(true);
      console.log(res)
      if(res.data.status==="success"){
        navigate("/")
      }
      else if(res.data.status==="error"){
        toast.error(res.data.message,{
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
    <div className='signup login addoffer addbuild'>
    <div >
    <h4
      style={{
        fontSize:'20px',
        color:'#57707a',
        marginTop:'10px'
      }}
    >Add building</h4>
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
          onChange={(e)=>{
            setofferdata({...offerdata,project_image:e.target.files[0]})
          }}
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
                  project_name:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div>
          <h4>building government</h4>
          <select
            value={offerdata.project_government}
            onChange={(e)=>{
              setofferdata({
                ...offerdata,
                project_government:e.target.value
              })
            }}
            style={{
            width:'100%',
            height:'40px',
            borderRadius:'10px'
          }}>
            {
              governments.map((item)=>{
                return(
                  <option value={item.value}>{item.label}</option>
                )
              })
            }
          </select>
          {/* <Select
            //showSearch
            style={{
              width: '100%',
            }}
            optionFilterProp="children"
            //filterOption={(input, option) => (option?.label ?? '').includes(input)}
            // filterSort={(optionA, optionB) =>
            //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            // }
            placeholder="إختر المحافظة"
            value={offerdata.project_government}
            onChange={(e)=>{
              setofferdata({
                ...offerdata,
                project_government:e.target.value
              })
            }}
            options={ministries}
          /> */}
      {/*     <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  project_government:e.target.value
                })
              }}
            />
          </div> */}
        </div>
        <div>
          <h4>building ministry</h4>
          <select
            value={offerdata.project_government}
            onChange={(e)=>{
              setofferdata({
                ...offerdata,
                ministry:e.target.value
              })
            }}
            style={{
            width:'100%',
            height:'40px',
            borderRadius:'10px'
          }}>
            {
              ministries.map((item)=>{
                return(
                  <option value={item.value}>{item.label}</option>
                )
              })
            }
          </select>
          {/* <Select
            //showSearch
            style={{
              width: '100%',
            }}
            optionFilterProp="children"
            //filterOption={(input, option) => (option?.label ?? '').includes(input)}
            // filterSort={(optionA, optionB) =>
            //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            // }
            placeholder="إختر المحافظة"
            value={offerdata.project_government}
            onChange={(e)=>{
              setofferdata({
                ...offerdata,
                project_government:e.target.value
              })
            }}
            options={ministries}
          /> */}
      {/*     <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  project_government:e.target.value
                })
              }}
            />
          </div> */}
        </div>
        <div>
          <h4>building address</h4>
          <div className="per_img loginemail">
            <input type="text"
              onChange={(e)=>{
                setofferdata({
                  ...offerdata,
                  project_address:e.target.value
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
            onChange={(e)=>{
              setofferdata({...offerdata,project_details:e.target.value})
            }}
              style={{
                width:'100%',
                height:'100px',
                borderRadius:'10px',
                resize:'none'
              }}
            ></textarea>
          </div>
        </div>
        {
          loading?(<Spin
            style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              marginTop:'60px'
            }}
          />):(
            <button
            style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              marginTop:'20px'
            }}
          >
          add building
          </button>
          )
        }
    </form>
    </div>
    <div className="overlay">

    </div>
  </div>
  )
}

export default Addbuilding
