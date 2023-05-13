import { Route, Router, Routes } from 'react-router';
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
function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/owsign' element={<OwnerAccount/>}/>
        <Route path='/englogin' element={<Login/>}/>
        <Route path='/owlogin' element={<OwnerLogin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/builddetails' element={<BuildDetails/>}/>
        <Route path='/addoffer' element={<AddOffer/>}/>
        <Route path='/addbuilding' element={<Addbuilding/>}/>
        <Route path='/myprojects' element={<MyProjects/>}/>
        <Route path='/showoffers' element={<Showoffers/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
