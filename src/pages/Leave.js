import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Leave() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [status, setStatus] = useState(""); 
  const [leave_type, setLeaveType] = useState("");
  const [employee_id, setEmployeeID] = useState("");
  const [start_date, setStart] = useState("");
  const [end_date, setEnd] = useState("");
  const [lev_reason, setLevReason] = useState("");
  const [lev_approve, setLevApprove] = useState("");

  const navigate = useNavigate(); 
  const send = async (e) => {
    e.preventDefault();

    // Field validation
    if (!leave_type) {
        alert("Please enter leave type.");
        return;
    }

    if (!employee_id) {
        alert("Please enter a valid employee ID.");
        return;
    }

    if (!start_date) {
        alert("Please select leave start date.");
        return;
    }

    if (!end_date) {
        alert("Please select leave end date.");
        return;
    }

    if (!lev_reason) {
        alert("Please enter leave reason.");
        return;
    }

    if (!lev_approve) {
        alert("Please enter leave approval.");
        return;
    }

    // Text validation
    const textRegex = /^[a-zA-Z\s]+$/;
    if (!textRegex.test(leave_type)) {
        alert("Please enter valid text for leave type.");
        return;
    }

    if (!textRegex.test(lev_reason)) {
        alert("Please enter valid text for leave reason.");
        return;
    }

    if (!textRegex.test(lev_approve)) {
        alert("Please enter valid text for leave approval.");
        return;
    }

    // ID validation
    const idRegex = /^\d+$/;
    if (!idRegex.test(employee_id)) {
        alert("Please enter a valid employee ID.");
        return;
    }

    // Date format validation
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
        alert("Please enter dates in the format YYYY-MM-DD.");
        return;
    }

    // End date should not be before start date
    const startDateObj = new Date(start_date);
    const endDateObj = new Date(end_date);
    if (endDateObj < startDateObj) {
        alert("End date should not be before start date.");
        return;
    }

    try {
        const response = await Axios.post('http://localhost:3015/unland', {
            leave_type: leave_type,
            employee_id: employee_id,
            start_date: start_date,
            end_date: end_date,
            lev_reason: lev_reason,
            lev_approve: lev_approve,
        }); if(response.data[0]) {
                window.alert("Account created successfully");
                navigate('/leaveinfo');
                return;
            } 
             else {
                setStatus(response.data)
                window.alert("Your account has already been created."); 
                return; 
          }
        }
             catch (error) {
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
        {/* <label htmlFor="approver">Leave type by</label>
          <input type="text" placeholder="Enter your leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" /> */}

<label style={{marginLeft:"40px"}} htmlFor="employee-id">Leave type</label>
<select  required onChange={(e) => setLeaveType(e.target.value)} className="collect">

         <option    value="">Select leave</option>
         <option    value="Sick leave">Sick leave</option>
         <option   value='Casual leave'>Casual leave</option>
         <option   value='Paid leave'>Paid leave</option>
         </select> 
          <label  style={{marginLeft:"40px"}}htmlFor="employee-id">Employee ID</label>
          <input required type="text" placeholder="Enter your ID"     onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />

          <label  style={{marginLeft:"40px"}}htmlFor="start-date">Leave start date</label>
          <input type="date"   onChange={(e) => setStart(e.target.value)} required id="start-date" className="collect" />

          <label  style={{marginLeft:"40px"}}htmlFor="end-date">Leave end date</label>
          <input type="date" onChange={(e) => setEnd(e.target.value)} required id="end-date" className="collect" />

          <label  style={{marginLeft:"40px"}}htmlFor="leave-reason">Leave Reason</label>
          <input type="text" placeholder="Enter leave reason" required   onChange={(e) => setLevReason(e.target.value)} id="leave-reason" className="collect" />

          <label  style={{marginLeft:"40px"}}htmlFor="approver">Leave Approved by</label>
          <input type="text" placeholder="Enter leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" />
          
          <button type="submit" onClick={send} style={{marginLeft:"70px",marginTop:"20px"}}className='button-27'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Leave;





























