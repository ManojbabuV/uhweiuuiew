 
import { BrowserRouter ,   Form,   Route, Routes } from "react-router-dom";
import React ,{useEffect,useState}from "react"; 
import './App.css' 
// import { Leaderboard } from "@mui/icons-material"; 
import Login from "./login.js";
import Sign from "./sign.js";
import Sidebar from "./components/Sidebar.jsx";
import  Dashboard  from "./pages/Dashboard.js"
import LeaveRequests from "./pages/Leaveinfo";
import Attendance from "./pages/Attendance.js";
import Leave from "./pages/Leave.js";
import Profile from "./pages/Profile.js";
import EmployeeOnboard from "./pages/Employee.js";
import From from "./employee/Newemployee.js";
import Timesheet from "./pages/Timesheet.js";
import Oraganization from "./pages/Organization.js";
import More from "./pages/more.js";
import AttendanceForm from "./pages/Attenform.js";
import EventMap from "./component/Event.js";
import EventForm from "./component/EventForm.js";
import   Chat   from "./component/gotoChat";
 
// import Attendance from "./pages/Attendance.jsx"; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => { 
    const storedValue = sessionStorage.getItem('isLoggedIn');
    return storedValue !== null ? JSON.parse(storedValue) : false; // Initialize as false
  }); 
  const handleLogin = () => { 
    sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
    setIsLoggedIn(true);
  }; 
  const handleLogout = () => { 
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(true);
  }; 
  useEffect(() => { 
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('isLoggedIn');
    }; 
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); 
  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/" && !isLoggedIn) {  
      sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);  
  function dec2hex (dec) {
   return dec.toString(16).padStart(2, "0")
 } 
 function generateId (len) {
   var arr = new Uint8Array((len || 40) / 2)
   window.crypto.getRandomValues(arr)
   return Array.from(arr, dec2hex).join('')
 } 
 console.log(generateId())  
 console.log(generateId(20))
  useEffect(() => { 
    const storedValue = sessionStorage.getItem('isLoggedIn');
    const isLoggedInFromStorage = storedValue !== JSON.parse(storedValue) ?  null : false; 
    if (!isLoggedInFromStorage && !isLoggedIn) {
      sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);     
  return (<div>
    <BrowserRouter> 
   <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      {isLoggedIn?(<> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/Event" element={<EventMap eventId={1}/>}/> 
        <Route path="/EventForm" element={<EventForm />}/> 
        <Route path="/gotoChat" element={<Chat />}/> 
        <Route path="/attendance" element={<Attendance/>}/> 
        <Route path="/Attenform" element={<AttendanceForm/>}/> 
        <Route path="/leaveinfo" element={<LeaveRequests/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/Employee" element={<EmployeeOnboard/>}/>
        <Route path="/Timesheet" element={<Timesheet/>}/>
        <Route path="/Organization" element={<Oraganization/>}/>
        <Route path="/more" element={<More/>}/>
        <Route path="/Newemployee" element={<From/>}/>
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/sidebar" element={<Sidebar/>}/> 
         </>
           ):(  <Route path="/login" element={<Login/>}/>)} 
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




