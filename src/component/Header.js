// import React from 'react';
// import styled from 'styled-components';

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <SearchBar placeholder="Search here" />
//       <UserContainer>
//         <UserInfo>
//           <UserName>Oskar Frantti Glen</UserName>
//           <UserRole>Shift Technologies Admin</UserRole>
//         </UserInfo>
//         <UserAvatar src="https://via.placeholder.com/50" alt="User Avatar" />
//       </UserContainer>
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const SearchBar = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   width: 300px;
// `;

// const UserContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserInfo = styled.div`
//   margin-right: 10px;
//   text-align: right;
// `;

// const UserName = styled.div`
//   font-weight: bold;
// `;

// const UserRole = styled.div`
//   color: gray;
//   font-size: 14px;
// `;

// const UserAvatar = styled.img`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
// `;

// export default Header;



import React from 'react';
import styled from 'styled-components';

const Header = ({ onToggle }) => {
  return (
    <HeaderContainer>
      <SearchBar placeholder="Search here"  />
      <ButtonGroup>
        <ToggleButton onClick={onToggle}>Toggle Dashboard</ToggleButton>
        <UserContainer>
          <UserInfo>
            <UserName>Employee/Admin Profile</UserName>
            <UserRole>STACKPOS Technologies Admin</UserRole>
          </UserInfo>
          <UserAvatar src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1716358220~exp=1716361820~hmac=891c2eec04ad21fefd8763372e1b5e541649b86b1fc3720aaf904147b30092d3&w=740" alt="User Avatar" />
        </UserContainer>
      </ButtonGroup>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color:#fff;
  width: 300px; 
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: #107f8e;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #107f8e;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-right: 10px;
  text-align: right;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserRole = styled.div`
  color: gray;
  font-size: 14px;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export default Header;
