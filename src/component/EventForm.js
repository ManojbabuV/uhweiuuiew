// import React, { useState } from 'react';
// import './eventform.css';

// const EventForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     date: '',
//     time: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="event-form">
//       <h2>Add Event</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Event Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   );
// };

// export default EventForm;


// import React, { useEffect, useState } from 'react';
// import './eventform.css';
// import Sidebar from '../components/Sidebar';

// const EventForm = () => {
    
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     event: '',
//     description: '',
//     date: '',
//     time: '',
//     attending: false,
//   });
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//       <h2>Office Event Registration</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name" 
//           className='collect'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className='collect'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="event">Event:</label>
//         <select
//         className='collect'
//           id="event"
//           name="event"
//           value={formData.event}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select an event</option>
//           <option value="presentation">Presentation</option>
//           <option value="Project Success Meet">Project Success Meet</option>
//           <option value="New Joinee Meet">New Joinee Meet</option>
//           <option value="Done Right Event Designs">Done Right Event Designs</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="description">Event Description:</label>
//         <textarea
//           id="description"
//           name="description" 
//           className='collect'
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="date">Event Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date" className='collect'
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="time">Event Time:</label>
//         <input
//           type="time"
//           id="time" className='collect'
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="attending">
//           <input
//             type="checkbox"
//             id="attending" className='collect'
//             name="attending"
//             checked={formData.attending}
//             onChange={handleChange}
//           />
//           Will you be attending?
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//       </div>
//     </form>

//   );
// };

// export default EventForm;



import React, { useEffect, useState } from 'react';
import './eventform.css';
import Sidebar from '../components/Sidebar';

const EventForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    description: '',
    date: '',
    time: '',
    attending: false,
  });

  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form className="event-form" onSubmit={handleSubmit}>
          <h2>Office Event Registration</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your name'
              className="collect1"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your office email'
              className="collect1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="event">Event</label>
            <select
              id="event"
              name="event"
             
              className="collect1"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Select an event</option>
              <option value="presentation">Presentation</option>
              <option value="Project Success Meet">Project Success Meet</option>
              <option value="New Joinee Meet">New Joinee Meet</option>
              <option value="Done Right Event Designs">Done Right Event Designs</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Event Description</label>
            <textarea
              id="description"
              name="description"
              placeholder='Enter event description'
              className="collect1"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="collect1"
            placeholder='Enter event date'
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Event Time</label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder='Enter event time'
              className="collect1"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="attending">
              <input
                type="checkbox"
                id="attending"
                name="attending"
                className="collect"
                checked={formData.attending}
                onChange={handleChange}
              />
              Will you be attending?
            </label>
          </div> */}
          <button style={{backgroundColor:"#4c9faa",width:"120px",marginLeft:"145px"}} className='button-27'type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
