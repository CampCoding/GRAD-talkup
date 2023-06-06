import { Button, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AllOwner = () => {
  const [owners,setowners]=useState([]);

  const handedelete=(id)=>{
    console.log(id)
    axios.get("http://127.0.0.1:8000/DeleteBuilding_owner?building_owner_id="+id)
    .then((res)=>{
      console.log(res.data);
      toast.success(res.data,{
        position:'bottom-right'
      });
      getowners();
    })
  }
  const columns = [
    {
      title: 'image',
      key: 'image',
      render:(_,record)=>(
        <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={record.identify_image_url} alt="" />
      )
    },
    {
      title: 'name',
      dataIndex: 'owner_name',
      key: 'owner_name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'identify number',
      dataIndex: 'identify_number',
      key: 'identify_number',
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'phone',
      dataIndex: 'owner_phone',
      key: 'owner_phone',
    },
    {
      title:'action',
      key:'action',
      render:(_,record)=>(
        <Space>
          <img
          onClick={()=>{
            console.log(record);
            handedelete(record.owner_id)
          }}
        style={{width:'30px',cursor:'pointer'}}
        src={require("../../assets/images/trash.png")}/>
        </Space>
      )
    }
  ];
  const getowners=()=>{
    axios.get("http://127.0.0.1:8000/GetAllbuilding_owner")
    .then((res)=>{
      setowners(res.data);
    })
  }
  useEffect(()=>{
    getowners();
  },[])
  return (
    <div>
      <Table dataSource={owners} columns={columns} />
    </div>
  )
}

export default AllOwner
