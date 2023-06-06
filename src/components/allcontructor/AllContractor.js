import { Button, Space, Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AllContractor = () => {
  const [contructors,setallcontructor]=useState([]);

  const handedelete=(id)=>{
    console.log(id)
    axios.get("http://127.0.0.1:8000/DeleteContractor?contractor_id="+id)
    .then((res)=>{
      //console.log(res.data);
      toast.success(res.data,{
        position:'bottom-right'
      });
      getcontructors();
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
      dataIndex: 'contractor_name',
      key: 'contractor_name',
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
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title:'action',
      key:'action',
      render:(_,record)=>(
        <Space>
          <img
            onClick={()=>{
              //console.log(record.contractor_id);
              handedelete(record.contractor_id)
            }}
          style={{width:'30px',cursor:'pointer'}} src={require("../../assets/images/trash.png")}/>
        </Space>
      )
    }
  ];
  const getcontructors=()=>{
    axios.get("http://127.0.0.1:8000/GetAllcontractors/")
    .then((res)=>{
      console.log(res.data);
      setallcontructor(res.data);
    })
  }
  useEffect(()=>{
    getcontructors();
  },[])
  return (
    <div>
      <Table dataSource={contructors} columns={columns} />;
    </div>
  )
}

export default AllContractor
