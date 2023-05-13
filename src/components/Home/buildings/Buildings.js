import React, { useEffect, useState } from 'react'
import './buildings.css';
import Building from './building/Building';
import axios from 'axios';
import { json } from 'react-router';
const Buildings = () => {
  const [img,setimg]=useState("");
  const updata=()=>{
    const data_send={
      user_name:'abdu',
      user_email:'pp@gmail.com',
      user_password:'ppp',
    }
    console.log(data_send)
    axios.post("https://medcine1231.000webhostapp.com/user/user_sign_up.php",JSON.stringify(data_send))
    .then((res)=>{
      console.log(res.data);
    })
  }
  useEffect(()=>{
    updata();
  },[])
  const [buildings,setbuildings]=useState([
    {
      id:0,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:2,
      location:'cairo',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:1,
      image:require("../../../assets/images/bu2.png"),
      company_name:'company name',
      rate:3,
      location:'giza',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'

    },
    {
      id:2,
      image:require("../../../assets/images/bu3.png"),
      company_name:'company name',
      rate:5,
      location:'luxor',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:3,
      image:require("../../../assets/images/unsplash_5fNmWej4tAA.png"),
      company_name:'company name',
      rate:3,
      location:'gharbia',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:4,
      image:require("../../../assets/images/unsplash_ESZRBtkQ_f8.png"),
      company_name:'company name',
      rate:4,
      location:'aswan',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:5,
      image:require("../../../assets/images/bu3.png"),
      company_name:'company name',
      rate:1,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:6,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:4,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:7,
      image:require("../../../assets/images/bu2.png"),
      company_name:'company name',
      rate:3,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
  ])
/*   const buildings=[
    {
      id:0,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:2,
      location:'cairo',
      loverstatus:false,
    },
    {
      id:1,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:3,
      location:'giza',
      loverstatus:false,
    },
    {
      id:2,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:5,
      location:'luxor',
      loverstatus:false,
    },
    {
      id:3,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:3,
      location:'gharbia',
      loverstatus:false,
    },
    {
      id:4,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:4,
      location:'aswan',
      loverstatus:false,
    },
    {
      id:5,
      image:require("../../../assets/images/bu1.png"),
      company_name:'company name',
      rate:1,
      location:'alex',
      loverstatus:false,
    },
  ] */
  const handleaddtolove=(id)=>{
    console.log("jdkjd")
    buildings.map((item,index)=>{
      if(item.id==id){
        return {...item,loverstatus:!item.loverstatus}
      }
      else return {...item}
    })
  }
  return (
    <div>
      <div className="buildings">
        {
          buildings.map((item,index)=>{
            return (<Building building={item} fun={handleaddtolove}/>)
          })
        }
      </div>
{/*       <input type="file" onChange={(e)=>{
        setimg(e.target.files[0]);
      }}/>
      <button onClick={()=>{
        updata();
      }}>up</button> */}
    </div>
  )
}

export default Buildings
