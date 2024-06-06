// src/components/EmployeeOnboard.js
import React, { useState ,useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../employee/header';
import StatsCards from '../employee/status';
import EmployeeList from '../employee/employeelist';
import './emplo.css';

const EmployeeOnboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header />
        <div className="container">
          <StatsCards />
          <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default EmployeeOnboard;
