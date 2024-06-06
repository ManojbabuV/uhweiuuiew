// import React from 'react';
// import './styles.css';
// import Sidebar from '../components/Sidebar';

// const LeaveRequests = () => {
//   const leaveRequests = [
//     { type: 'Paternity Leave', from: '18/09/2016', to: '15/08/2017', days: 2, reason: 'Marriage Leave', approvedBy: 'Ralph Edwards', status: 'Approved' },
//     { type: 'Sick Leave', from: '15/08/2017', to: '15/08/2017', days: 4, reason: 'Compensation Leave', approvedBy: 'Eleanor Pena', status: 'Approved' },
//     // Add more leave requests as needed
//   ];

//   return (
//     <div className="app">
//       <Sidebar />
//       <div className="main-content">
//         <div className="leave-requests">
//           <h2>All Leaves Requests</h2>
          // <div className="leave-summary">
            // <div className="summary-card">
            //   <h3>28</h3>
            //   <p>Total Available Leaves</p>
            // </div>
            // <div className="summary-card">
            //   <h3>08</h3>
            //   <p>Total Sick Leaves</p>
            // </div>
            // <div className="summary-card">
            //   <h3>14</h3>
            //   <p>Total Casual Leaves</p>
            // </div>
            // <div className="summary-card">
            //   <h3>06</h3>
            //   <p>Total Paid Earned Leaves</p>
            // </div>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Leave Type</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Days</th>
//                 <th>Reason</th>
//                 <th>Approved By</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaveRequests.map((request, index) => (
//                 <tr key={index}>
//                   <td>{request.type}</td>
//                   <td>{request.from}</td>
//                   <td>{request.to}</td>
//                   <td>{request.days}</td>
//                   <td>{request.reason}</td>
//                   <td>{request.approvedBy}</td>
//                   <td className={`status ${request.status.toLowerCase()}`}>{request.status}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaveRequests;





 // const handleEdit = (id, currentStatus) => {
  //   setEditRowId(id);
  //   setEditStatus(currentStatus);
  // };

//   const handleSave = async (id) => {
  
//     try {
//         await Axios.put(`http://localhost:3018/updating/${id}`, {
//         lev_status: editStatus,
//       });
//       setStatus((prevStatus) =>
//         prevStatus.map((leave) =>
//           leave.id === id ? { ...leave, lev_status: editStatus } : leave
//         )
//       );
//       setEditRowId(null);
//       setEditStatus('');
//       alert("Status updated successfully");
//     } catch (error) {
//       console.error('Error updating status:', error);
//       alert("An error occurred, please try again later");
    
// }

  
// };
import React, { useState, useEffect } from 'react';
import './styles.css';
import Sidebar from '../components/Sidebar';
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
// import { CheckBox } from '@mui/icons-material';

const Leaveinfo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [newstatus, setStatus] = useState([]);
  const [newrowId, setEditRowId] = useState(null);
  const [sickl, setSickl] = useState(0);
  const [sick, setSick] = useState([]);
  const [casual, setCasual] = useState(0);
  const [casuall, setCasuall] = useState([]);
  const [paid, setPaid] = useState(0);
  const [paidedl, setPaidedl] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await Axios.get('http://localhost:3015/getRecords');
        setEmployees(response.data.employees); // Ensure the backend sends data in this format
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []);

  // Removed Object.entries as it was not being used correctly
 
  const handleSave = async (id) => {
    try {
      await Axios.put(`http://localhost:3018/update/${id}`, {
        lev_status: newstatus,
      });
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === id ? { ...employee, lev_status: newstatus } : employee
        )
      );
      setEditRowId(null); 
      setStatus('');
      alert("Status updated successfully");
    } catch (error) {
      console.error('Error updating status:', error);
      alert("An error occurred, please try again later");
    }
  };
    
//   function handleCheckboxClick(employee_id) {
//     const isChecked = document.getElementById(`employeeCheckbox_${employee_id}`).checked;

