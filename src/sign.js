import React, { useEffect, useState }  from 'react'
import './sign.css'
// import Check from './assets/check.png'
// import Azure from './assets/azure.png'
// import Sql from './assets/sql.png'
// import Aws from './assets/aws.png'
// import Mongo from './assets/mon.png'
// import Vmware from './assets/vmware.png'
import Axios from 'axios'

import Signlogo from './assets/company.png'

import {Link, useNavigate } from 'react-router-dom'

function Sign()  {
 
  const [emp_name, setCompanyname] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setEmployees] = useState("");
  const [emp_email, setBusinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emp_address, setCompanyAddress] = useState("");
  const [emp_designation, setcompanywebsite] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
 const navigate = useNavigate()
  const sign  = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3015/sign', {
        emp_name: emp_name,
      mobile: mobile,
      department: department,
      emp_email: emp_email,
      password: password,
      emp_address: emp_address,
      emp_designation: emp_designation,
      }); 
      if(response.data.emp_email === emp_email && response.data.mobile === mobile) {
        setRegisterStatus(response.data)
        window.alert("Your account has already been created.");
        return;
    } 
     else {
        window.alert("Account created successfully");
        navigate('/login');
        return;
     
  }
}
     catch (error) {
      console.error('Error creating account:', error);
      alert("An error occurred, please try again later");
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
    <div className='tiger' style={{backgroundColor:"#e6f1fc"}}>  
      <div className='head'>
          <header>
           <img src={Signlogo} style={{marginTop:"20px",marginLeft:"29px"}} height="100px" width="400px"alt =""/>
           </header>
             </div>
  <div class="container" style={{backgroundColor:"#e6f1fc"}}>
      {/* <h1>Stackpos Group</h1>
      <h2>Hr and Payroll Software</h2> 
    <div className='main'>
    <p><b>Complete Hr and Payroll Management Software</b></p>
    <br></br>
    <ul >
      <li><img src={Check} height="20px" width="20px" alt=""/>
      <p>Advanced Encryption Alogorithms & AES</p></li>
      <li><img src={Check}  height="20px" width="20px" alt=""/>
      <p> 30+ HR Core Features & Modules</p></li>
     
      <li><img src={Check} height="20px" width="20px" alt=""/>
       <p>Completed Payroll Management System</p></li>
       <li><img src={Check}height="20px" width="20px" alt=""/>
<p>Open Source for SMB & Startups</p></li>
<li><img src={Check} height="20px" width="20px"alt=""/>
<p>Cloud licensing - free for Organizations & commercial use</p></li>
<li><img src={Check} height="20px" width="20px" alt=""/>
<p>Not for Personal,Automation Testing or RPA Usage</p>
    </li>
    </ul>
    </div> */}
     
    <div className='tec2'>
    <form >
      <center><h2>SIGN UP NOW</h2></center>
      <p><span className='ciju'> Use the form below to create your account.</span> </p>
      <br></br>
      <label htmlFor='compnay_name'></label>
      <input type="text"  placeholder="Employee name" required  onChange={(e)=>{setCompanyname(e.target.value)}} autocomplete="off" classname="form__input" id="companyname" />
       <br></br> <br></br>
      <label htmlFor='mobile'></label>
      <input type="tel" placeholder="Contact Number "     autocomplete="off"  onChange={(e)=>{setMobile(e.target.value)}} required classname="form__input" id="mobile" />
      <br></br> <br></br>
      <label htmlFor='employees'></label>
     
      <input type="text" placeholder="Enter your Department"  onChange={(e)=>{setEmployees(e.target.value)}} autocomplete="off" required classname="form__input" id="employees" />
      <br></br>
      <br></br>
      <label htmlFor='company_email'></label>
      <input type="text"  
          placeholder="Employee Email" autocomplete="off"  onChange={(e)=>{setBusinessEmail(e.target.value)}}  required classname="form__input" id="businessemail" />
       <br></br> <br></br>
      <label htmlFor='Password'></label>
      <input type="text"
           placeholder="Password" required autocomplete="off"  onChange={(e)=>{setPassword(e.target.value)}}  classname="form__input" id="password" />
      <br></br> <br></br>
      <label htmlFor='company_address'></label>
      <input type="text"
          placeholder="Employee address" autocomplete="off"  onChange={(e)=>{setCompanyAddress(e.target.value)}}  required classname="form__input" id="address" />
       <br></br> <br></br>
      <label htmlFor='Enter your designation'></label>
      <input type="text" placeholder="Enter your designation"   autocomplete="off"  onChange={(e)=>{setcompanywebsite(e.target.value)}} required classname="form__input" id="companywebsite" />
      <br></br> <br></br>
  <input type="checkbox"  id="flexCheckDefault" className='text'/>
  <label> I agree to these terms & conditions</label>
  <br></br>
       <Link to="/login"  className='b3'>Login</Link> <button type="button" onClick={sign} className='b4'> Sign Up </button>
       <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
        </form>
       </div>
   </div>
    <div style={{backgroundColor:"#e6f1fc",marginTop:"0px"}}>  
    </div>  
   
  {/* <div class="last">
    
    <br></br>
    <br></br>
    <img src={Azure} alt="" width="50px" height="40px"/> <img src={Sql} alt="" width="50px" height="40px"/> <img src={Mongo} alt="" width="50px" height="40px"/> <img src={Aws} alt="" width="50px" height="40px"/> <img src={Vmware} alt="" width="50px" height="40px"/>
  
    </div> */}
    </div>
  )
  }



 export default Sign

