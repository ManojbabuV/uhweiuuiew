import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './form.css';
import Sidebar from '../components/Sidebar';

const Form = () => {
    const navigate = useNavigate();
    const [employee_name, setEmployeeName] = useState('');
    const [father_name, setFatherName] = useState('');
    const [employee_id, setEmployeeId] = useState('');
    const [personal_email, setPersonalEmail] = useState('');
    const [work_email, setWorkEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [marital_status, setMaritalStatus] = useState('');
    const [location, setTemporaryAddress] = useState('');
    const [permanent, setPermanentAdd] = useState('');
    const [employee_Ref, setEmployeeRef] = useState('');
    const [remark, setRemark] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [reporting, setReporting] = useState('');
    const [pan_no, setPanNO] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [bankac, setBankAc] = useState('');
    const [bankName, setBankName] = useState('');
    const [uanno, setUanno] = useState('');
    const [pfno, setPfNo] = useState('');
    const [blood_G, setBloodG] = useState('');
    const [startjoin, setJoin] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [upload,setUpload] = useState('');
    const dashBard = () => {
        navigate('/871ef6c4d033c680e02f54c758b316c1436a601b');
    };

const employ = async (e) => {
  e.preventDefault();

 
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const employeeRegex = /^\d{4}$/;
  const mobileRegex = /^\d{10}$/;
  const accounteRegex = /^\d{12}$/;
  
  const officeRegex = /^[a-zA-Z.a-z_%+-]+@(stackpos\.com|stackpos\.in)$/;
  const validateGender = () => {
    return gender !== '';
};
 
 

const validateMTS = () => {
return marital_status !== '';

};


const validateAddress = (location) => {  
  if (!location.trim()) {
      return false;
  }
  return true;
}; 
const validateAdd = (permanent) => { 
  if (!permanent.trim()) {
      return false;
  }
  return true;
};
const validateRef =(employee_Ref)=>{
const emploRegex = /^([A-Z]){3}([0-9]){4}([A-Z]){1}$/;
return emploRegex.test(employee_Ref);
}


        if (!nameRegex.test(employee_name)) {
          window.alert("Enter a Valid First Name.");
          return;
        }
        if (!nameRegex.test(father_name)) {
          window.alert("Enter a Valid father Name.");
          return;
        }
        if (!employeeRegex.test(employee_id)) {
          window.alert("Enter a Valid employee ID Number.");
          return;
        }
        if (!emailRegex.test(personal_email)) {
          window.alert("Enter a Valid Email ID.");
          return;
        }
        if (!officeRegex.test(work_email)) {
          window.alert("Enter a Valid Office mail ID.");
          return;
        }
        if (!mobileRegex.test(mobile)) {
          window.alert("Enter a Valid Mobile number.");
          return;
        }
        if (!accounteRegex.test(bankac)) {
          window.alert('Invalid Account number:It should be a 12-digit number.');
          return;
        }   
        if (!validateGender()) {
          window.alert("You unselected the gender.");
          return;
      }
      
    if (!validateMTS()) {
      window.alert("You unselected the marital status.");
      return;
  }
  if (!validateAddress(location)) {
    window.alert("Please enter a Current location.");
    return;
}
  if (!validateAdd(permanent)) {
    window.alert("Please enter a Permanent location.");
    return;
}
  if (!validateRef(employee_Ref)) {
    window.alert("Please enter a  reference id.");
    return;
}

const validateUAN = (uanno) => {
  const uanRegex = /^\d{12}$/;
  return uanRegex.test(uanno);
};

if (!validateUAN(uanno)) {
window.alert("Invalid UAN number:It should be a 12-digit number.");
return;
}
const validateRemark = () => { 
return remark.trim() !== '';
};

if (!validateRemark()) {
window.alert("Please enter a valid remark.");
return;
}

const validateDepartment = () => { 
return department.trim() !== '';
};

if (!validateDepartment()) {
window.alert("Please enter a valid department.");
return;
}

const validateDesignation = () => { 
return designation.trim() !== '';
};

if (!validateDesignation()) {
window.alert("Please enter a valid designation.");
return;
}

const validateReporter = () => { 
return reporting.trim() !== '';
};

if (!validateReporter()) {
window.alert("Please enter a valid reporter name.");
return;
}
const validateAadhar = (aadhar) => {
const aadharRegex = /^\d{12}$/;
return aadharRegex.test(aadhar);
};

if (!validateAadhar(aadhar)) {
window.alert("Invalid Aadhar number. It should be a 12-digit number");
return;
}
  


  const validatePAN = (pan_no) => {
    const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    return panRegex.test(pan_no);
};

  if (!validatePAN(pan_no)) {
window.alert("Invalid PAN number. Please enter a valid PAN number");
return;
}



const validatePFNo = (pfno) => {
    const pfnoRegex = /^\d{7}$/;
    return pfnoRegex.test(pfno);
};
if (!validatePFNo(pfno)) {
  window.alert("Invalid PF number. It should be a 7-digit number");
  return;
}



  try {
      const response = await Axios.post("http://localhost:3015/comment", {
          employee_name,
          father_name,
          employee_id,
          personal_email,
          work_email,
          mobile,
          gender,
          dob,
          marital_status,
          location,
          permanent,
          employee_Ref,
          remark,
          department,
          designation,
          reporting,
          pan_no,
          aadhar,
          bankac,
          bankName,
          uanno,
          pfno,
          blood_G,
          startjoin
      }); 
      if (response.data.message) {
          window.alert("Something went wrong! Please try again later.");
      } else {
          window.alert("Employee details added successfully");
          navigate("/employee");
      }
  } catch (error) {
      console.error("Error occurred:", error);
      window.alert("Already signed your data please goto update.");
  }
};
const Upload =async(e)=>{
e.preventDefault();
try{
  const response = await Axios.post("http://localhost:3015/upload", {
    upload:upload
  })
  setUpload(response.data)
  console.log("file uploaded")

}catch(error){
  console.error("Error occurred:", error);

}
}
    return (
        <div style={{ backgroundColor: "#ffffff",overflow:"hidden"}}>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className='h1n'> 
                <h1 className='h12' >Employee Info</h1>
            </div>
            <div className='havet'>
                <form style={{ backgroundColor: "#ffffff"   ,border:"1px solid black"}} className="fruits-container" >
          <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
          <label  className='text3'  style={{marginTop:"10px"}}>Employee Name </label>
        <input placeholder='Enter your name' type="text" onChange={(e) => setEmployeeName(e.target.value)} className='new3' autoComplete='off' name="employeeName" required />
        
        <label className='text3'>Father Name</label>
        <input placeholder='Enter your father name' type="text" onChange={(e) => setFatherName(e.target.value)} className='new3' autoComplete='off' name="fatherName" required />
        
        <label className='text3'>Employee ID</label>
        <input type="text" placeholder='Enter your ID' className='new3' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
        
        <label className='text3'>Personal Email ID</label>
        <input type="email" placeholder='Enter your Email ID' className='new3' autoComplete='off' onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
        
        <label className='text3'>Work email ID</label>
        <input type="email" className='new3' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
        
        <label className='text3'>Mobile Number</label>
        <input type="tel" className='new3'autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" required />
        <label className='text3'>Bank A/C Number </label>
        <input className='new3'type="text"   name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} id="report_to"/>
       
        <label className='text3'>Bank Name </label>
        <input className='new3'type="text"   name="report_to" placeholder='Enter your bank name' onChange={(e) => setBankName(e.target.value)} id="report_to"/>
        <label className='text3'>Select Blood Group:</label>
<select id="blood-group" onChange={(e) => setBloodG(e.target.value)}className="new3"name="blood-group">
  <option value=""> Blood Group </option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>

      </div>
      
                    <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                    <label className='text3'  style={{marginTop:"10px"}}>Employee Gender</label>
        <select className='new3' onChange={(e) => setGender(e.target.value)} name="gender" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        
        <label className='text3'>Date of Birth</label>
        <input type="date" className='new3'onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
        
        <label className='text3'>Marital Status</label>
        <select className='new3' name="maritalStatus" onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select Marital Status</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Married">Married</option>
        </select>
        
        <label className='text3'>Current Address</label>
        <input type="textarea" placeholder='Enter your current address' className='new3' onChange={(e) => setTemporaryAddress(e.target.value)} name="currentAddress" autoComplete='off' required />
        
        <label className='text3'>Permanent Address</label>
        <input type="textarea" placeholder='Enter your permanent address' className='new3' name="permanentAddress" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
        
        <label className='text3'>Employee REF ID</label>
        <input type="text" placeholder='Enter your Referal ID ' className='new3' name="employeeRefNo" onChange={(e) => setEmployeeRef(e.target.value)} autoComplete='off' required />
        <label className='text3'>UAN Number</label>
        <input className='new3' placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="report_to"/>
      
        <label className='text3'>Joining Date</label>
        <input className='new3' placeholder='Enter your join date' onChange={(e) => setJoin(e.target.value)} type="date" name="join" id="join"/>
      
   <div className='center-button'>
                        <button  className='button-27' style={{marginLeft:"70px"}}  onClick={employ} type='submit'>Submit</button>
                    </div>
                    </div>
                    <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                        <label className='text3' style={{ marginTop: "10px" }}>Remark</label>
                        <textarea className='new3' placeholder='Enter any remarks' autoComplete='off' onChange={(e) => setRemark(e.target.value)} name="remarks" required></textarea>

                        <label className='text3'>Department</label>
        <select className='new3' onChange={(e) => setDepartment(e.target.value)} placeholder='Select designation'>
  <option value="">Select Department</option>
  <option value="Manager">Manager </option>
  <option value="Team Lead">Team Lead </option>
  <option value="HR Executive">HR Executive</option>
  <option value="Developer">Developer </option>
  <option value="Devleloper Trainee">Devleloper Trainee</option>
  <option value="Tester">Tester</option>
  <option value="Office Assistent">Office Assistent</option> 
</select>  
        <label className='text3'>Designation </label>
        <select className='new3' onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
  <option value="">Select Designation</option>
  <option value="Manager">Project Manager </option>
  <option value="Team Lead">Team Lead </option>
  <option value="HR Executive">HR Executive</option>
  <option value="Office Assistent">Office Assistent</option>
  <option value="Financle Developer Office">Financle Developer Onsite</option>
  <option value="Financle Developer Office">Financle Developer Office </option>
  <option value="Financle Developer Trainee">Financle Developer Trainee</option>
  <option value="React JS Developer ">React JS Developer </option>
  <option value="Automation Tester">Automation Tester Trainee </option>
  <option value="Manual Tester">Manual Tester </option>
  <option value="Web Developer">Web Developer </option>
  <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
  
</select> 
                        <label className='text3'>Reporting Manager</label>
                        <input className='new3' placeholder='Enter your Reporting Manager' autoComplete='off' type="text" onChange={(e) => setReporting(e.target.value)} name="reportingManager" required />

                        <label className='text3'>Aadhar Number</label>
                        <input className='new3' placeholder='Enter your Aadhar Number' autoComplete='off' type="text" onChange={(e) => setAadhar(e.target.value)} name="aadharNumber" required />

                        <label className='text3'>PAN Number</label>
                        <input className='new3' placeholder='Enter your PAN Number' autoComplete='off' type="text" onChange={(e) => setPanNO(e.target.value)} name="panNumber" required />

                        <label className='text3'>PF Number</label>
                        <input className='new3' placeholder='Enter your PF Number' autoComplete='off' type="text" onChange={(e) => setPfNo(e.target.value)} name="pfNumber" required />
                    <label >Upload certificates</label>
                    <input  className="new3" type ="file" multiple />
                    <div className='center-button'>
                        <button className='button-27' style={{marginLeft:"80px"}}onClick={Upload} type='submit'>Upload files</button>
                    </div>
                    </div>
           
                </form>
            </div>
            </div>
        </div>
    );
};

export default Form;





 