//     if (isChecked) {
//         // Perform add or update operation
//         handleSave(employee_id);
//     } else {
//         // Perform delete operation
//         alert("clicked")
//     }
// }
const handleEdit = (id, status) => {
  setEditRowId(id);
  setStatus(status);
};
  const Leave = () => {
    navigate('/leave');
  };
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
useEffect(() => {
  async function fetchTotal() {
    try {
      const response = await Axios.get('http://localhost:3015/sickl');
      setSickl(response.data.sickl); 
      setSick(response.data.sick);  
      console.log("Total employee count data fetched successfully");
    } catch (error) {
      setError("An error occurred while fetching total count.");
      console.error("Error fetching total count:", error);
    }
  }
  fetchTotal();
}, []);
useEffect(() => {
  async function fetchTotal() {
    try {
      const response = await Axios.get('http://localhost:3015/casul');
      setCasual(response.data.casual); 
      setCasuall(response.data.casuall);  
      console.log("Total employee count data fetched successfully");
    } catch (error) {
      setError("An error occurred while fetching total count.");
      console.error("Error fetching total count:", error);
    }
  }
  fetchTotal();
}, []);
useEffect(() => {
  async function fetchTotal() {
    try {
      const response = await Axios.get('http://localhost:3015/paided');
      setPaid(response.data.paid); 
      setPaidedl(response.data.paidedl);  
      console.log("Total employee count data fetched successfully");
    } catch (error) {
      setError("An error occurred while fetching total count.");
      console.error("Error fetching total count:", error);
    }
  }
  fetchTotal();
}, []);
  Object.entries(employees.map(x=>console.log(x)))
  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="leave-requests">
          <h2 className='test'>Leaves</h2>
            <div className="leave-summary">
            <div className="summary-card">
                <h3>12</h3>
                <p>Total Available Leaves</p>
              </div>
              <div className="summary-card2">
                <h3>{sick.map((sicked)=>(
                  <div key={sicked.id}>
                    <h3>{sicked.sickl}</h3>
                  </div>
                ))}</h3>
                <p>Total Sick Leaves</p>
              </div>
              <div className="summary-card3">
                <h3>{casuall.map((casuled)=>(
                  <div key={casuled.id}>
                    <h3>{casuled.casual}</h3>
                  </div>
                ))}</h3>
                <p>Total Casual Leaves</p>
              </div>
              <div className="summary-card4">
                <h3>{paidedl.map((casuled)=>(
                  <div key={casuled.id}>
                    <h3>{casuled.paid}</h3>
                  </div>
                ))} </h3>
                <p>Total Paid Earned Leaves</p>
              </div>
          </div>
          <div className='set'>
            <h2 className='test1'>All Leave Requests</h2>
            <button type="button" onClick={Leave} className='button-27' style={{  alignItems:"center",display:"flex",width:"125px",marginLeft:"0px",marginTop:"0px"}}>
              <img src={plus} alt="Apply Leave" height="20px" width="20px" style={{ marginLeft: "2px"}} />
              Apply Leave
            </button>
          </div>
          {error && <p>{error}</p>}
          <table>
            <thead>
              <tr>
                {/* <th>Check box</th> */}
                <th>Leave Type</th>
                <th>Employee ID</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Reason</th>
                <th>Leave Approved By</th>
                <th>Leave Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}> 
                {/* <td><input type="checkbox" onClick={() => handleCheckboxClick(employee.id)} /></td> */}
                <td>{employee.leave_type}</td>
                  <td>{employee.employee_id}</td>
                  <td>{employee.start_date}</td>
                  <td>{employee.end_date}</td>
                  <td>{employee.lev_reason}</td>
                  <td>{employee.lev_approve}</td>
                  <td>{employee.lev_status}</td>
                  <td >
              {newrowId === employee.id ? (
                <button  style={{width:"30px"}}className='button-27'onClick={() => handleSave(employee.id)}>
               <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   <i className="fas fa-save"></i>
               </div>  </button>
              ) : (
                <button style={{width:"30px"}} className='button-27' onClick={() => handleEdit(employee.id, employee.lev_status)}>
               <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   <i className="fas fa-edit"></i>
               </div>  </button>
              )}
              <button style={{width:"30px"}} className='button-27'>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <i  className="fas fa-trash"></i>
