// import React, { useState } from 'react';
// import './profile.css';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     firstName: 'Russel',
//     lastName: 'Sims',
//     email: 'russel@mycompany.com',
//     phoneNumber: '+1255 29345690',
//     position: 'iOS Developer',
//     role: 'Employee',
//     onboardingRequired: true,
//     onboardingStatus: 35,
//     onboardingScripts: {
//       officeTour: true,
//       managementIntro: false,
//       workTools: false,
//       meetColleagues: false,
//       dutiesJournal: false,
//       requestsHandling: false,
//       activityTracking: false,
//     },
//     team: {
//       hr: 'Kate Middleton',
//       manager: 'Kirk Mitrohin',
//       lead: 'Eugene Hummell',
//     },
//     profileImage: 'profile-pic-url',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleScriptChange = (script) => {
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       onboardingScripts: {
//         ...prevProfile.onboardingScripts,
//         [script]: !prevProfile.onboardingScripts[script],
//       },
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfile((prevProfile) => ({
//           ...prevProfile,
//           profileImage: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile">
//       <div className="profile-section">
//         <div className="profile-header">
//           <img src={profile.profileImage} alt="Profile" className="profile-image" />
//           <div className="profile-info">
//             <label>
//               Change Profile Image:
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//             </label>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 value={profile.firstName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastName"
//                 value={profile.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Phone Number:
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={profile.phoneNumber}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Position:
//               <input
//                 type="text"
//                 name="position"
//                 value={profile.position}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="profile-section">
//         <div className="profile-role">
//           <h3>Role</h3>
//           <select value={profile.role} onChange={handleChange} name="role">
//             <option value="Employee">Employee</option>
//             <option value="Manager">Manager</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div className="profile-team">
//           <h3>Team</h3>
//           <label>
//             HR:
//             <select value={profile.team.hr} onChange={handleChange} name="hr">
//               <option value="Kate Middleton">Kate Middleton</option>
//               <option value="John Doe">John Doe</option>
//             </select>
//           </label>
//           <label>
//             Manager:
//             <select value={profile.team.manager} onChange={handleChange} name="manager">
//               <option value="Kirk Mitrohin">Kirk Mitrohin</option>
//               <option value="Jane Smith">Jane Smith</option>
//             </select>
//           </label>
//           <label>
//             Lead:
//             <select value={profile.team.lead} onChange={handleChange} name="lead">
//               <option value="Eugene Hummell">Eugene Hummell</option>
//               <option value="Alice Brown">Alice Brown</option>
//             </select>
//           </label>
//         </div>
//       </div>

//       <div className="profile-section">
//         <div className="profile-onboarding">
//           <h3>Onboarding</h3>
//           <label>
//             Onboarding Required:
//             <input
//               type="checkbox"
//               checked={profile.onboardingRequired}
//               onChange={() =>
//                 setProfile((prevProfile) => ({
//                   ...prevProfile,
//                   onboardingRequired: !prevProfile.onboardingRequired,
//                 }))
//               }
//             />
//           </label>
//           <div className="onboarding-status">
//             <span>Current Status: {profile.onboardingStatus}%</span>
//             <progress value={profile.onboardingStatus} max="100" />
//           </div>
//           <div className="onboarding-scripts">
//             {Object.keys(profile.onboardingScripts).map((script) => (
//               <label key={script}>
//                 {script.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + script.replace(/([A-Z])/g, ' $1').slice(1)}:
//                 <input
//                   type="checkbox"
//                   checked={profile.onboardingScripts[script]}
//                   onChange={() => handleScriptChange(script)}
//                 />
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="profile-actions">
//         <button className="save-button">Save Changes</button>
//         <button className="cancel-button">Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;












import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-switch';
import Sidebar from '../components/Sidebar';

// Styled components
const Container = styled.div`
  padding: 10px;
  font-family: Arial, sans-serif;
  background: white; 
  transition: margin-left 0.3s ease;

  ${props => props.isSidebarOpen && css`
    margin-left: 245px; // Adjust according to your sidebar width
  `} 
  ${props => !props.isSidebarOpen && css`
    margin-left: 55px;
  `}
`; 
const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin:  0px ;
  background:#fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`; 
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left:89px;
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color:#f8f9fa;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`; 
const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  background-color:#f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
`; 
const Label = styled.label`
  margin: 8px 0 4px;
  display: block; 
  font-weight: bold;
`; 
const Button = styled.button`
  background-color: #107f8e;
  color: white;
  padding: 10px  5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 5px 0;
`; 
const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`; 
const Section = styled.div`
  flex: 1;
  min-width: 300px;
  margin:  0px  ;
  background:  #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`; 
const OnboardingProgress = styled.div`
  margin: 20px 0;
`; 
const Progress = styled.div`
  width: ${props => props.percentage}%;
     background-color:#107f8e;;
  height: 10px;
  border-radius: 5px;
`; 
const OnboardingItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`; 
const OnboardingToggle = styled(Switch)`
  margin-right: 10px;
`; 

const  Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'ManojBabu',
    lastName: 'UI/UX',
    email: 'manojbabu.v@Stackpos.com',
    phone: '+19 8940513367',
    position: 'UI/UX Developer',
    role: 'Admin',  
    team: 'Team A',
    manager: 'Kirk Mitrohin',
    lead: 'Eugene Hummell',
    onboarding: {
      status: 'Onboarding',
      progress: 35,
      scripts: {
        officeTour: true,
        managementIntro: false,
        workTools: true,
        meetColleagues: false,
        dutiesJournal: false,
        requestsHandling: false,
        activityTracking: false,
      }
    }
  });
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';
  
    return () => {
        document.body.style.backgroundColor = null;
    };
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const calculateProgress = (scripts) => {
    const totalScripts = Object.keys(scripts).length;
    const completedScripts = Object.values(scripts).filter(Boolean).length;
    return Math.round((completedScripts / totalScripts) * 100);
  };

  
    const handleOnboardingChange = (script, checked) => {
      const updatedScripts = {
        ...profile.onboarding.scripts,
        [script]: checked,
      };
    const newProgress = calculateProgress(updatedScripts);
    
    setProfile({
      ...profile,
      onboarding: {
        ...profile.onboarding,
        scripts: updatedScripts,
        progress: newProgress,
      }
    });
  }; 
  const handleSave = () => {
    // Save changes logic here
    alert('Changes saved!');
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{backgroundColor:"white"}}> 
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Container isSidebarOpen={isSidebarOpen}>
        <MainContent>
          <ProfileSection>
            <h1>{profile.firstName} {profile.lastName}</h1>
            <ProfileImage src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1716358220~exp=1716361820~hmac=891c2eec04ad21fefd8763372e1b5e541649b86b1fc3720aaf904147b30092d3&w=740" alt="Profile" />
            <Label>First Name</Label>
            <Input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />
            <Label>Last Name</Label>
            <Input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />
            <Label>Email</Label>
            <Input type="email" name="email" value={profile.email} onChange={handleInputChange} />
            <Label>Phone Number</Label>
            <Input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
            <Label>Position</Label>
            <Input type="text" name="position" value={profile.position} onChange={handleInputChange} />
            <Button onClick={handleSave}>Save Changes</Button>
            <Button>Cancel</Button>
          </ProfileSection>

          <Section>
            <Label>Role</Label>
            <Select name="role" value={profile.role} onChange={handleInputChange}>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Lead">Lead</option>
              <option value="Admin">Admin</option>
            </Select>
            <Label>Team</Label>
            <Select name="team" value={profile.team} onChange={handleInputChange}>
              <option value="Team A">Team A</option>
              <option value="Team B">Team B</option>
              <option value="Team C">Team C</option>
            </Select>
            <Label>Manager</Label>
            <Select name="manager" value={profile.manager} onChange={handleInputChange}>
              <option value="Kirk Mitrohin">Kirk Mitrohin</option>
              <option value="Sarah Johnson">Sarah Johnson</option>
              <option value="John Doe">John Doe</option>
            </Select>
            <Label>Lead</Label>
            <Select name="lead" value={profile.lead} onChange={handleInputChange}>
              <option value="Eugene Hummell">Eugene Hummell</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Robert Brown">Robert Brown</option>
            </Select>
          </Section>

          <Section>
            <OnboardingProgress>
               <h3 >Onboarding  </h3> 

              <Progress percentage={profile.onboarding.progress} />
              <p >{profile.onboarding.progress}%</p>
              {Object.keys(profile.onboarding.scripts).map((script) => (
                <OnboardingItem key={script}>
                  <OnboardingToggle
                    onChange={(checked) => handleOnboardingChange(script, checked)}
                    checked={profile.onboarding.scripts[script]}
                    disabled={profile.role !== 'Admin'}
                    offColor="#a7a7a7"
                    onColor="#107f8e"
                  />
                  {script.replace(/([A-Z])/g, ' $1').trim()}
                    <span style={{marginLeft:"55px"}}>{profile.onboarding.scripts[script] ? '100%' : '0%'}</span>
                </OnboardingItem>
              ))}
            </OnboardingProgress> 
          </Section>
        </MainContent>
      </Container>
    </div>
  );
}; 
export default Profile;
