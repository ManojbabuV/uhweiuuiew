import React from 'react';
import styled from 'styled-components';
import { FaUserPlus, FaEnvelope, FaComments, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <FaUserPlus />, text: 'Add Users', path: '/Newemployee' },
  { icon: <FaEnvelope />, text: 'Send an Update', path: '/Leaveinfo' }, 
  { icon: <FaComments />, text: 'Go to Chat', path: '/gotoChat' },
  { icon: <FaCalendarAlt />, text: 'Create an Event', path: '/Event' },
  { icon: <FaFileAlt />, text: 'Create a Form', path: '/leave' },
];

const EmployeeQuickActions = () => {
  const navigate = useNavigate();

  const handleActionClick = (path) => {
    navigate(path);
  };
  return (
    <ActionsContainer>
      {actions.map((action, index) => (
           <ActionCard key={index} onClick={() => handleActionClick(action.path)}> 
          <ActionIcon>{action.icon}</ActionIcon>
          <ActionLabel>{action.text}</ActionLabel>
        </ActionCard>
      ))}
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100px;
  margin: 10px;
  background-color: #e6f1fc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ActionIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #4da6ff;
`;

const ActionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export default EmployeeQuickActions;
