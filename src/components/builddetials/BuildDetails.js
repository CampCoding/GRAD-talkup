import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router'
import './builddetails.css'
const BuildDetails = () => {
  const location=useLocation();
  const {item}=location.state;
  //console.log(item)
  const navigate=useNavigate();
  return (
    <div className='builddetails_div'>
      <div className="buildingdetails">
        <img src={item.image} alt="" />
        <div className="buildingdetails_text">
          <h3>{item.company_name}</h3>
          <span>{item.builddetails}</span>
          <h2 style={{
            color:'#555'
          }}>location:{item.location}</h2>
          <div>
            <p>
            {
            [1,2,3,4,5].map((item,index)=>{
              return (
                <AiFillStar style={{
                  color:item<=item.rate?'yellow':'#b1a296'
                }}/>
              )
            })
          }
            </p>
            <button
              onClick={()=>{
                navigate("/addoffer",{state:{item:item}})
              }}
            >add order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildDetails
