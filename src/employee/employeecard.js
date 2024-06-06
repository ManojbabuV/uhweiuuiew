// import React, { useState ,useEffect} from 'react'; 
// import './employee.css'; 
// import   Axios   from 'axios';


// const EmployeeCard = ({ employee }) => {
//   const [showDetails, setShowDetails] = useState(false); 
//   const [details, setDetails] = useState([]);
//   const [error, setError] = useState()
//   const handleDetailsClick = () => {
//     setShowDetails(!showDetails);
//   };
  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     try {
  //       const response = await Axios.get('http://localhost:3015/setting');
  //       setDetails(response.data.details);  
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError('Error fetching data. Please try again later.');
  //     }
  //   };
  //   fetchRecords();
  // }, []);
//   return (
//     <div className="employee-card">
//       <img src={employee.image} alt={employee.name} className="profile-image" />
    
      // <h3>{details.map((emplo)=>(
      //   <div key = {emplo.id}>
      //     <p>{emplo.employee_name}</p>
      //     </div>
      // ))}</h3>
      // <p>{details.map((emplo)=>(
      //   <div key = {emplo.id}>
      //     <p>Role:{emplo.designation}</p>
      //     </div>
      // ))}</p>
      // <p> {details.map((emplo)=>(
      //   <div key = {emplo.id}>
      //     <p>ID:{emplo.employee_id}</p>
      //     </div>
      // ))}</p>
      // <p> {details.map((emplo)=>(
      //   <div key = {emplo.id}>
      //     <p>Join Date:{emplo.startjoin}</p>
      //     </div>
      // ))}</p>
      // <p>Contract:  {employee.contract}</p>
//       <div className="buttons"> 
//       <button   style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href="tel:+918940513367">Call </a></button>
//         <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
//         <button
//           style={{ backgroundColor: 'black', color: 'white' }}
//           onClick={handleDetailsClick}
//         >  Details
//         </button>
//       </div> 
//       {showDetails && (
//         <div className="overlay" style={{backgroundColor:"white"}}>
//           <div className="details-form"> 
//             <p>Employee Details Form</p>
//             <input type="text" placeholder="Name" />
//             <input type="text" placeholder="Email" />
//             <button onClick={() => setShowDetails(true)}>Submit</button>
//           </div>  
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeCard;




// import React, { useState,useEffect } from 'react'; 
// import './employee.css'; 
// import axios from 'axios';

// const EmployeeCard = ({ details }) => { 
//   const [details, setDetails] = useState([]); 
//   const [error, setError] = useState([]);  
  
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);  
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);
//   return (
//     <div className="employee-card">
//       <img src={employee.image} alt={employee.name} className="profile-image" />
//       <h3>{employee.employee_name}</h3>
//       <h3>{details.map((emplo)=>(
//         <div key = {emplo.id}>
//           <p>{emplo.employee_name}</p>
//           </div>
//       ))}</h3>
//       <p>{details.map((emplo)=>(
//         <div key = {emplo.id}>
//           <p>Role:{emplo.designation}</p>
//           </div>
//       ))}</p>
//       <p> {details.map((emplo)=>(
//         <div key = {emplo.id}>
//           <p>ID:{emplo.employee_id}</p>
//           </div>
//       ))}</p>
//       <p> {details.map((emplo)=>(
//         <div key = {emplo.id}>
//           <p>Join Date:{emplo.startjoin}</p>
//           </div>
//       ))}</p>
       
//       <div className="buttons"> 
//         <button style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href={`tel:${employee.mobile}`}>Call </a></button>
//         <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
//         <button
//           style={{ backgroundColor: 'black', color: 'white' }}
//           onClick={handleDetailsClick}
//         >  Details
//         </button>
//       </div> 
//       {showDetails && (
//         <div className="overlay" style={{backgroundColor:"white"}}>
//           <div className="details-form"> 
//             <p>Employee Details Form</p>
//             <input type="text" placeholder="Name" />
//             <input type="text" placeholder="Email" />
//             <button onClick={() => setShowDetails(false)}>Submit</button>
//           </div>  
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeCard;


// import React, { useState, useEffect } from 'react'; 
// import './employee.css'; 
// import axios from 'axios';

// const EmployeeCard = () => { 
//   const [details, setDetails] = useState([]); 
//   const [error, setError] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
  
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);  
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   const handleDetailsClick = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     // <div className="employee-card">
//       <div>{details.map((employee) => (
//         <div key={employee.id}>
//           <img style={{marginTop:"40px",alignItems:"center"}}src="https://images.pexels.com/photos/6694925/pexels-photo-6694925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load " alt={employee.employee_name} className="profile-image" />
//           <h3>{employee.employee_name}</h3>
//           <p>Role: {employee.designation}</p>
//           <p>ID: {employee.employee_id}</p>
//           <p>Join Date: {employee.startjoin}</p>
//           <div className="buttons"> 
//             <button style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href={`tel:${employee.mobile}`}>Call </a></button>
//             <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
//             <button
//               style={{ backgroundColor: 'black', color: 'white' }}
//               onClick={handleDetailsClick}
//             >  Details
//             </button>
//           </div> 
//           {showDetails && (
//             <div className="overlay" style={{backgroundColor:"white"}}>
//               <div className="details-form"> 
//                 <p>Employee Details Form</p>
//                 <input type="text" placeholder="Name" />
//                 <input type="text" placeholder="Email" />
//                 <button onClick={() => setShowDetails(false)}>Submit</button>
//               </div>  
//             </div>
//           )}
//         </div>
//       ))}
//      </div>
//   );
// };

// export default EmployeeCard;





import React, { useState } from 'react'; 
import './employee.css'; 

const EmployeeCard = ({ employee }) => { 
  const [showDetails, setShowDetails] = useState(false);
  
  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="employee-card">
      <img style={{marginTop:"40px",alignItems:"center"}}src="https://images.pexels.com/photos/4243049/pexels-photo-4243049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={employee.employee_name} className="profile-image" />
      <h3>{employee.employee_name}</h3>
      <p>Role: {employee.designation}</p>
      <p>ID: {employee.employee_id}</p>
      <p>Join Date: {employee.startjoin}</p>
      <div className="buttons"> 
        <button style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href={`tel:${employee.mobile}`}>Call </a></button>
        <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
        <button
          style={{ backgroundColor: 'black', color: 'white' }}
          onClick={handleDetailsClick}
        >  Details
        </button>
      </div> 
      {showDetails && (
        <div className="overlay" style={{backgroundColor:"white"}}>
          <div className="details-form"> 
            <p>Employee Details Form</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <button onClick={() => setShowDetails(false)}>Submit</button>
          </div>  
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
