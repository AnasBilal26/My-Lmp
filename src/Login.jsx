/** @format */

// /** @format */

// // /** @format */

// // import React, { useState } from 'react';
// // import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// // import leftdimage from '../src/leftdivimage.png';
// // import showeyebutton from '../src/eyeunhideimage.png';
// // import eyehidebutton from '../src/hideeyebutton.jpg';

// // const Login = () => {
// //   // State to manage the password visibility
// //   const [showPassword, setShowPassword] = useState(false);

// //   // State to manage the button color
// //   const [isChecked, setIsChecked] = useState(false);

// //   // Function to toggle the password visibility
// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   // Function to handle checkbox change
// //   const handleCheckboxChange = () => {
// //     setIsChecked(!isChecked);
// //   };

// //   return (
// //     <div className="parent">
// //       <div className="left">
// //         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
// //         <p>
// //           WELCOME TO LEARNING
// //           <br />
// //           MANAGEMENT SYSTEM
// //         </p>
// //         <img className="leftdivimage" src={leftdimage} alt="" />
// //       </div>
// //       <div className="right">
// //         <p className="login">LOGIN</p>
// //         <div className="foremailandfirstinput">
// //           <p>Email:</p>
// //           <input
// //             className="firstinpt"
// //             type="text"
// //             placeholder="Enter your email"
// //           />
// //         </div>
// //         <div className="forpasswordandsecondinput">
// //           <p>Password:</p>
// //           <input
// //             className="secondinput"
// //             type={showPassword ? 'text' : 'password'} // Conditional type based on state
// //             placeholder="Enter your password"
// //           />
// //           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
// //             <img
// //               className="showwywbutton"
// //               src={showPassword ? eyehidebutton : showeyebutton} // Change image based on state
// //               alt=""
// //             />
// //           </div>
// //         </div>
// //         <div className="forcheckboxremembermeandclickhere">
// //           <div className="forcheckboxandremeberme">
// //             <input
// //               className="checkbox"
// //               type="checkbox"
// //               checked={isChecked}
// //               onChange={handleCheckboxChange}
// //             />
// //             <p className="rememberme">Remember me</p>
// //           </div>
// //           <p className="clickhere">Click here?</p>
// //         </div>
// //         <button
// //           className="loginbutton"
// //           style={{
// //             backgroundColor: isChecked ? 'green' : '#e6ffe6',
// //             color: isChecked ? 'white' : 'green',
// //           }}
// //         >
// //           Login
// //         </button>
// //         <p className="orrr">Or</p>
// //         <p className="signup">Sign up</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// // import leftdimage from '../src/leftdivimage.png';
// // import showeyebutton from '../src/eyeunhideimage.png';
// // import eyehidebutton from '../src/hideeyebutton.jpg';

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isChecked, setIsChecked] = useState(false);
// //   const navigate = useNavigate();

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const handleCheckboxChange = () => {
// //     setIsChecked(!isChecked);
// //   };

// //   const handleSignupClick = () => {
// //     navigate('/signin');
// //   };

// //   return (
// //     <div className="parent">
// //       <div className="left">
// //         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
// //         <p>
// //           WELCOME TO LEARNING
// //           <br />
// //           MANAGEMENT SYSTEM
// //         </p>
// //         <img className="leftdivimage" src={leftdimage} alt="" />
// //       </div>
// //       <div className="right">
// //         <p className="login">LOGIN</p>
// //         <div className="foremailandfirstinput">
// //           <p>Email:</p>
// //           <input
// //             className="firstinpt"
// //             type="text"
// //             placeholder="Enter your email"
// //           />
// //         </div>
// //         <div className="forpasswordandsecondinput">
// //           <p>Password:</p>
// //           <input
// //             className="secondinput"
// //             type={showPassword ? 'text' : 'password'}
// //             placeholder="Enter your password"
// //           />
// //           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
// //             <img
// //               className="showwywbutton"
// //               src={showPassword ? eyehidebutton : showeyebutton}
// //               alt=""
// //             />
// //           </div>
// //         </div>
// //         <div className="forcheckboxremembermeandclickhere">
// //           <div className="forcheckboxandremeberme">
// //             <input
// //               className="checkbox"
// //               type="checkbox"
// //               checked={isChecked}
// //               onChange={handleCheckboxChange}
// //             />
// //             <p className="rememberme">Remember me</p>
// //           </div>
// //           <p className="clickhere" onClick={handleSignupClick}>
// //             Click here?
// //           </p>
// //         </div>
// //         <button
// //           className="loginbutton"
// //           style={{
// //             backgroundColor: isChecked ? 'green' : '#e6ffe6',
// //             color: isChecked ? 'white' : 'green',
// //           }}
// //         >
// //           Login
// //         </button>
// //         <p className="orrr">Or</p>
// //         <p className="signup" onClick={handleSignupClick}>
// //           Sign up
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleLoginClick = () => {
//     // Add your authentication logic here
//     // If authentication is successful
//     navigate('/dashboard');
//   };

//   const handleSignupClick = () => {
//     navigate('/signin');
//   };

//   return (
//     <div className="parent">
//       <div className="left">
//         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
//         <p>
//           WELCOME TO LEARNING
//           <br />
//           MANAGEMENT SYSTEM
//         </p>
//         <img className="leftdivimage" src={leftdimage} alt="" />
//       </div>
//       <div className="right">
//         <p className="login">LOGIN</p>
//         <div className="foremailandfirstinput">
//           <p>Email:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="forpasswordandsecondinput">
//           <p>Password:</p>
//           <input
//             className="secondinput"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="forcheckboxremembermeandclickhere">
//           <div className="forcheckboxandremeberme">
//             <input
//               className="checkbox"
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <p className="rememberme">Remember me</p>
//           </div>
//           <p className="clickhere" onClick={handleSignupClick}>
//             Click here?
//           </p>
//         </div>
//         <button
//           className="loginbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//           onClick={handleLoginClick} // Navigate to Dashboard on login
//         >
//           Login
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleSignupClick}>
//           Sign up
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Login = ({ login }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleLoginClick = () => {
//     // Add your authentication logic here
//     // If authentication is successful
//     login(); // Set user as authenticated
//     navigate('/dashboard'); // Navigate to Dashboard
//   };

//   const handleSignupClick = () => {
//     navigate('/signin');
//   };

//   return (
//     <div className="parent">
//       <div className="left">
//         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
//         <p>
//           WELCOME TO LEARNING
//           <br />
//           MANAGEMENT SYSTEM
//         </p>
//         <img className="leftdivimage" src={leftdimage} alt="" />
//       </div>
//       <div className="right">
//         <p className="login">LOGIN</p>
//         <div className="foremailandfirstinput">
//           <p>Email:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="forpasswordandsecondinput">
//           <p>Password:</p>
//           <input
//             className="secondinput"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="forcheckboxremembermeandclickhere">
//           <div className="forcheckboxandremeberme">
//             <input
//               className="checkbox"
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <p className="rememberme">Remember me</p>
//           </div>
//           <p className="clickhere" onClick={handleSignupClick}>
//             Click here?
//           </p>
//         </div>
//         <button
//           className="loginbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//           onClick={handleLoginClick} // Navigate to Dashboard on login
//         >
//           Login
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleSignupClick}>
//           Sign up
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Login = ({ login }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleLoginClick = () => {
//     if (isChecked) {
//       // Add your authentication logic here
//       // If authentication is successful
//       login(); // Set user as authenticated
//       navigate('/dashboard'); // Navigate to Dashboard
//     } else {
//       alert('Please check the checkbox to proceed.'); // Feedback for not checked checkbox
//     }
//   };

//   const handleSignupClick = () => {
//     navigate('/signin');
//   };

//   return (
//     <div className="parent">
//       <div className="left">
//         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
//         <p>
//           WELCOME TO LEARNING
//           <br />
//           MANAGEMENT SYSTEM
//         </p>
//         <img className="leftdivimage" src={leftdimage} alt="" />
//       </div>
//       <div className="right">
//         <p className="login">LOGIN</p>
//         <div className="foremailandfirstinput">
//           <p>Email:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="forpasswordandsecondinput">
//           <p>Password:</p>
//           <input
//             className="secondinput"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="forcheckboxremembermeandclickhere">
//           <div className="forcheckboxandremeberme">
//             <input
//               className="checkbox"
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <p className="rememberme">Remember me</p>
//           </div>
//           <p className="clickhere" onClick={handleSignupClick}>
//             Click here?
//           </p>
//         </div>
//         <button
//           className="loginbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//           onClick={handleLoginClick} // Navigate to Dashboard on login if checkbox is checked
//         >
//           Login
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleSignupClick}>
//           Sign up
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Login = ({ login }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /.{6,}/; // Example: at least 6 characters

//     if (!email || !emailRegex.test(email)) newErrors.email = true;
//     if (!password || !passwordRegex.test(password)) newErrors.password = true;

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLoginClick = () => {
//     if (isChecked) {
//       if (validate()) {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (
//           storedUser &&
//           storedUser.email === email &&
//           storedUser.password === password
//         ) {
//           login(); // Set user as authenticated
//           navigate('/dashboard'); // Navigate to Dashboard
//         } else {
//           alert('Invalid email or password.'); // Feedback for incorrect credentials
//         }
//       }
//     } else {
//       alert('Please check the checkbox to proceed.'); // Feedback for not checked checkbox
//     }
//   };

//   const handleSignupClick = () => {
//     navigate('/signin');
//   };

//   return (
//     <div className="parent">
//       <div className="left">
//         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
//         <p>
//           WELCOME TO LEARNING
//           <br />
//           MANAGEMENT SYSTEM
//         </p>
//         <img className="leftdivimage" src={leftdimage} alt="" />
//       </div>
//       <div className="right">
//         <p className="login">LOGIN</p>
//         <div className="foremailandfirstinput">
//           <p>Email:</p>
//           <input
//             className={`firstinpt ${errors.email ? 'error' : ''}`}
//             type="text"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="forpasswordandsecondinput">
//           <p>Password:</p>
//           <input
//             className={`secondinput ${errors.password ? 'error' : ''}`}
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="forcheckboxremembermeandclickhere">
//           <div className="forcheckboxandremeberme">
//             <input
//               className="checkbox"
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <p className="rememberme">Remember me</p>
//           </div>
//           <p className="clickhere" onClick={handleSignupClick}>
//             Click here?
//           </p>
//         </div>
//         <button
//           className="loginbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//           onClick={handleLoginClick} // Navigate to Dashboard on login if checkbox is checked
//         >
//           Login
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleSignupClick}>
//           Sign up
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Login = ({ login }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /.{6,}/; // Example: at least 6 characters

//     if (!email || !emailRegex.test(email)) newErrors.email = true;
//     if (!password || !passwordRegex.test(password)) newErrors.password = true;

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLoginClick = () => {
//     if (isChecked) {
//       if (validate()) {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         console.log('Stored user data:', storedUser); // Debugging
//         if (
//           storedUser &&
//           storedUser.email === email &&
//           storedUser.password === password
//         ) {
//           login(); // Ensure this function is correctly implemented
//           navigate('/dashboard'); // Navigate to Dashboard
//         } else {
//           alert('Invalid email or password.'); // Feedback for incorrect credentials
//         }
//       }
//     } else {
//       alert('Please check the checkbox to proceed.'); // Feedback for not checked checkbox
//     }
//   };

//   const handleSignupClick = () => {
//     navigate('/signin');
//   };

//   return (
//     <div className="parent">
//       <div className="left">
//         <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
//         <p>
//           WELCOME TO LEARNING
//           <br />
//           MANAGEMENT SYSTEM
//         </p>
//         <img className="leftdivimage" src={leftdimage} alt="" />
//       </div>
//       <div className="right">
//         <p className="login">LOGIN</p>
//         <div className="foremailandfirstinput">
//           <p>Email:</p>
//           <input
//             className={`firstinpt ${errors.email ? 'error' : ''}`}
//             type="text"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="forpasswordandsecondinput">
//           <p>Password:</p>
//           <input
//             className={`secondinput ${errors.password ? 'error' : ''}`}
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="forcheckboxremembermeandclickhere">
//           <div className="forcheckboxandremeberme">
//             <input
//               className="checkbox"
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <p className="rememberme">Remember me</p>
//           </div>
//           <p className="clickhere" onClick={handleSignupClick}>
//             Click here?
//           </p>
//         </div>
//         <button
//           className="loginbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//           onClick={handleLoginClick} // Navigate to Dashboard on login if checkbox is checked
//         >
//           Login
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleSignupClick}>
//           Sign up
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
import leftdimage from '../src/leftdivimage.png';
import showeyebutton from '../src/eyeunhideimage.png';
import eyehidebutton from '../src/hideeyebutton.jpg';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{6,}/;

    if (!email || !emailRegex.test(email)) newErrors.email = true;
    if (!password || !passwordRegex.test(password)) newErrors.password = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginClick = async () => {
    if (isChecked) {
      if (validate()) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log('Logged in:', userCredential.user);
          login(); // Ensure this function is correctly implemented
          navigate('/dashboard'); // Navigate to Dashboard
        } catch (err) {
          console.error(err);
          alert('Invalid email or password.'); // Feedback for incorrect credentials
        }
      }
    } else {
      alert('Please check the checkbox to proceed.'); // Feedback for not checked checkbox
    }
  };

  const handleSignupClick = () => {
    navigate('/signin');
  };

  return (
    <div className="parent">
      <div className="left">
        <img className="jawanpakistanlogopic" src={jawanpakistanlogo} alt="" />
        <p>
          WELCOME TO LEARNING
          <br />
          MANAGEMENT SYSTEM
        </p>
        <img className="leftdivimage" src={leftdimage} alt="" />
      </div>
      <div className="right">
        <p className="login">LOGIN</p>
        <div className="foremailandfirstinput">
          <p>Email:</p>
          <input
            className={`firstinpt ${errors.email ? 'error' : ''}`}
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="forpasswordandsecondinput">
          <p>Password:</p>
          <input
            className={`secondinput ${errors.password ? 'error' : ''}`}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
            <img
              className="showwywbutton"
              src={showPassword ? eyehidebutton : showeyebutton}
              alt=""
            />
          </div>
        </div>
        <div className="forcheckboxremembermeandclickhere">
          <div className="forcheckboxandremeberme">
            <input
              className="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="rememberme">Remember me</p>
          </div>
          <p className="clickhere" onClick={handleSignupClick}>
            Click here?
          </p>
        </div>
        <button
          className="loginbutton"
          style={{
            backgroundColor: isChecked ? 'green' : '#e6ffe6',
            color: isChecked ? 'white' : 'green',
          }}
          onClick={handleLoginClick} // Navigate to Dashboard on login if checkbox is checked
        >
          Login
        </button>
        <p className="orrr">Or</p>
        <p className="signup" onClick={handleSignupClick}>
          Sign up
        </p>
      </div>
    </div>
  );
};

export default Login;
