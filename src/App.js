import { Navigate, Route, Router, Routes } from 'react-router';
import './App.css';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import OwnerAccount from './components/owneraccount/OwnerAccount';
import Login from './components/login/englogin/EngLogin';
import OwnerLogin from './components/login/ownerlogin/OwnerLogin';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import BuildDetails from './components/builddetials/BuildDetails';
import AddOffer from './components/addoffer/AddOffer';
import Addbuilding from './components/addbuild/Addbuilding';
import MyProjects from './components/MyProjects/MyProjects';
import Showoffers from './components/showoffers/Showoffers';
import BidSubmition from './components/BidSubmition/BidSubmition';
import OwnerProfile from './components/ownerprofile/OwnerProfile';
import ADLogin from './components/Adlogin/ADLogin';
import AllBuildings from './components/Buildings/AllBuildings';
import AllContractor from './components/allcontructor/AllContractor';
import AllOwner from './components/allowner/AllOwner';
import React, { useContext } from 'react';
import { AppContext } from './components/context/AppContextProvider';
import Search from './components/Search/Search';

function App() {
  const {user,ownserdata,ownerdata}=useContext(AppContext);

  return (
    <div className="app">
      <Header/>
      <Routes>
      <Route path='/' index element={<Home/>}/>
      <React.Fragment>

<Route path="bsub" element={<BidSubmition/>}/>

 <Route path='/builddetails' element={<BuildDetails/>}/>
<Route path='/addoffer' element={<AddOffer/>}/>
    </React.Fragment>
    <React.Fragment>
          <Route path='*' element={<Navigate to="/"/>}/>
          <Route path='/signup' element={<Signup/>}/>
        <Route path='/englogin' element={<Login/>}/>


        </React.Fragment>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

        <React.Fragment>
                       <Route path='/owsign' element={<OwnerAccount/>}/>
        <Route path='/owlogin' element={<OwnerLogin/>}/>

              </React.Fragment>
              <React.Fragment>
                        <Route path='/owprofile' element={<OwnerProfile/>}/>
                                      <Route path='/addbuilding' element={<Addbuilding/>}/>
        <Route path='/myprojects' element={<MyProjects/>}/>
          <Route path='/showoffers' element={<Showoffers/>}/>
              </React.Fragment>
          <Route path='/adminlogin' element={<ADLogin/>}/>
        <Route path='/allbuildings' element={<AllBuildings/>}/>
        <Route path='/allowner' element={<AllOwner/>}/>
        <Route path='/allcontructor' element={<AllContractor/>}/>
        <Route path='/findtender' element={<Search/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

/*

  <Routes>
      <Route path='/' index element={<Home/>}/>

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        {
          Object.keys(user).length>0?(
            <React.Fragment>

        <Route path="bsub" element={<BidSubmition/>}/>

         <Route path='/builddetails' element={<BuildDetails/>}/>
        <Route path='/addoffer' element={<AddOffer/>}/>
            </React.Fragment>
          ):(
        <React.Fragment>
          <Route path='*' element={<Navigate to="/"/>}/>
          <Route path='/signup' element={<Signup/>}/>
        <Route path='/englogin' element={<Login/>}/>


        </React.Fragment>

          )
        }


        {
            Object.keys(ownserdata).length>0?(
              <React.Fragment>
                        <Route path='/owprofile' element={<OwnerProfile/>}/>
                                      <Route path='/addbuilding' element={<Addbuilding/>}/>
        <Route path='/myprojects' element={<MyProjects/>}/>
          <Route path='/showoffers' element={<Showoffers/>}/>
              </React.Fragment>
            ):(
              <React.Fragment>
                       <Route path='/owsign' element={<OwnerAccount/>}/>
        <Route path='/owlogin' element={<OwnerLogin/>}/>

              </React.Fragment>
            )
        }
          <Route path='*'  element={<Navigate to="/"/>}/>
          <Route path='/adminlogin' element={<ADLogin/>}/>
        <Route path='/allbuildings' element={<AllBuildings/>}/>
        <Route path='/allowner' element={<AllOwner/>}/>
        <Route path='/allcontructor' element={<AllContractor/>}/>
      </Routes>
*/
