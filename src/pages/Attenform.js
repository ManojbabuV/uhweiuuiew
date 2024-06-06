  
import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
import 'react-datetime/css/react-datetime.css';
 

function AttendanceForm() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [status, setStatus] = useState("");
  const [employee_id, setEmployeeID] = useState("");
  const [employee, setEmployee] = useState("");
 
  const [checki, setChecki] = useState('');
  const [checko, setChecko] = useState('');
  const navigate = useNavigate();

  const send = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3015/attend', {
        employee_id: employee_id,
        employee: employee,
        checki: checki,
        checko: checko
      });
      if (response.data[0]) {
        window.alert("Account created successfully");
        navigate('/attendance');
        return;
      } else {
        setStatus(response.data)
        window.alert("Your account has already been created.");
        return;
        }
        } catch (error) {
        console.error('Error creating account:', error);
        alert("An error occurred, please try again later");
        }
    }; 
   
      useEffect(() => { 
        document.body.style.backgroundColor = 'white';
  
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);
    return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form className="leave-form">
          <label style={{ marginLeft: "40px" }} htmlFor="employee-id">Employee ID</label>
          <input required type="text" placeholder="Enter your ID" onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />

          <label style={{ marginLeft: "40px" }} htmlFor="employee-position">Employee Position</label>
          <select required onChange={(e) => setEmployee(e.target.value)} className="collect" id="employee-position">Select Position
          <option value="">Select Position</option>
          <option value="Office employee">Office Employee</option>
          <option value="Onsite employee">Onsite Employee</option>
         </select>

          <label style={{ marginLeft: "40px", color: "black" }} htmlFor="check-in-time">Check IN</label>
        <input
          type="datetime-local"
          name="endTime"
          value={checki}
          className='collect'
          onChange={(e) => setChecki(e.target.value)}
        />
        <label style={{ marginLeft: "40px", color: "black" }} htmlFor="check-out-time">Checkout</label>
        
        <input
          type="datetime-local"
          name="endTime"
          className='collect'
          value={checko}
          onChange={(e) => setChecko(e.target.value)}
        />
       
  <button type="submit" onClick={send} className="button-27" style={{marginLeft:"80px",marginTop:"20px"}}>Submit</button>
    </form>
   </div>
   </div>
        );
        }
 
export default AttendanceForm;
