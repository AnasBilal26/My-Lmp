/** @format */

// /** @format */

// // /** @format */

// // // /** @format */

// // // import React from 'react';
// // // import nevbarleftimage from '../src/navbarleftimage.jpg';
// // // const Dashboard = () => {
// // //   {
// // //     var forcircle = document.querySelector('.forcircle');
// // //     var forlogout = document.querySelector('.forlogout');

// // //     var flagtwo = 0;
// // //     forcircle.addEventListener('click', function () {
// // //       if (flagtwo == 0) {
// // //         forlogout.style.display = 'block';
// // //         flagtwo = 1;
// // //       } else {
// // //         forlogout.style.display = 'none';
// // //         flagtwo = 0;
// // //       }
// // //     });
// // //   }

// // //   return (
// // //     <div className="Dashboardparent">
// // //       <div className="nevbar">
// // //         <div className="dashboardleft">
// // //           <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
// // //           <p>Learning Management System</p>
// // //         </div>

// // //         <div className="forcircle">
// // //           <p className="forA">A</p>

// // //           <div className="foropensetting">
// // //             <p>Open setting</p>
// // //           </div>
// // //           <div className="forlogout">
// // //             <p>Logout</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // /** @format */

// // // import React, { useState } from 'react';
// // // import nevbarleftimage from '../src/navbarleftimage.jpg';

// // // const Dashboard = () => {
// // //   const [isLogoutVisible, setIsLogoutVisible] = useState(false);

// // //   const handleCircleClick = () => {
// // //     setIsLogoutVisible((prev) => !prev);
// // //   };

// // //   return (
// // //     <div className="Dashboardparent">
// // //       <div className="nevbar">
// // //         <div className="dashboardleft">
// // //           <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
// // //           <p>Learning Management System</p>
// // //         </div>

// // //         <div className="forcircle" onClick={handleCircleClick}>
// // //           <p className="forA">A</p>

// // //           <div className="foropensetting">
// // //             <p>Open setting</p>
// // //           </div>

// // //           {isLogoutVisible && (
// // //             <div className="forlogout">
// // //               <p>Logout</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // // import React, { useState, useRef, useEffect } from 'react';
// // // import nevbarleftimage from '../src/navbarleftimage.jpg';

// // // const Dashboard = () => {
// // //   const [isLogoutVisible, setIsLogoutVisible] = useState(false);
// // //   const logoutRef = useRef(null);
// // //   const circleRef = useRef(null);

// // //   const handleCircleClick = (e) => {
// // //     e.stopPropagation(); // Prevent the click event from bubbling up to parent elements
// // //     setIsLogoutVisible((prev) => !prev);
// // //   };

// // //   const handleClickOutside = (e) => {
// // //     if (
// // //       logoutRef.current &&
// // //       !logoutRef.current.contains(e.target) &&
// // //       circleRef.current &&
// // //       !circleRef.current.contains(e.target)
// // //     ) {
// // //       setIsLogoutVisible(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="Dashboardparent">
// // //       <div className="nevbar">
// // //         <div className="dashboardleft">
// // //           <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
// // //           <p>Learning Management System</p>
// // //         </div>

// // //         <div className="forcircle" onClick={handleCircleClick} ref={circleRef}>
// // //           <p className="forA">A</p>

// // //           <div className="foropensetting">
// // //             <p>Open setting</p>
// // //           </div>

// // //           {isLogoutVisible && (
// // //             <div className="forlogout" ref={logoutRef}>
// // //               <p>Logout</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React, { useState, useRef, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import nevbarleftimage from '../src/navbarleftimage.jpg';

// // const Dashboard = () => {
// //   const [isLogoutVisible, setIsLogoutVisible] = useState(false);
// //   const logoutRef = useRef(null);
// //   const circleRef = useRef(null);
// //   const navigate = useNavigate(); // Initialize navigate function

// //   const handleCircleClick = (e) => {
// //     e.stopPropagation(); // Prevent the click event from bubbling up to parent elements
// //     setIsLogoutVisible((prev) => !prev);
// //   };

// //   const handleClickOutside = (e) => {
// //     if (
// //       logoutRef.current &&
// //       !logoutRef.current.contains(e.target) &&
// //       circleRef.current &&
// //       !circleRef.current.contains(e.target)
// //     ) {
// //       setIsLogoutVisible(false);
// //     }
// //   };

