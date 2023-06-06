import { createContext, useEffect, useMemo,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
export const AppContext = createContext();

export default function AppContextProvider  ({ children })  {
  const [user, setUser] = useState({})
  const [adminuser,setadminuser]=useState({});
  const [admin,setadmin]=useState({

  });
  const [ownerdata,setownerdata]=useState({});
  const [ownserdata,setownserdata]=useState({});
  //console.log(admin)
  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    window.localStorage.setItem("contractor", JSON.stringify(data));
  };
  const owadlogin = async (data) => {
    setadmin(data);
    window.localStorage.setItem("owner", JSON.stringify(data));
  };
  const ownerlogin = async (data) => {
    setadmin(data);
    window.localStorage.setItem("owner", JSON.stringify(data));
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser({});
  };
  const ownerlogout = () => {
    setownserdata({});
    setownerdata({});
  };
  useEffect(()=>{

    let uData=localStorage.getItem("contractor");
    if (uData!="null"&& uData!=null && uData!=undefined) {
      setUser(JSON.parse(uData))
    }
    let admindata=localStorage.getItem("adminlogin");
    if(admindata!="null"&& admindata!=null && admindata!=undefined){
      setadmin(JSON.parse(admindata));
    }
    // let Odata=localStorage.getItem("owner");
    // if (Odata!="null"&& Odata!=null && Odata!=undefined) {
    //   setownserdata(JSON.parse(Odata))
    // }
    let Ownerdata=localStorage.getItem("owner");
    if (Ownerdata!="null"&& Ownerdata!=null && Ownerdata!=undefined) {
      setownerdata(JSON.parse(Ownerdata))
    }
  },[])


  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      ownserdata,
      owadlogin,
      ownerlogout,
      ownerdata,
      ownerlogin
      //admin,
      //adlogin,
    }),
    [user,ownserdata,ownerdata]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
