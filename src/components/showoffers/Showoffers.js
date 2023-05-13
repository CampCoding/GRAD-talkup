import React, { useState } from 'react'
import './showoffers.css'
const Showoffers = () => {
  const [offers,setoffers]=useState([
    {
      offer_id:0,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man4.png"),
      offer_time:'2 week',
      req_money:'4000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
    {
      offer_id:1,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man2.png"),
      offer_time:'2 week',
      req_money:'1000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
    {
      offer_id:2,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man3.png"),
      offer_time:'2 week',
      req_money:'4000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
    {
      offer_id:3,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man4.png"),
      offer_time:'2 week',
      req_money:'8000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
    {
      offer_id:4,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man2.png"),
      offer_time:'2 week',
      req_money:'9000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
    {
      offer_id:5,
      offer_person:'pppp',
      offer_text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus architecto officia quos ab consequuntur sunt illo molestias recusandae, excepturi quod, eius voluptatum et beatae. Neque suscipit molestiae labore voluptates',
      offer_img:require("../../assets/images/man4.png"),
      offer_time:'2 week',
      req_money:'3000L.E',
      company_name:'company name',
      notice:'my notice is that this my notice',
    },
  ])
  return (
    <div className='alloffers'>
      <div className="offers">
        {
          offers.map((item,index)=>{
            return (
              <div className="offer">
                <div className="offer_company">
                <img src={item.offer_img} alt="" />
                  <h3>{item.company_name}</h3>
                </div>
                <span>{item.offer_text}</span>
                <h5>notice:{item.notice}</h5>
                <h6>price: {item.req_money}</h6>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Showoffers