// //   const handleLogoutClick = () => {
// //     setIsLogoutVisible(false); // Hide the logout menu
// //     navigate('/login'); // Navigate to the login page
// //   };

// //   useEffect(() => {
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div className="Dashboardparent">
// //       <div className="nevbar">
// //         <div className="dashboardleft">
// //           <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
// //           <p>Learning Management System</p>
// //         </div>

// //         <div className="forcircle" onClick={handleCircleClick} ref={circleRef}>
// //           <p className="forA">A</p>

// //           <div className="foropensetting">
// //             <p>Open setting</p>
// //           </div>

// //           {isLogoutVisible && (
// //             <div className="forlogout" ref={logoutRef}>
// //               <p onClick={handleLogoutClick}>Logout</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import nevbarleftimage from '../src/navbarleftimage.jpg';
// import messageimage from '../src/messageiconimage-removebg-preview.png';
// import downarrowimage from '../src/downarroeimage-removebg-preview.png';
// import nevarrightimagforlist from '../src/nevbar right image for open list.jpg';
// const Dashboard = ({ logout }) => {
//   const [isLogoutVisible, setIsLogoutVisible] = useState(false);
//   const logoutRef = useRef(null);
//   const circleRef = useRef(null);
//   const navigate = useNavigate();

//   const handleCircleClick = (e) => {
//     e.stopPropagation(); // Prevent the click event from bubbling up to parent elements
//     setIsLogoutVisible((prev) => !prev);
//   };

//   const handleClickOutside = (e) => {
//     if (
//       logoutRef.current &&
//       !logoutRef.current.contains(e.target) &&
//       circleRef.current &&
//       !circleRef.current.contains(e.target)
//     ) {
//       setIsLogoutVisible(false);
//     }
//   };

//   const handleLogoutClick = () => {
//     setIsLogoutVisible(false); // Hide the logout menu
//     logout(); // Set user as logged out
//     navigate('/login'); // Navigate to the login page
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="Dashboardparent">
//       <div className="nevbar">
//         <div className="dashboardleft">
//           <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
//           <p>Learning Management System</p>
//         </div>
//         <div className="circleparent">
//           <div
//             className="forcircle"
//             onClick={handleCircleClick}
//             ref={circleRef}
//           >
//             <p className="forA">A</p>

//             <div className="foropensetting">
//               <p>Open setting</p>
//             </div>

//             {isLogoutVisible && (
//               <div className="forlogout" ref={logoutRef}>
//                 <p onClick={handleLogoutClick}>Logout</p>
//               </div>
//             )}
//           </div>
//           <img
//             className="nevbarrightimageforlist"
//             src={nevarrightimagforlist}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="forleftandparentdivsbelownevbr">
//         {/* <div className="leftlists">
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Students</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Student Registration</p>
//             <p className="studentlist">Student List</p>
//           </div>
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Teachers</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Teachers Registration</p>
//             <p className="studentlist">Teacher List</p>
//           </div>
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Subjects</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Subject Add</p>
//             <p className="studentlist">Subject List</p>
//           </div>
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Syllabus</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Syllabus form</p>
//             <p className="studentlist">Syllabus List</p>
//           </div>
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>School</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Student Registration</p>
//             <p className="studentlist">Teacher Registration</p>
//           </div>
//           <div className="forstydentsdata">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Class</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Class form</p>
//             <p className="studentlist">Class List</p>
//           </div>
//           <div className="forfeestucture">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Fees</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Fee structure</p>
//             <p className="studentlist">Fee Voucher</p>
//             <p className="studentlist">Fee Submission</p>
//           </div>
//           <div className="foradmission">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Admission</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Admission from</p>
//           </div>
//           <div className="forexams">
//             <div className="forstydentandmessageimageparenttttt">
//               <div className="forstydentandmessageimage">
//                 <img className="messageimage" src={messageimage} alt="" />
//                 <p>Exams</p>
//               </div>
//               <img className="downarrowimage" src={downarrowimage} alt="" />
//             </div>
//             <p className="studentregistration">Exmas Schedule</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import nevbarleftimage from '../src/navbarleftimage.jpg';
import messageimage from '../src/messageiconimage-removebg-preview.png';
import downarrowimage from '../src/downarroeimage-removebg-preview.png';
import nevarrightimagforlist from '../src/nevbar right image for open list.jpg';

