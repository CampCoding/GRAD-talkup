import React, { useState } from 'react'
import MyBuilding from './MyBuildings'


const MyProjects = () => {
  const [buildings,setbuildings]=useState([
    {
      id:0,
      image:require("../../assets/images/bu1.png"),
      company_name:'company name',
      rate:2,
      location:'cairo',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:1,
      image:require("../../assets/images/bu2.png"),
      company_name:'company name',
      rate:3,
      location:'giza',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'

    },
    {
      id:2,
      image:require("../../assets/images/bu3.png"),
      company_name:'company name',
      rate:5,
      location:'luxor',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:3,
      image:require("../../assets/images/unsplash_5fNmWej4tAA.png"),
      company_name:'company name',
      rate:3,
      location:'gharbia',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:4,
      image:require("../../assets/images/unsplash_ESZRBtkQ_f8.png"),
      company_name:'company name',
      rate:4,
      location:'aswan',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:5,
      image:require("../../assets/images/bu3.png"),
      company_name:'company name',
      rate:1,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:6,
      image:require("../../assets/images/bu1.png"),
      company_name:'company name',
      rate:4,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
    {
      id:7,
      image:require("../../assets/images/bu2.png"),
      company_name:'company name',
      rate:3,
      location:'alex',
      loverstatus:false,
      builddetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis possimus blanditiis culpa deleniti aut. Blanditiis provident neque incidunt eveniet, consectetur dolorem error rem, cum facere et quibusdam iusto explicabo'
    },
  ])
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
            return (<MyBuilding building={item} fun={handleaddtolove}/>)
          })
        }
      </div>
    </div>
  )
}

export default MyProjects
