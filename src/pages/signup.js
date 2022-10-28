import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    uname: "",
    email: "",
    pswd: "",
    gender: "",
    id: Date.now()
  });
  const [isEdit, setIsEdit] = useState(-1);

  const [error, setError] = useState({
    uname: "",
    pswd: "",
    email: "",
    gender: "",
  });

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  // console.log(data)
  const [duplicate, setDuplicate] = useState([]);

   useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data])

  const handleSubmit = () => {
    console.log("submitted");
    if (!input["uname"]) {
      setError({ ...error, uname: "enter username" });
    } else if (!input["email"]) {
      setError({ ...error, email: "enter the Email" });
      return;
    } else if (!input["pswd"]) {
      setError({ ...error, pswd: "enter the password" });
      return;
    } else if (!input["gender"]) {
      setError({ ...error, gender: "please select the gender" });
      return;
    } else {
     // console.log("else");
      setError({});
    }

    const info = input;
   
    
    setData([...data, info]);
    localStorage.setItem("info", JSON.stringify(info));

   // console.log(data);

    localStorage.setItem("data", JSON.stringify([...data, info]));

   // setDuplicate([...data, info]);
    clearState();
    navigate("/login");
  };

  const clearState = () => {
    setInput({

      uname: "",
      pswd: "",
      gender: "",
      selected: "",
      email: "",
    });
  };

  const handleOnchange = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
    //console.log(value)
  };

  return (
    <div className="App">
     
      <div className="form">
      <h1>Form</h1>
        <div className="row_form">
          <label htmlFor="uname" className="label">
            Username
          </label>
          <input
            type="text"
            id="uname"
            className="input"
            value={input.uname}
            onChange={handleOnchange}
            name="uname"
          ></input>
        </div>
        {error.uname}

        <div className="row_form">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleOnchange}
            className="input"
          ></input>
        </div>
        {/* {input.id} */}
        {error.email}

        <div className="row_form">
          <label htmlFor="pswd" className="label">
            Password
          </label>
          <input
            type="password"
            id="pawd"
            className="input"
            name="pswd"
            value={input.pswd}
            onChange={handleOnchange}
          ></input>
        </div>
        {error.pswd}

        <div className="row_form">
          <label htmlFor="gender" className="label">
            Gender:
          </label>
          <input
            type="radio"
            value={"Male"}
            className="input"
            name="gender"
            id="Male"
            checked={input.gender === "Male"}
            onChange={handleOnchange}
          ></input>
          Male
          <input
            type="radio"
            value={"Female"}
            className="input"
            name="gender"
            id="Female"
            checked={input.gender === "Female"}
            onChange={handleOnchange}
          ></input>
          Female
        </div>
        {error.gender}

        <div className="row_form">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
          <p>
            have already account?
            <Link to="/login" style={{ color: "greenyellow" }}>
              {"_______________"}
              <button
                style={{ backgroundColor: "greenyellow", padding: "10px" }}
              >
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
