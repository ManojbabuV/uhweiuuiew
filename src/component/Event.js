import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from './mockData';
import './Event.css';
import Sidebar from '../components/Sidebar';

const EventMap = ({ eventId }) => {
  const history = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const event = events.find((event) => event.id === eventId);

  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  if (!event) {
    return <div>Event not found.</div>;
  }

  const handleAddEventClick = () => {
    history('/EventForm');
  };

  return (
    <div className="event">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="event-details">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>
            <strong>Date:</strong> {event.date} <button style={{marginLeft:"450px"}} onClick={handleAddEventClick} className="button-27">Add Event</button>
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
        </div>
        <div className="attendees">
          <h3>Attendees</h3>
          <ul>
            {event.attendees.map((attendee) => (
              <li key={attendee.id} className="attendee">
                <p><strong>Name:</strong> {attendee.name}</p>
                <p><strong>Email:</strong> {attendee.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
