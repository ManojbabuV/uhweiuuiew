// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import   Axios   from 'axios';
// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//    const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
  // const employees = [
  //   {
  //     image: 'https://images.pexels.com/photos/4243049/pexels-photo-4243049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     name: 'John Doe',
  //     role: 'Software Engineer',
  //     id: 'E123',
  //     joinDate: '2021-01-01',
  //     contract: '4 years',
  //     status: 'active',
  //     priority: 'high',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6804099/pexels-photo-6804099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     name: 'Jane Smith',
  //     role: 'Project Manager',
  //     id: 'E124',
  //     joinDate: '2020-05-15',
  //     contract: '1.5 years',
  //     status: 'inactive',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6840497/pexels-photo-6840497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Anish ',
  //     role: 'UI/UX Designer',
  //     id: 'E125',
  //     joinDate: '2019-11-20',
  //     contract: '1 years',
  //     status: 'active',
  //     priority: 'low',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/8374251/pexels-photo-8374251.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Saran Kumar',
  //     role: 'Web Designer',
  //     id: 'E129',
  //     joinDate: '2019-11-20',
  //     contract: '1 years',
  //     status: 'active',
  //     priority: 'low',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6694925/pexels-photo-6694925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Sridhar',
  //     role: 'Finacle Developer',
  //     id: 'E1230',
  //     joinDate: '2019-11-20',
  //     contract: '2 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name: 'Manikandan',
  //     role: 'IOS Developer',
  //     id: 'E131',
  //     joinDate: '2019-11-20',
  //     contract: '2.5 years',
  //     status: 'active',
  //     priority: 'high',
  //   },
  //   {
  //     image: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1128353037.1715929668&semt=ais_user',
  //     name: 'Alice Johnson',
  //     role: 'React Developer',
  //     id: 'E132',
  //     joinDate: '2023-10-10',
  //     contract: '3 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://img.freepik.com/free-photo/close-up-portrait-stylish-bearded-man-with-hairstyle-listening-music-headphones-isolated-gray-background_613910-19967.jpg?w=996&t=st=1716462692~exp=1716463292~hmac=60fd179c04501ee0976b459d608a381aa32fca4d43097fc1c700b7c41be81528',
  //     name: 'Sunil raj',
  //     role: 'JS Developer',
  //     id: 'E133',
  //     joinDate: '2023-10-10',
  //     contract: '3.5 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  // ];

  // const handleSearch = (filters) => {
  //   setFilters(filters);
  // };

  // const filteredEmployees = employees.filter((employee) => {
  //   return (
  //     (filters.searchTerm === '' || employee.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
  //     (filters.status === '' || employee.status === filters.status) &&
  //     (filters.priority === '' || employee.priority === filters.priority)
  //   );
  // });
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
//     <div style={{ backgroundColor: 'white',   }}>
//       <ParentComponent onSearch={handleSearch} />
//       <div className="employee-list">
//         {filteredEmployees.map((employee, index) => (
//           <EmployeeCard key={index} employee={employee} />
//         ))}
//       </div>
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Employee Name</th>
      //       <th>Position</th>
      //       <th>Join date</th>
      //       <th>Work mail</th>
      //       <th>Mobile</th>
      //       <th>Location</th> 
      //       <th>Hired by Manager</th> 
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {details.map((employee) => (
      //       <tr key={employee.id}>  
      //         <td>{employee.employee_name}</td>
      //         <td>{employee.designation}</td>
      //         <td>{employee.startjoin}</td>
      //         <td>{employee.work_email}</td>
      //         <td>{employee.mobile}</td>
      //         <td>{employee.permanent}</td>
      //         <td>{employee.reporting}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import Axios from 'axios';

 
// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false); // New state variable

  // const employees = [
  //   {
  //     image: 'https://images.pexels.com/photos/4243049/pexels-photo-4243049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     name: 'John Doe',
  //     role: 'Software Engineer',
  //     id: 'E123',
  //     joinDate: '2021-01-01',
  //     contract: '4 years',
  //     status: 'active',
  //     priority: 'high',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6804099/pexels-photo-6804099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     name: 'Jane Smith',
  //     role: 'Project Manager',
  //     id: 'E124',
  //     joinDate: '2020-05-15',
  //     contract: '1.5 years',
  //     status: 'inactive',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6840497/pexels-photo-6840497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Anish ',
  //     role: 'UI/UX Designer',
  //     id: 'E125',
  //     joinDate: '2019-11-20',
  //     contract: '1 years',
  //     status: 'active',
  //     priority: 'low',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/8374251/pexels-photo-8374251.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Saran Kumar',
  //     role: 'Web Designer',
  //     id: 'E129',
  //     joinDate: '2019-11-20',
  //     contract: '1 years',
  //     status: 'active',
  //     priority: 'low',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6694925/pexels-photo-6694925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     name: 'Sridhar',
  //     role: 'Finacle Developer',
  //     id: 'E1230',
  //     joinDate: '2019-11-20',
  //     contract: '2 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name: 'Manikandan',
  //     role: 'IOS Developer',
  //     id: 'E131',
  //     joinDate: '2019-11-20',
  //     contract: '2.5 years',
  //     status: 'active',
  //     priority: 'high',
  //   },
  //   {
  //     image: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1128353037.1715929668&semt=ais_user',
  //     name: 'Alice Johnson',
  //     role: 'React Developer',
  //     id: 'E132',
  //     joinDate: '2023-10-10',
  //     contract: '3 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  //   {
  //     image: 'https://img.freepik.com/free-photo/close-up-portrait-stylish-bearded-man-with-hairstyle-listening-music-headphones-isolated-gray-background_613910-19967.jpg?w=996&t=st=1716462692~exp=1716463292~hmac=60fd179c04501ee0976b459d608a381aa32fca4d43097fc1c700b7c41be81528',
  //     name: 'Sunil raj',
  //     role: 'JS Developer',
  //     id: 'E133',
  //     joinDate: '2023-10-10',
  //     contract: '3.5 years',
  //     status: 'active',
  //     priority: 'medium',
  //   },
  // ];
  // const handleSearch = (filters) => {
  //   setFilters(filters);
  // };

  // const filteredEmployees = employees.filter((employee) => {
  //   return (
  //     (filters.searchTerm === '' || employee.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
  //     (filters.status === '' || employee.status === filters.status) &&
  //     (filters.priority === '' || employee.priority === filters.priority)
  //   );
  // });
//   const filterTable = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || employee.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });
  // const toggleDisplay = () => {
  //   setShowProfiles(!showProfiles);
  // };
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
//     <div style={{ backgroundColor: 'white' }}>
//       <ParentComponent onSearch={handleSearch} />
//       <button onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredEmployees.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Position</th>
//             <th>Join date</th>
//             <th>Work mail</th>
//             <th>Mobile</th>
//             <th>Location</th> 
//             <th>Hired by Manager</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {details.map((employee) => (
//             <tr key={employee.id}>  
//               <td>{employee.employee_name}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.startjoin}</td>
//               <td>{employee.work_email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.permanent}</td>
//               <td>{employee.reporting}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;




// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import Axios from 'axios';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false); 
//   const employees = [
//     {
//       image: 'https://images.pexels.com/photos/4243049/pexels-photo-4243049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       name: 'John Doe',
//       role: 'Software Engineer',
//       id: 'E123',
//       joinDate: '2021-01-01',
//       contract: '4 years',
//       status: 'active',
//       priority: 'high',
//     },
//        ];
//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };
//   const filteredEmployees = employees.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || employee.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });
 
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);  
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);
//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });
  
//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   };
 

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <ParentComponent onSearch={handleSearch} />
//       <button  style={{marginBottom:"20px"}}className="button-27"onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredEmployees.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Position</th>
//             <th>Employee ID</th>
//             <th>Join date</th>
//             <th>Work mail</th>
//             <th>Mobile</th>
//             <th>Location</th> 
//             <th>Hired by Manager</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDetails.map((employee) => (
//             <tr key={employee.id}>  
//               <td>{employee.employee_name}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.employee_id}</td>
//               <td>{employee.startjoin}</td>
//               <td>{employee.work_email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.permanent}</td>
//               <td>{employee.reporting}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;





import React, { useEffect, useState } from 'react';
import EmployeeCard from './employeecard';
import './employeel.css';
import ParentComponent from './parentsearch';
import Axios from 'axios';

const EmployeeList = () => {
  const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
  const [error, setError] = useState();
  const [details, setDetails] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false); 

  const handleSearch = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await Axios.get('http://localhost:3015/setting');
        setDetails(response.data.details);  
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []);

  const filteredDetails = details.filter((employee) => {
    return (
      (filters.searchTerm === '' || employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (filters.status === '' || employee.status === filters.status) &&
      (filters.priority === '' || employee.priority === filters.priority)
    );
  });

  const toggleDisplay = () => {
    setShowProfiles(!showProfiles);
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <ParentComponent onSearch={handleSearch} />
      <button  style={{marginBottom:"20px"}}className="button-27"onClick={toggleDisplay}>
        {showProfiles ? 'Show Table' : 'Show Profiles'}
      </button>
      {showProfiles ? (
        <div className="employee-list">
          {filteredDetails.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </div>
      ) : (
        <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Employee ID</th>
            <th>Join date</th>
            <th>Work mail</th>
            <th>Mobile</th>
            <th>Location</th> 
            <th>Hired by Manager</th> 
          </tr>
        </thead>
        <tbody>
          {filteredDetails.map((employee) => (
            <tr key={employee.id}>  
              <td>{employee.employee_name}</td>
              <td>{employee.designation}</td>
              <td>{employee.employee_id}</td>
              <td>{employee.startjoin}</td>
              <td>{employee.work_email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.permanent}</td>
              <td>{employee.reporting}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default EmployeeList;
