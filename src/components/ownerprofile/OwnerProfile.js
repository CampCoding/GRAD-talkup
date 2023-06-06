import React, { useContext, useEffect, useState } from 'react'
import './ownerprofile.css';
import { useLocation } from 'react-router';
import axios from 'axios';
import Building from '../Home/buildings/building/Building';
import { AppContext } from '../context/AppContextProvider';
const OwnerProfile = () => {
  const location=useLocation();
  const {id}=location.state;
  //console.log(id)
  const {ownerdata}=useContext(AppContext);
  //console.log(ownerdata)
  //console.log(ownerdata.owner_id);
  const [data,setdata]=useState([]);
  const owner_id=JSON.parse(localStorage.getItem("owner"))?.owner_id;
  //console.log(owner_id)
  const getprofilebui=()=>{
    const data_send={
      building_owner_id:ownerdata.owner_id // undfind ?
    }
    //console.log("zzz",ownerdata.owner_id);
    axios.get("http://127.0.0.1:8000/GetmyProjects/?building_owner_id="+owner_id)
    .then((res)=>{
      if(Array.isArray(res.data)){
        setdata(res.data);
      }

    //  console.log("xxxx",res);
    })
  }
  useEffect(()=>{
    getprofilebui();
  },[])
  return (
    <div>
      <div className='buildings'>
      {
        data.length>0?(
          data.map((item,index)=>{
            return(<Building  building={item}/>)
          })
        ):(
          <img style={{
            maxWidth:'100%'
          }} src={require("../../assets/images/nodata.png")} alt="" />
        )
      }
      </div>

    </div>
  )
}

export default OwnerProfile
