import React, { useState,useEffect } from 'react'
import './login.css'
import Signlogo from './assets/company.png'
import { Link, useNavigate  } from 'react-router-dom'
import  Axios  from 'axios';
  function Login() { 
 const [emp_email,setBusinessEmail]=useState('');
 const [password,setPassword]=useState('');
 const [message, setMessage] = useState('');
 const [loginStatus,setLoginStatus] =useState('');
 const [token, setToken] = useState('');
 const navigate = useNavigate(); 
 useEffect(() => {
  // Disable browser back button navigation
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function (_event) {
    window.history.pushState(null, '', window.location.href);
  };

  // Show a confirmation message when leaving the page
  window.onbeforeunload = function () {
    return "Are you sure you want to leave?";
  };
}, []);
 const login = async(e) => {
  e.preventDefault(); 
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!emailRegex.test(emp_email)) {
  window.alert("Please enter a valid Email Address.");
  return;
}
const minPasswordLength = 8; // Minimum password length
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // Password regular expression

if (!passwordRegex.test(password) || password.length < minPasswordLength) {
  window.alert("Please enter valid  password.");
  return;
}
try {
  const response = await Axios.post("http://localhost:3015/server", 
  {
    emp_email: emp_email,
    password: password
  });

  if (response.data.message) {  
    setLoginStatus(response.data.message)
    setToken(response.data.token);
    window.alert("Account logged successfully"); 
    navigate('/dashboard');
  

    const isLoggedIn = false;

    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
     
  } else {  
    alert("Invalid username or password. Please try again")
    const isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
     
  }
} 
catch (error) {
  setMessage(error.response?.data?.message || 'An error occurred.');
  alert(". Unauthorized username or password")
  console.error("Error:", error);  
  return; 
}
}; 
useEffect(() => { 
  document.body.style.backgroundColor = '#e6f1fc';
  document.body.style.width = '100%';
  document.body.style.height = '100%';
  document.body.style.fontFamily='Inter , sans-serif';

  return () => {
      document.body.style.backgroundColor = '#e6f1fc';
  };
}, []);
  
  return (
    <div style={{body:"#f9f9f9"}} >
    <div className="lion" style={{backgroundColor:"#e6f1fc"}}>  
       <header className='imageadd'>
           <img src={Signlogo}   height="100px" width="400px"alt =""/>
      </header>
      <div class="cta-form">
 
    </div>
   <div className='tec'>
    <form className='frame'>
      <center><h2>LOGIN IN NOW</h2></center>
      <p ><span className='ciju'> Use the form below to create your account.</span> </p>
      <br></br>
     <input type="text"  
          placeholder="Business Email" autocomplete="off" required onChange={(e)=>{setBusinessEmail(e.target.value)}}  classname="input" id="businessemail" />
      <br></br>
      <br></br>
      <input type="text"
           placeholder="Password" required autocomplete="off" onChange={(e)=>{setPassword(e.target.value)}} classname="input" id="password" />
      <br></br>
      <Link className='b1' to ="/sign">Signup</Link>  
       <button  onClick={login} className='b2'>Login</button>
       </form>
       {message && <p>{message}</p>}
      {token && <p>Token: {token}</p>}
       {/* <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1> */}
       </div>
       <br></br>
    {/* <p className='la1'>
    Trusted by our company Partners
    </p> */}
  {/* <div class="last">
  <img src={Azure} alt="" width="40px" height="40px"/> <img src={Sql} alt="" width="40px" height="40px"/> <img src={Mongo} alt="" width="40px" height="40px"/> <img src={Aws} alt="" width="40px" height="40px"/> <img src={Vmware} alt="" width="40px" height="40px"/>
    </div> */}
    </div>
    </div>
  )
} 
export default Login




 