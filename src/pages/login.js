import React, {useState, useEffect} from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
   
    email: "",
    pswd: "",
  
  });

  const [error, setError] = useState({
   
    pswd: "",
    email: "",
  
  });


 // const [data, setData] =(JSON.parse(localStorage.getItem("data")) || []);
  const[loggedIn, setLoggedIn]= useState(false);
 // console.log(data)
  const[duplicate, setDuplicate]=useState([]);
 
 
  const[loginData, setLoginData]= useState(JSON.parse(localStorage.getItem("info")));


  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);

  const handleSubmit = () => {
      console.log("submitted");
    if (!input["email"]) {
      setError({...error, email:"enter the Email"});
      return;
    } else if (!input["pswd"]) {
      setError({...error, pswd:"enter the password"});
      return;
    }
   else{//console.log("else")
     setError({})}
   
     const info =input
     console.log(info)
    // setData([...data, info]);
    // console.log(data)
       //   localStorage.setItem("data", JSON.stringify(data) || [...data]) 

    // setDuplicate([...data, info]);
 // console.log(loginData);
  // const sorteddata ={email:loginData.email,
  //   pswd:loginData.pswd};
  //   const password=sorteddata.pswd
  //   const email= sorteddata.email
  // console.log(sorteddata)
  
if(!loginData){alert("signup")}
    else if( info.email !== loginData.email){
     setError({email:"enter valid email"});
    return;}

     else if(info.pswd !==loginData.pswd ){
      setError({pswd:"enter valid password"})
      return;
     }
    
     else{ navigate('/dashbord');}
   
    clearState();
   
  };

  const clearState = () => {
    setInput({
     
      pswd: "",
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
      <h1>Form</h1>
      <div className="form">
      

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
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      </div>
      )}

