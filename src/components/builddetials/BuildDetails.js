import React, { useContext, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router'
import './builddetails.css'
import axios from 'axios';
import { Card } from 'antd';
import { AppContext } from '../context/AppContextProvider';
const BuildDetails = () => {
  const {ownserdata,ownerdata}=useContext(AppContext)
  const [bids,setbuids]=useState([]);
  const location=useLocation();
  const {item}=location.state;
  console.log(item)
  console.log(item.rate)
  console.log(item.project_id)
  const navigate=useNavigate();
  const getprojectbids=()=>{
    const data_send={
      project_id:item.project_id
    }
    console.log(data_send);
    axios.get("http://127.0.0.1:8000/GetAllproject_bids?project_id="+item.project_id)
    .then((res)=>{
      console.log(res.data);
      setbuids(res.data);
    })
  }
  useEffect(()=>{
    getprojectbids();
  },[])
  return (
    <div className='builddetails_div'>
      <div className="buildingdetails">
        <img src={item.project_image_url} alt="" />
        <div className="buildingdetails_text">
          <h3>{item.project_name}</h3>
          <span>{item.project_details}</span>
          <h2 style={{
            color:'#555',
            textAlign:'center'
          }}>location:{item.project_address}</h2>
          <div>

            <button
              onClick={()=>{
                navigate("/addoffer",{state:{item:item.project_id}})
              }}
            >bid submission</button>
          </div>
        </div>
      </div>
      <div className="bids"
        style={{
          display:'flex',
          alignItems:'center',width:'100%',
          gap:'10px',
          justifyContent:'space-between',flexDirection:'column',
          flexWrap:'wrap'
        }}
      >
      {
        bids.length>0?(
          <div style={{display:'flex',flexDirection:'column'}}>
            <h3>all bids</h3>

            <div style={

              {
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                flexWrap:'wrap',
                width:'100%',gap:'10px'
             }
            }>
            {  bids.map((item,index)=>{
              return(
                <Card style={{ width: 300 }}>
                  <h4>money:{item.bid_money_range}</h4>
                  <p>notice:{item.notices}</p>
                  <p>details:{item.bid_details}</p>
                  <a href={`${item.bid_pdf_file}`} target='_blank'>file</a>
                </Card>
              )
            })
          }
            </div>
          </div>
        ):(
          <h4>there are not any bids</h4>
        )
      }
      </div>
    </div>
  )
}

export default BuildDetails
