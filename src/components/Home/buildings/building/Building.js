import React, { useEffect, useState } from 'react'
import './building.css'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router'
import axios from 'axios'
const Building = ({building,/* lovefunc */lovefunc}) => {
  //console.log(building)
  const navigate=useNavigate();
  const {project_id,project_image_url,project_details,project_name,add_date,project_address,loverstatus,handleaddtolove}=building;
  const [addtolove,setaddtolove]=useState(false);

  return (
      <div className='building'

        style={{
          cursor:'pointer'
        }}
      >
        <div className="building_text">
          <h3 style={{textTransform:'capitalize'}}>{project_name}</h3>
          <div style={{
            marginBottom:'10px'
          }}>
            {/* {
              [1,2,3,4,5].map((item,index)=>{
                return (
                  <AiFillStar style={{
                    color:item<=rate?'yellow':'#b1a296'
                  }}/>
                )
              })
            } */}
          </div>
          <h3 className='location'>
            <span>{project_address}</span>
            <span><HiLocationMarker/></span>
          </h3>
          <div className="view_det">
            {/* <h4 style={{fontSize:'15px'}}>date:{add_date}</h4> */}
            <button
              style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}
              onClick={()=>{
                navigate("/builddetails",{state:{item:building}})
              }}
            >view</button>
          </div>
        </div>

        <div className="building_image">
          <img src={project_image_url} alt="" />
          <div className='love'
            /* onClick={lovefunc(id)} */
          >
          {/*   {
              loverstatus?(
                <AiFillHeart

                />
                ):(
                <AiOutlineHeart
                />
              )
            } */}

          </div>
        </div>
      </div>
  )
}

export default Building
