import React, { useState } from 'react'
import './building.css'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router'
const Building = ({building,fun}) => {
  const navigate=useNavigate();
  const {id,image,company_name,rate,location,loverstatus,handleaddtolove}=building;
  const [addtolove,setaddtolove]=useState(false);
  return (
      <div className='building'
        onClick={()=>{
          navigate("/builddetails",{state:{item:building}})
        }}
        style={{
          cursor:'pointer'
        }}
      >
        <div className="building_text">
          <h3>{company_name}</h3>
          <div style={{
            marginBottom:'10px'
          }}>
            {
              [1,2,3,4,5].map((item,index)=>{
                return (
                  <AiFillStar style={{
                    color:item<=rate?'yellow':'#b1a296'
                  }}/>
                )
              })
            }
          </div>
          <h3 className='location'>
            <span>{location}</span>
            <span><HiLocationMarker/></span>
          </h3>
        </div>
        <div className="building_image">
          <img src={image} alt="" />
          <div className='love'
            onClick={fun(id)}
          >
            {
              loverstatus?(
                <AiFillHeart

                />
                ):(
                <AiOutlineHeart
                />
              )
            }
          </div>
        </div>
      </div>
  )
}

export default Building
