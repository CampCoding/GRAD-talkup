import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AppContext } from '../context/AppContextProvider';
import { Button } from 'antd';
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const Header = () => {
  const navigate=useNavigate();
  const {ownserdata,user,logout,ownerlogout,ownerdata}=useContext(AppContext);
  console.log(user)
  console.log(ownserdata)
  console.log(ownerdata)
  const navRef = useRef();
/*   let owner=JSON.parse(localStorage.getItem("owner"));
  console.log(owner); */
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  const items = [
    {
      key: '1',
      label: (
        <Link to={"/signup"}>constructor signup</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={"/englogin"}>constructor login</Link>
      ),

      //disabled: true,
    },
    {
      key: '3',
      label: (
        <Link to={"/owsign"}>owner signup</Link>
      ),
      //disabled: true,
    },
    {
      key: '4',
      label: (
        <Link to={"/owlogin"}>owner login</Link>
      ),
      //disabled: true,
    },

  ];
  return (
    <header>
			<div

        onClick={()=>{
          navigate("/")
        }}
      className="logo" style={{
        fontSize:'20px',
        cursor:'pointer'
      }}>
        <img style={{
          width:'200px'
        }} src={require("../../assets/images/egylogo.png")} alt="" />
      </div>
			<nav ref={navRef}>

      <div className="links">
        <Link to="/">main</Link>
        {
          Object.keys(ownerdata).length>0?(<Link to="/addbuilding"> add project</Link>):(null)
        }

{/*
        <Link to="/addbuilding"> Bid submission</Link> */}
        <Link to="/about">who we are</Link>
        <Link to={"/findtender"}>find tenders</Link>
        {
          Object.keys(ownerdata).length>0?(
        <p
            className='proftag'
            onClick={()=>{
              navigate("/owprofile",{state:{id:ownerdata.owner_id}})
            }}
        style={{
          color:'white',
          fontSize:'16px',
          margin:'0px',
          cursor:'pointer'
        }}

        >Profile</p>
          ):(
            null
          )
        }
      </div>
      {
        Object.keys(user).length>0||Object.keys(ownerdata).length>0?(
          <button
            style={{borderRadius:'10px',marginLeft:'10px',textTransform:'capitalize'}}
            onClick={()=>{logout();
              ownerlogout()
              localStorage.removeItem("owner")
              localStorage.removeItem("contractor")
            }}
          >logout</button>
        ):(
          <Dropdown
                className="header_drop"
              style={{
                marginTop:'30px'
              }}
                menu={{
                  items,
                }}
              >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        sign
        <DownOutlined />
      </Space>
    </a>
          </Dropdown>
        /*   <div className="logsign">
        <Link to={"/englogin"}>contructor login</Link>
        <Link to={"/signup"}>contructor sign up</Link>
        <Link to={"/owsign"}>Tendering sign </Link>
        <Link to={"/owlogin"}>tendering login</Link>

      </div> */
        )
      }
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

			</nav>

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
/*     <header>
      <div className="logo" style={{
        color:'white',
        fontSize:'20px'
      }}>
        Egyptian Tendering
      </div>
      <div className="links">
        <Link to="/">main</Link>
        <Link to="/addbuilding"> add project</Link>
        <Link to="/">search for contractors</Link>
        <Link to="/about">who are we</Link>
      </div>
      <div className="logsign">
        <Link to={"/englogin"}>login</Link>
        <Link to={"/signup"}>sign up</Link>
      </div>
    </header> */
  )
}

export default Header
