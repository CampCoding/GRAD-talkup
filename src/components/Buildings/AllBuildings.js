import { Space, Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AllBuildings = () => {
  const navigate=useNavigate();
  const [buildings,setbuildings]=useState([]);
  const handedelete=(id)=>{
    console.log(id)
    console.log(id)
    axios.get("http://127.0.0.1:8000/DeleteProject?project_id="+id)
    //console.log("http://127.0.0.1:8000/DeleteProject?project_id="+id)
    .then((res)=>{
      //console.log(res.data);
      toast.success(res.data,{
        position:'bottom-right'
      });
      getbuildings();
    })
  }
  const columns = [
    {
      title: 'image',
      key: 'project_name',
      render:(_,record)=>(
        <img
        onClick={()=>{
          navigate("/builddetails",{state:{item:record}})
        }}
          style={{
          width:'30px',
          height:'30px',
          borderRadius:'50%'
        }} src={record.project_image_url} alt="" />
      )
    },
    {
      title: 'Name',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'details',
      dataIndex: 'project_details',
      key: 'project_details',
    },
    {
      title: 'government',
      dataIndex: 'project_government',
      key: 'project_government',
    },
    {
      title: 'Address',
      dataIndex: 'project_address',
      key: 'project_address',
    },
    {
      title:'action',
      key:'action',
      render:(_,record)=>(
        <Space>
          <img onClick={()=>{
              //console.log(record.contractor_id);
              handedelete(record.project_id)
            }}
          style={{width:'30px',cursor:'pointer'}} src={require("../../assets/images/trash.png")}/>
        </Space>
      )
    }
  ];
  const getbuildings=()=>{
    axios.get("http://127.0.0.1:8000/GetAllprojects/")
    .then((res)=>{
      console.log(res.data);
      setbuildings(res.data)
    })
  }
  useEffect(()=>{
    getbuildings();
  },[])
  return (
    <div>
      <Table dataSource={buildings} columns={columns} />;
    </div>
  )
}

export default AllBuildings
