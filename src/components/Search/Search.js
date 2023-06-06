import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Building from '../Home/buildings/building/Building';
import lodash from 'lodash/lodash';
const Search = () => {
  const navigate=useNavigate();
  const [buildings,setbuildings]=useState([]);
  const [originalbuildings, setOriginalbuildings] = useState([]);
  const [searchTxt1, setSearchTxt1] = useState('');
  const [searchTxt2, setSearchTxt2] = useState('');

  const getbuildings=()=>{
    axios.get("http://127.0.0.1:8000/GetAllprojects/")
    .then((res)=>{
      console.log(res.data);
      setbuildings(res.data)
      setOriginalbuildings(res.data);
    })
  }
  useEffect(()=>{
    getbuildings();
  },[])
  function searchType(e) {
    console.log(e);
    setSearchTxt1(e);
    if(e=="all"){
      if(searchTxt2==''){
        getbuildings();
      }
      else{
        searchType2(searchTxt2);
      }
    }
    else{
      const formattedQuery = e.toLowerCase();
      const filteredData = lodash.filter(originalbuildings, item => {
        return contains(item, formattedQuery);
      });
      setbuildings(filteredData);
    }
  }

  const contains = (items, query) => {
    const {
      project_government,
    } = items;
    if (
      project_government?.toLowerCase().includes(query)
    ) {
      return true;
    }

    return false;
  };


  function searchType2(e) {
    console.log(e);
    setSearchTxt2(e);
    if(e=="all"){
      if(searchTxt2==''){
        getbuildings();
      }
      else{
        searchType(searchTxt1);
      }
    }
    else{
      const formattedQuery = e.toLowerCase();
      const filteredData = lodash.filter(originalbuildings, item => {
        return contains2(item, formattedQuery);
      });
      setbuildings(filteredData);
    }
  }

  const contains2 = (items, query) => {
    const {
      project_ministry,
    } = items;
    if (
      project_ministry?.toLowerCase().includes(query)
    ) {
      return true;
    }

    return false;
  };

  const ministries=[
    {
      value: ' all',
      label: ' all',
    },
    {
      value: 'Ministry of Agriculture and Land Reclamation',
      label: 'Ministry of Agriculture and Land Reclamation',
    },
    {
      value: 'Ministry of Antiquities',
      label: 'Ministry of Antiquities',
    },
    {
      value: 'Ministry of Civil Aviation',
      label: 'Ministry of Civil Aviation',
    },
    {
      value: 'Ministry of Communications and Information Technology',
      label: 'Ministry of Communications and Information Technology',
    },
    {
      value: 'Ministry of Defense and Military Production',
      label: 'Ministry of Defense and Military Production',
    },
    {
      value: 'Ministry of Education and Technical Education',
      label: 'Ministry of Education and Technical Education',
    },
    {
      value: 'Ministry of Electricity and Renewable Energy',
      label: 'Ministry of Electricity and Renewable Energy',
    },
    {
      value: 'Ministry of Environment',
      label: 'Ministry of Environment',
    },
    {
      value: 'Ministry of Finance',
      label: 'Ministry of Finance',
    },
    {
      value: 'Ministry of Foreign Affairs',
      label: 'Ministry of Foreign Affairs',
    },
    {
      value: 'Ministry of Health and Population',
      label: 'Ministry of Health and Population',
    },
    {
      value: 'Ministry of Higher Education and Scientific Research',
      label: 'Ministry of Higher Education and Scientific Research',
    },
    {
      value: 'Ministry of Housing, Utilities, and Urban Communities',
      label: 'Ministry of Housing, Utilities, and Urban Communities',
    },
    {
      value: 'Ministry of Immigration and Egyptian Expatriates Affairs',
      label: 'Ministry of Immigration and Egyptian Expatriates Affairs',
    },
    {
      value: 'Ministry of Industry and Trade',
      label: 'Ministry of Industry and Trade',
    },
    {
      value: 'Ministry of Interior',
      label: 'Ministry of Interior',
    },
    {
      value: 'Ministry of Investment and International Cooperation',
      label: 'Ministry of Investment and International Cooperation',
    },
    {
      value: 'Ministry of Local Development',
      label: 'Ministry of Local Development',
    },
    {
      value: 'Ministry of Manpower',
      label: 'Ministry of Manpower',
    },
    {
      value: 'Ministry of Military Justice',
      label: 'Ministry of Military Justice',
    },
    {
      value: 'Ministry of Planning and Economic Development',
      label: 'Ministry of Planning and Economic Development',
    },
    {
      value: 'Ministry of Petroleum and Mineral Resources',
      label: 'Ministry of Petroleum and Mineral Resources',
    },
    {
      value: 'Ministry of Public Business Sector',
      label: 'Ministry of Public Business Sector',
    },
    {
      value: 'Ministry of Religious Endowments (Awqaf)',
      label: 'Ministry of Religious Endowments (Awqaf)',
    },
    {
      value: 'Ministry of Social Solidarity',
      label: 'Ministry of Social Solidarity',
    },
    {
      value: 'Ministry of Sports and Youth',
      label: 'Ministry of Sports and Youth',
    },
    {
      value: 'Ministry of Tourism and Antiquities',
      label: 'Ministry of Tourism and Antiquities',
    },
    {
      value: 'Ministry of Transport',
      label: 'Ministry of Transport',
    },
    {
      value: 'Ministry of Water Resources and Irrigation',
      label: 'Ministry of Water Resources and Irrigation',
    },
  ]
  const governorates = [
    {
      value: ' all',
      label: ' all',
    },
    {
      value: ' Alexandria',
      label: ' Alexandria',
    },
    {
      value: 'Sharqia',
      label: 'Sharqia',
    },
    {
      value: 'Asyut',
      label: 'Asyut',
    },
    {
      value: 'Beheira',
      label: 'Beheira',
    },
    {
      value: 'cairo',
      label: 'cairo',
    },
    {
      value: 'Damietta',
      label: 'Damietta',
    },
    {
      value: 'Kafr el-Sheikh',
      label: 'Kafr el-Sheikh',
    },
    {
      value: 'Luxor',
      label: 'Luxor',
    },
    {
      value: 'elmonofia',
      label: 'elmonofia',
    },
    {
      value: 'al-Minya',
      label: 'al-Minya',
    },
    {
      value: 'Port Said',
      label: 'Port Said',
    },
    {
      value: 'elqaliobia',
      label: 'elqaliobia',
    },
    {
      value: 'Ismailia',
      label: 'Ismailia',
    },
    {
      value: 'Aswan',
      label: 'Aswan',
    },
    {
      value: 'Beni Suef',
      label: 'Beni Suef',
    },
    {
      value: 'Dakahlia',
      label: 'Dakahlia',
    },
    {
      value: 'Faiyum',
      label: 'Faiyum',
    },
    {
      value: 'Gharbia',
      label: 'Gharbia',
    },
    {
      value: 'giza',
      label: 'giza',
    },
    {
      value: 'Red Sea',
      label: 'Red Sea',
    },
    {
      value: 'South Sinai',
      label: 'South Sinai',
    },
    {
      value: 'North Sinai',
      label: 'North Sinai',
    },
    {
      value: 'Suez',
      label: 'Suez',
    },
    {
      value: 'Sohag',
      label: 'Sohag',
    },
    {
      value: 'New Valley',
      label: 'New Valley',
    },
    {
      value: 'Matruh',
      label: 'Matruh',
    },
  ];
  return (
    <div style={{
      textAlign:'center'
    }}>
      <select
            //value={offerdata.project_government}
            onChange={(e)=>{
              searchType(e.target.value)
              setSearchTxt1(e.target.value);
            }}
            style={{
            width:'80%',
            height:'40px',
            borderRadius:'10px',
            margin:'20px auto'
          }}>
            {
              governorates.map((item)=>{
                return(
                  <option value={item.value}>{item.label}</option>
                )
              })
            }
      </select>
      <select
            //value={offerdata.project_government}
            onChange={(e)=>{
              searchType2(e.target.value)
              setSearchTxt2(e.target.value)
            }}
            style={{
            width:'80%',
            height:'40px',
            borderRadius:'10px',
            margin:'20px auto'
          }}>
            {
              ministries.map((item)=>{
                return(
                  <option value={item.value}>{item.label}</option>
                )
              })
            }
      </select>
      <div className="buildings">
        {
          buildings.map((item,index)=>{
            return(
              <Building building={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Search