</div>

              </button>
            </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaveinfo;








// import React, { useState, useEffect } from 'react';
// import './styles.css';
// import Sidebar from '../components/Sidebar';
// import plus from '../assets/plus.png';
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// const Leaveinfo = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [status, setStatus] = useState([]);
//   const [showForm, setShowForm] = useState(false); // State to control the visibility of the form
//   const [employee_id, setEmployeeID] = useState('');
//   const [start_date, setStart] = useState('');
//   const [end_date, setEnd] = useState('');
//   const [lev_reason, setLevReason] = useState('');
//   const [lev_approve, setLevApprove] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get('http://localhost:3018/landed');
//         setStatus(response.data);
//         alert("Data displayed");
//       } catch (error) {
//         console.error('Error fetching data:', error)
//         window.alert("Internal or network connection error");
//       }
//     };

//     fetchData();
//   }, []);

//   const send = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await Axios.post('http://localhost:3018/unland', {
//         employee_id,
//         start_date,
//         end_date,
//         lev_reason,
//         lev_approve,
//       });
//       if (response.data[0]) {
//         window.alert("Account created successfully");
//         navigate('/leaveinfo');
//       } else {
//         setStatus(response.data)
//         window.alert("Your account has already been created.");
//       }
//     } catch (error) {
//       console.error('Error creating account:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const Leave = () => {
//     setShowForm(true); // Show the form when "Apply leave" button is clicked
//   };

//   const handleSubmit = async (formData) => {
    
//     setShowForm(false); // Hide the form after submission
//   };

//   return (
//     <div className="app">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <div className="leave-requests">
//           <h2 className='test'>Leaves</h2>
//           <div className="leave-summary">
//             {/* Leave summary cards */}
//           </div>

//           <div className='set'>
//             <h2 className='test1'>All Leaves Requests</h2>
//             <button type="button" onClick={Leave} className="let">
//               <img src={plus} alt="null" height="20px" width="20px" style={{ marginRight: "8px" }} />
//               Apply leave
//             </button>
//           </div>

//           {showForm && (
//             <form onSubmit={send} className="leave-form">
//               <label htmlFor="employee-id">Employee ID</label>
//               <input type="text" placeholder="Enter your ID" value={employee_id} required onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />

//               <label htmlFor="start-date">Leave start date</label>
//               <input type="date" value={start_date} required onChange={(e) => setStart(e.target.value)} id="start-date" className="collect" />

//               <label htmlFor="end-date">Leave end date</label>
//               <input type="date" value={end_date} required onChange={(e) => setEnd(e.target.value)} id="end-date" className="collect" />

//               <label htmlFor="leave-reason">Leave Reason</label>
//               <input type="text" placeholder="Enter leave reason" value={lev_reason} required onChange={(e) => setLevReason(e.target.value)} id="leave-reason" className="collect" />

//               <label htmlFor="approver">Leave Approved by</label>
//               <input type="text" placeholder="Enter your leave approver name" value={lev_approve} required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect"/>
//               <button>Submit</button>
              
//               </form>)}
//               </div> 
//           <table>
//             <thead>
//               <tr>
//                 <th>Leave type</th>
//                 <th>Employee id</th>
//                 <th>From date</th>
//                 <th>To date</th>
//                 <th>Leave Reason</th>
//                 <th>Leave Approved By</th>
//                 <th>Leave Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {status && status.map((leave) => (
//                 <tr key={leave.id}>
//                   <td>Annual leave</td>
//                   <td>{leave.employee_id}</td>
//                   <td>{leave.start_date}</td>
//                   <td>{leave.end_date}</td>
//                   <td>{leave.lev_reason}</td>
//                   <td>{leave.lev_approve}</td>
//                   <td>{leave.lev_status}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
  
//   )
// }
// export default Leaveinfo;
