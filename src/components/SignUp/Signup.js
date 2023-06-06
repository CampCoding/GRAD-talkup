import React, { useContext, useEffect, useState } from "react";
import "./signup.css";
import {
  AiFillCamera,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
const Signup = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [passshow, setpassshow] = useState(false);
  const [confpassshow, setconfpassshow] = useState(false);
  const [signdata, setsigndata] = useState({
    identify_image: null,
    contractor_name: "",
    address: "",
    identify_number: "",
    email: "",
    password: "",
    phone: "",
  });
  const [confdata, setconfdata] = useState("");

  const isvalidnumber = (val) => {
    const reg =
      /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;
    if (reg.test(val)) {
      return true;
    }
    return false;
  };

  const handlesign = () => {
    if (signdata.identify_image == "") {
      toast.warn("enter identify image", {
        position: "bottom-right",
      });
      return;
    }
    if (signdata.contractor_name == "") {
      toast.warn("enter your contractor_name", {
        position: "bottom-right",
      });
      return;
    }
    if (signdata.address === "") {
      toast.warn("enter your address", {
        position: "bottom-right",
      });
      return;
    }
    if (
      signdata.identify_number === "" ||
      !isvalidnumber(signdata.identify_number)
    ) {
      toast.warn("enter valied identify number", {
        position: "bottom-right",
      });
      return;
    }
    if (signdata.email === "") {
      toast.warn("enter email", {
        position: "bottom-right",
      });
      return;
    }
    if (signdata.password === "") {
      toast.warn("enter password", {
        position: "bottom-right",
      });
      return;
    }
    if (confdata === "") {
      toast.warn("enter confirm password", {
        position: "bottom-right",
      });
      return;
    }
    if (signdata.password !== confdata) {
      toast.warn("make sure that password is same to confirm password", {
        position: "bottom-right",
      });
    }
    /*   const  data_send={
      ...signdata
    } */
    const formdata = new FormData();
    formdata.append("contractor_name", signdata.contractor_name);
    formdata.append("identify_image", signdata.identify_image);
    formdata.append("phone", signdata.phone);
    formdata.append("email", signdata.email);
    formdata.append("password", signdata.password);
    formdata.append("address", signdata.address);
    formdata.append("identify_number", signdata.identify_number);
    //console.log(data_send)
    console.log(formdata);
    axios
      .post("http://127.0.0.1:8000/register_contractors/", formdata)
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.success("done", {
            position: "bottom-right",
          });
          login(res.data.body);
          localStorage.setItem("contractor", JSON.stringify(res.data.body));
          navigate("/", { replace: true });
        } else if (res.data.status === "faild") {
          toast.error(res.data.body, {
            position: "bottom-right",
          });
        } else {
          toast.error("حدث خطأ ما برجاء المحاوله مره اخرى", {
            position: "bottom-right",
          });
        }
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="signup">
      <div>
        <div className="sign_up_eng_img">
          <img src={require("../../assets/images/eng.png")} alt="" />
        </div>
        <h4
          style={{
            fontSize: "20px",
            color: "#8AA4AE",
          }}
        >
          Engineer/Developer
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesign();
          }}
        >
          <div>
            <h4>identify image</h4>
            <div className="per_img">
              <input
                type="file"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    identify_image: e.target.files[0],
                  });
                }}
              />
              <AiFillCamera />
            </div>
          </div>
          {/*           <div>
            <h4>personal image</h4>
            <div className="per_img">
              <input type="file"
                onChange={(e)=>{
                  setsigndata({
                    ...signdata,
                    perimage:e.target.files[0]
                  })
                }}
              />
              <AiFillCamera/>
            </div>
          </div> */}
          <div>
            <h4>contractor name</h4>
            <div className="per_img">
              <input
                type="text"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    contractor_name: e.target.value,
                  });
                }}
              />
              <HiUserCircle />
            </div>
          </div>
          <div>
            <h4>phone</h4>
            <div className="per_img">
              <input
                type="text"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    phone: e.target.value,
                  });
                }}
              />
              <AiOutlinePhone />
            </div>
          </div>
          <div>
            <h4>address</h4>
            <div className="per_img">
              <input
                type="text"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    address: e.target.value,
                  });
                }}
              />
              <GoLocation />
            </div>
          </div>
          <div>
            <h4>identify number</h4>
            <div className="per_img">
              <input
                type="text"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    identify_number: e.target.value,
                  });
                }}
              />
              <AiOutlineIdcard />
            </div>
          </div>
          {/*           <div>
            <h4>العنوان</h4>
            <div className="per_img">
              <input type="text" />
              <GoLocation/>
            </div>
          </div> */}
          <div>
            <h4>email</h4>
            <div className="per_img">
              <input
                type="text"
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    email: e.target.value,
                  });
                }}
              />
              <AiOutlineMail />
            </div>
          </div>
          <div className="pass">
            <h4>password</h4>
            <div className="per_img">
              <input
                type={`${passshow ? "text" : "password"}`}
                onChange={(e) => {
                  setsigndata({
                    ...signdata,
                    password: e.target.value,
                  });
                }}
              />
              <RiLockPasswordFill />
              {passshow ? (
                <AiFillEyeInvisible
                  onClick={() => {
                    setpassshow(false);
                  }}
                />
              ) : (
                <AiFillEye
                  onClick={() => {
                    setpassshow(true);
                  }}
                />
              )}
            </div>
          </div>
          <div className="pass">
            <h4>confirm password</h4>
            <div className="per_img">
              <input
                type={`${confpassshow ? "text" : "password"}`}
                onChange={(e) => {
                  setconfdata(e.target.value);
                }}
              />
              <RiLockPasswordFill />
              {confpassshow ? (
                <AiFillEyeInvisible
                  onClick={() => {
                    setconfpassshow(false);
                  }}
                />
              ) : (
                <AiFillEye
                  onClick={() => {
                    setconfpassshow(true);
                  }}
                />
              )}
            </div>
          </div>
          <button
            className="gradiant"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "17px",
            }}
          >
            sign up
          </button>
          <Link
            style={{
              display: "block",
              marginTop: "20px",
              textDecoration: "none",
              cursor: "pointer",
              textTransform: "capitalize",
              fontSize: "20px",
              color: "#57707a",
            }}
            to={"/owsign"}
          >
            make work owner account
          </Link>
        </form>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Signup;
