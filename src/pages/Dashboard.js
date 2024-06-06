import React, {useState,useEffect}from 'react';
import GlobalStyle from '../component/GlobalStyle';
import Header from '../component/Header';
import QuickActions from '../component/QuickScan';
import DashboardContent from '../component/DashboardContent';
import Sidebar from '../components/Sidebar'
import Employee from '../component/employee';

function Dashboard()  {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(); 
  const toggleDashboard = () => {
    setIsAdmin(!isAdmin);
  }; 
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return ( 
    <div style={{ overflow: "hidden"}}>
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="App">
      <GlobalStyle />
      <Header />
      <button style={{borderColor:"black",color:"black",borderRadius:"20px",marginLeft:"20px"}} onClick={toggleDashboard}>
        {isAdmin ? 'Switch to Employee Dashboard' : 'Switch to Admin Dashboard'}
      </button> 
      {isAdmin ? <QuickActions /> : <Employee />} 
      <DashboardContent />
    </div>
      </div> 
    </div> 
  )
} 
export default Dashboard;
 