import React from 'react'
import './about.css'
import { useNavigate } from 'react-router'
const About = () => {
  const navigate=useNavigate();
  const developers=[
    {
      id:0,
      image:require("../../assets/images/man.png"),
      name:'Muhammad',
    },
    {
      id:0,
      image:require("../../assets/images/man2.png"),
      name:'Marco',
    },
    {
      id:0,
      image:require("../../assets/images/man3.png"),
      name:'Mohamed',
    },
    {
      id:0,
      image:require("../../assets/images/man4.png"),
      name:'Yara',
    },
  ]
  return (
    <div className="about_div">
      <div className='about'>
      <h4>who we are</h4>
        <p>
        Our tendering information system
        website is designed to provide a
        comprehensive platform for project
        owners and developers to connect and
        collaborate on various projects. Our
        main idea is to simplify the tendering
        process and make it more transparent,
        efficient, and accessible to everyone.
        By utilizing our website, project owners
        can easily post their projects, and developers
        can quickly browse and bid on them. We also provide
        a secure communication channel for project owners and
        developers to discuss project details, negotiate terms,
        and finalize contracts. To sustain and improve our services,
        we take a 10% commission on each successful project, with 5%
        coming from the project owner and 5% from the developer. We
        believe that this commission is a fair and reasonable fee for
        the value we provide to both parties, and we are committed to
        continuously enhancing our platform to better serve our users.
      </p>
      <div className="developers">
        {
          developers.map((item,index)=>{
            return(
              <div className="developer">
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
              </div>
            )
          })
        }
      </div>
      <div className="contact_button">
        <span
          onClick={()=>{
            navigate("/contact")
          }}
        >contact</span>
      </div>
      </div>
    </div>
  )
}

export default About
