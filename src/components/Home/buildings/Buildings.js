import React, { useEffect, useState } from 'react'
import './buildings.css';
import Building from './building/Building';
import axios from 'axios';
import { json } from 'react-router';
const Buildings = () => {
  const [img,setimg]=useState("");

  const [buildings,setbuildings]=useState([
    {
      id:0,
      image:require("../../../assets/images/bui1.webp"),
      company_name:'EMAAR',
      rate:2,
      location:'New Cairo',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right Do not pay or transfer money unless you see the product well'
    },
    {
      id:1,
      image:require("../../../assets/images/bui2.webp"),
      company_name:'Egypt Holding',
      rate:3,
      location:'Sheikh Zayed',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer      Check the product well before you buy and make sure that the price is right  Do not pay or transfer money unless you see the product well'

    },
    {
      id:2,
      image:require("../../../assets/images/bui3.webp"),
      company_name:'BYOTAT',
      rate:5,
      location:'Zamalek',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right Do not pay or transfer money unless you see the product well'
    },
    {
      id:3,
      image:require("../../../assets/images/bui4.webp"),
      company_name:'U for U',
      rate:3,
      location:'Maadi',
      loverstatus:false,
      builddetails:'Your safety matters to us Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right  Do not pay or transfer money unless you see the product well'
    },
    {
      id:4,
      image:require("../../../assets/images/bui5.webp"),
      company_name:'Hassan Allam Properties',
      rate:4,
      location:'Garden City',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right not pay or transfer money unless you see the product well'
    },
    {
      id:5,
      image:require("../../../assets/images/bui6.webp"),
      company_name:'DMG',
      rate:1,
      location:'Kattameya Heights',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right Do not pay or transfer money unless you see the product well'
    },
    {
      id:6,
      image:require("../../../assets/images/bui7.webp"),
      company_name:'Uni Tech',
      rate:4,
      location:'Mouhandisine',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right Do not pay or transfer money unless you see the product well'
    },
    {
      id:7,
      image:require("../../../assets/images/bu2.png"),
      company_name:'CBRE',
      rate:3,
      location:'Agouza',
      loverstatus:false,
      builddetails:'Meet the seller in a public place such as the metro, malls or petrol stations Take someone with you while you are going to meet the seller or the buyer Check the product well before you buy and make sure that the price is right Do not pay or transfer money unless you see the product well'
    },
  ])
  const [allbuildings,setallbuilding]=useState([]);
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
    //console.log("jdkjd")
    buildings.map((item,index)=>{
      if(item.id==id){
        return {...item,loverstatus:!item.loverstatus}
      }
      else return {...item}
    })
  }
  const getbuildings=()=>{
    axios.get("http://127.0.0.1:8000/GetAllprojects")
    .then((res)=>{
      //console.log(res.data);
      setallbuilding(res.data);
    })
  }
  useEffect(()=>{
    getbuildings();
  },[])
  return (
    <div>
      <div className="buildings">
        {
          allbuildings.map((item,index)=>{
            return (<Building building={item}

/*                lovefunc={id=>{
            console.log(id);
              const newdata=buildings.map((it,ind)=>{
                if(it.id==id){
                  return {...it,loverstatus:!it.loverstatus}
                }
                else return {...it};
              })
              setbuildings(newdata);
            }} */

          />)
          })
        }
      </div>

    </div>
  )
}

export default Buildings

/*
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

<input type="file" onChange={(e)=>{
        setimg(e.target.files[0]);
      }}/>
      <button onClick={()=>{
        updata();
      }}>up</button> */