import Studentregistration from './Studentregistration';
import TeacherRegistration from './Teacherregistration';
import SubjectAdd from './SubjectAdd';
import Syllabusform from './Syllabusform';
import Schoolstudentregistration from './Schoolstudentregistration';
import Schoolteacherregistration from './Schoolteacherregistration';

import Classform from './Classform';
import Feestructure from './Feestructure';
import Feesvoucher from './Feesvoucher';
import Feesubmission from './Feesubmission';
import Admissionform from './Admissionform';
import Examsschedule from './Examsschedule';

import Exmasresult from './Examsresult';
import Studentlist from './Studentlist';
import Teacherlist from './Teacherlist';
import Subjectlist from './Subject.list';
import Syllabuslist from './Syllabuslist';
import Classlist from './Classlist';
const Dashboard = ({ logout }) => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [isLeftListVisible, setIsLeftListVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Initialize the state
  const logoutRef = useRef(null);
  const circleRef = useRef(null);
  const navigate = useNavigate();

  const handleCircleClick = (e) => {
    e.stopPropagation();
    setIsLogoutVisible((prev) => !prev);
  };

  const handleRightImageClick = (e) => {
    e.stopPropagation();
    setIsLeftListVisible((prev) => !prev); // Toggle visibility
  };

  const handleClickOutside = (e) => {
    if (
      logoutRef.current &&
      !logoutRef.current.contains(e.target) &&
      circleRef.current &&
      !circleRef.current.contains(e.target)
    ) {
      setIsLogoutVisible(false);
    }

    if (
      !e.target.closest('.leftlists') &&
      !e.target.closest('.nevbarrightimageforlist') &&
      !e.target.closest('.Dashboardparent')
    ) {
      setIsLeftListVisible(false); // Hide the leftlists div if clicked outside
    }
  };

  const handleLogoutClick = () => {
    setIsLogoutVisible(false);
    logout();
    navigate('/login');
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // setIsLeftListVisible(false); // Hide the left list after selection
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="Dashboardparent" onClick={handleClickOutside}>
      <div className="nevbar">
        <div className="dashboardleft">
          <img className="nevbarleftimage" src={nevbarleftimage} alt="" />
          <p>Learning Management System</p>
        </div>
        <div className="circleparent">
          <div
            className="forcircle"
            onClick={handleCircleClick}
            ref={circleRef}
          >
            <p className="forA">A</p>

            <div className="foropensetting">
              <p>Open setting</p>
            </div>

            {isLogoutVisible && (
              <div className="forlogout" ref={logoutRef}>
                <p onClick={handleLogoutClick}>Logout</p>
              </div>
            )}
          </div>
          <img
            className="nevbarrightimageforlist"
            src={nevarrightimagforlist}
            alt=""
            onClick={handleRightImageClick}
          />
        </div>
      </div>
      <div className="forleftandparentdivsbelownevbr">
        <div
          className="leftlists"
          style={{ left: isLeftListVisible ? '0%' : '-220%' }}
        >
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Students</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('student')}
              className="studentregistration"
            >
              Student Registration
            </p>
            <p
              onClick={() => handleOptionClick('Studentlist')}
              className="studentlist"
            >
              Student List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Teachers</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Teacher')}
              className="studentregistration"
            >
              Teachers Registration
            </p>
            <p
              onClick={() => handleOptionClick('Teacherlist')}
              className="studentlist"
            >
              Teacher List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Subjects</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Subject')}
              className="studentregistration"
            >
              Subject Add
            </p>
            <p
              onClick={() => handleOptionClick('Subjectlist')}
              className="studentlist"
            >
              Subject List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Syllabus</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Syllabusform')}
              className="studentregistration"
            >
              Syllabus form
            </p>
            <p
              onClick={() => handleOptionClick('Syllabuslist')}
              className="studentlist"
            >
              Syllabus List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>School</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Schoolstudentregistration')}
              className="studentregistration"
            >
              Student Registration
            </p>
            <p
              onClick={() => handleOptionClick('Schoolteacherregistration')}
              className="studentlist"
            >
              Teacher Registration
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Class</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Classform')}
              className="studentregistration"
            >
              Class form
            </p>
            <p
              onClick={() => handleOptionClick('Classlist')}
              className="studentlist"
            >
              Class List
            </p>
          </div>
          <div className="forfeestucture">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Fees</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('feestructure')}
              className="studentregistration"
            >
              Fee structure
            </p>
            <p
              onClick={() => handleOptionClick('feesvoucher')}
              className="studentlist"
            >
              Fee Voucher
            </p>
            <p
              onClick={() => handleOptionClick('feesubmission')}
              className="studentlist"
            >
              Fee Submission
            </p>
          </div>
          <div className="foradmission">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Admission</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Admissionform')}
              className="studentregistration"
            >
              Admission from
            </p>
          </div>
          <div className="forexams">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Exams</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Examsschedule')}
              className="studentregistration"
            >
              Exmas Schedule
            </p>
            <p
              onClick={() => handleOptionClick('Examsresult')}
              className="studentregistration"
            >
              Exmas Result
            </p>
          </div>
        </div>
        <div className="leftlistsformobile">
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Students</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('student')}
              className="studentregistration"
            >
              Student Registration
            </p>
            <p
              onClick={() => handleOptionClick('Studentlist')}
              className="studentlist"
            >
              Student List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Teachers</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Teacher')}
              className="studentregistration"
            >
              Teachers Registration
            </p>
            <p
              onClick={() => handleOptionClick('Teacherlist')}
              className="studentlist"
            >
              Teacher List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Subjects</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Subject')}
              className="studentregistration"
            >
              Subject Add
            </p>
            <p
              onClick={() => handleOptionClick('Subjectlist')}
              className="studentlist"
            >
              Subject List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Syllabus</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Syllabusform')}
              className="studentregistration"
            >
              Syllabus form
            </p>
            <p
              onClick={() => handleOptionClick('Syllabuslist')}
              className="studentlist"
            >
              Syllabus List
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>School</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Schoolstudentregistration')}
              className="studentregistration"
            >
              Student Registration
            </p>
            <p
              onClick={() => handleOptionClick('Schoolteacherregistration')}
              className="studentlist"
            >
              Teacher Registration
            </p>
          </div>
          <div className="forstydentsdata">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Class</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Classform')}
              className="studentregistration"
            >
              Class form
            </p>
            <p
              onClick={() => handleOptionClick('Classlist')}
              className="studentlist"
            >
              Class List
            </p>
          </div>
          <div className="forfeestucture">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Fees</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('feestructure')}
              className="studentregistration"
            >
              Fee structure
            </p>
            <p
              onClick={() => handleOptionClick('feesvoucher')}
              className="studentlist"
            >
              Fee Voucher
            </p>
            <p
              onClick={() => handleOptionClick('feesubmission')}
              className="studentlist"
            >
              Fee Submission
            </p>
          </div>
          <div className="foradmission">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Admission</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Admissionform')}
              className="studentregistration"
            >
              Admission from
            </p>
          </div>
          <div className="forexams">
            <div className="forstydentandmessageimageparenttttt">
              <div className="forstydentandmessageimage">
                <img className="messageimage" src={messageimage} alt="" />
                <p>Exams</p>
              </div>
              <img className="downarrowimage" src={downarrowimage} alt="" />
            </div>
            <p
              onClick={() => handleOptionClick('Examsschedule')}
              className="studentregistration"
            >
              Exmas Schedule
            </p>
            <p
              onClick={() => handleOptionClick('Examsresult')}
              className="studentregistration"
            >
              Exmas Result
            </p>
          </div>
        </div>
        <div className="forrightworks">
          {selectedOption === 'student' && <Studentregistration />}
          {selectedOption === 'Teacher' && <TeacherRegistration />}
          {selectedOption === 'Subject' && <SubjectAdd />}

          {selectedOption === 'Syllabusform' && <Syllabusform />}
          {selectedOption === 'Schoolstudentregistration' && (
            <Schoolstudentregistration />
          )}
          {selectedOption === 'Schoolteacherregistration' && (
            <Schoolteacherregistration />
          )}
          {selectedOption === 'Classform' && <Classform />}
          {selectedOption === 'feestructure' && <Feestructure />}
          {selectedOption === 'feesvoucher' && <Feesvoucher />}
          {selectedOption === 'feesubmission' && <Feesubmission />}
          {selectedOption === 'Admissionform' && <Admissionform />}
          {selectedOption === 'Examsschedule' && <Examsschedule />}
          {selectedOption === 'Examsresult' && <Exmasresult />}
          {selectedOption === 'Studentlist' && <Studentlist />}
          {selectedOption === 'Teacherlist' && <Teacherlist />}
          {selectedOption === 'Subjectlist' && <Subjectlist />}
          {selectedOption === 'Syllabuslist' && <Syllabuslist />}
          {selectedOption === 'Classlist' && <Classlist />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
