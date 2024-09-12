/** @format */

// /** @format */

// import React, { useState } from 'react';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Signin = () => {
//   // State to manage the password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   // State to manage the button color
//   const [isChecked, setIsChecked] = useState(false);

//   // Function to toggle the password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // Function to handle checkbox change
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
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
//       <div className="righttwo">
//         <p className="login">SIGN UP</p>
//         <div className="foremailandfirstinput">
//           <p>First Name:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your first name"
//           />
//         </div>
//         <div className="foremailandfirstinput">
//           <p>Last Name:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your Last name"
//           />
//         </div>
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
//             type={showPassword ? 'text' : 'password'} // Conditional type based on state
//             placeholder="Enter your Password"
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton} // Change image based on state
//               alt=""
//             />
//           </div>
//         </div>

//         <button
//           className="signupbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//         >
//           Sign up
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup">Already have account?</p>
//       </div>
//     </div>
//   );
// };

// export default Signin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Signin = () => {
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
//     navigate('/login');
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
//       <div className="righttwo">
//         <p className="login">SIGN UP</p>
//         <div className="foremailandfirstinput">
//           <p>First Name:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your first name"
//           />
//         </div>
//         <div className="foremailandfirstinput">
//           <p>Last Name:</p>
//           <input
//             className="firstinpt"
//             type="text"
//             placeholder="Enter your Last name"
//           />
//         </div>
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
//             placeholder="Enter your Password"
//           />
//           <div className="eyeshowbutton" onClick={togglePasswordVisibility}>
//             <img
//               className="showwywbutton"
//               src={showPassword ? eyehidebutton : showeyebutton}
//               alt=""
//             />
//           </div>
//         </div>
//         <button
//           className="signupbutton"
//           style={{
//             backgroundColor: isChecked ? 'green' : '#e6ffe6',
//             color: isChecked ? 'white' : 'green',
//           }}
//         >
//           Sign up
//         </button>
//         <p className="orrr">Or</p>
//         <p className="signup" onClick={handleLoginClick}>
//           Already have an account?
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
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

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /.{6,}/; // Example: at least 6 characters

//     if (!firstName) newErrors.firstName = 'Required';
//     if (!lastName) newErrors.lastName = 'Required';
//     if (!email || !emailRegex.test(email)) newErrors.email = 'Invalid email';
//     if (!password || !passwordRegex.test(password))
//       newErrors.password = 'Invalid password';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Handle form submission
//       console.log('Form is valid. Proceed with submission.');
//     }
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
//       <div className="righttwo">
//         <p className="login">SIGN UP</p>
//         <form onSubmit={handleSubmit}>
//           <div className="foremailandfirstinput">
//             <p>First Name:</p>
//             <input
//               className={`firstinpt ${errors.firstName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your first name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Last Name:</p>
//             <input
//               className={`firstinpt ${errors.lastName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your Last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Email:</p>
//             <input
//               className={`firstinpt ${errors.email ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="forpasswordandsecondinput">
//             <p>Password:</p>
//             <input
//               className={`secondinput ${errors.password ? 'error' : ''}`}
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div
//               className="eyeshowbuttontwo"
//               onClick={togglePasswordVisibility}
//             >
//               <img
//                 className="showwywbutton"
//                 src={showPassword ? eyehidebutton : showeyebutton}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="forsignupbuttonorandalreadyhaveaccount">
//             <button
//               className="signupbutton"
//               type="submit"
//               style={{
//                 backgroundColor: isChecked ? 'green' : '#e6ffe6',
//                 color: isChecked ? 'white' : 'green',
//               }}
//             >
//               Sign up
//             </button>
//             <p className="orrr">Or</p>
//             <p className="signup" onClick={handleLoginClick}>
//               Already have an account?
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';

// const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
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

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const validate = () => {
//     const newErrors = {};
//     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // const passwordRegex = /.{6,}/; // Example: at least 6 characters
//     const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//     // Basic email validation: at least one character before and after '@' and at least one '.' after '@'

//     const passwordRegex = /^.{6,}$/;
//     // Basic password validation: at least 6 characters

//     if (!firstName) newErrors.firstName = 'Required';
//     if (!lastName) newErrors.lastName = 'Required';
//     if (!email || !emailRegex.test(email)) newErrors.email = 'Invalid email';
//     if (!password || !passwordRegex.test(password))
//       newErrors.password = 'Invalid password';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignUpClick = () => {
//     if (validate()) {
//       console.log('Form is valid. Proceed with submission.');
//       navigate('/login');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSignUpClick();
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
//       <div className="righttwo">
//         <p className="login">SIGN UP</p>
//         <form onSubmit={handleSubmit}>
//           <div className="foremailandfirstinput">
//             <p>First Name:</p>
//             <input
//               className={`firstinpt ${errors.firstName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your first name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Last Name:</p>
//             <input
//               className={`firstinpt ${errors.lastName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your Last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Email:</p>
//             <input
//               className={`firstinpt ${errors.email ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="forpasswordandsecondinput">
//             <p>Password:</p>
//             <input
//               className={`secondinput ${errors.password ? 'error' : ''}`}
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div
//               className="eyeshowbuttontwo"
//               onClick={togglePasswordVisibility}
//             >
//               <img
//                 className="showwywbutton"
//                 src={showPassword ? eyehidebutton : showeyebutton}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="forsignupbuttonorandalreadyhaveaccount">
//             <button
//               className="signupbutton"
//               type="button" // Change type to button to prevent form submission
//               onClick={handleSignUpClick}
//               style={{
//                 backgroundColor: isChecked ? 'green' : '#e6ffe6',
//                 color: isChecked ? 'white' : 'green',
//               }}
//             >
//               Sign up
//             </button>
//             <p className="orrr">Or</p>
//             <p className="signup" onClick={handleLoginClick}>
//               Already have an account?
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
// import leftdimage from '../src/leftdivimage.png';
// import showeyebutton from '../src/eyeunhideimage.png';
// import eyehidebutton from '../src/hideeyebutton.jpg';
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
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

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//     const passwordRegex = /^.{6,}$/;

//     if (!firstName) newErrors.firstName = 'Required';
//     if (!lastName) newErrors.lastName = 'Required';
//     if (!email || !emailRegex.test(email)) newErrors.email = 'Invalid email';
//     if (!password || !passwordRegex.test(password))
//       newErrors.password = 'Invalid password';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignUpClick = () => {
//     if (validate()) {
//       const user = { email, password };
//       localStorage.setItem('user', JSON.stringify(user));
//       console.log('User data stored:', user); // Debugging
//       navigate('/login');
//     }
//   };

//   var handleSubmit = (e) => {
//     e.preventDefault();
//     handleSignUpClick();
//   };
//   var handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       app.auth().createuserwithemailAndpassword(email, password);
//       console.log('account created');
//     } catch (err) {
//       console.log(err);
//     }
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
//       <div className="righttwo">
//         <p className="login">SIGN UP</p>
//         <form onSubmit={handleSubmit}>
//           <div className="foremailandfirstinput">
//             <p>First Name:</p>
//             <input
//               className={`firstinpt ${errors.firstName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your first name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Last Name:</p>
//             <input
//               className={`firstinpt ${errors.lastName ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your Last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="foremailandfirstinput">
//             <p>Email:</p>
//             <input
//               className={`firstinpt ${errors.email ? 'error' : ''}`}
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="forpasswordandsecondinput">
//             <p>Password:</p>
//             <input
//               className={`secondinput ${errors.password ? 'error' : ''}`}
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div
//               className="eyeshowbuttontwo"
//               onClick={togglePasswordVisibility}
//             >
//               <img
//                 className="showwywbutton"
//                 src={showPassword ? eyehidebutton : showeyebutton}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="forsignupbuttonorandalreadyhaveaccount">
//             <button
//               className="signupbutton"
//               type="button" // Change type to button to prevent form submission
//               onClick={handleSignUpClick}
//               style={{
//                 backgroundColor: isChecked ? 'green' : '#e6ffe6',
//                 color: isChecked ? 'white' : 'green',
//               }}
//             >
//               Sign up
//             </button>
//             <p className="orrr">Or</p>
//             <p className="signup" onClick={handleLoginClick}>
//               Already have an account?
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jawanpakistanlogo from '../src/jawanpakistanlogopic.jpg';
import leftdimage from '../src/leftdivimage.png';
import showeyebutton from '../src/eyeunhideimage.png';
import eyehidebutton from '../src/hideeyebutton.jpg';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  const handleLoginClick = () => {
    navigate('/login');
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!firstName) newErrors.firstName = 'Required';
    if (!lastName) newErrors.lastName = 'Required';
    if (!email || !emailRegex.test(email)) newErrors.email = 'Invalid email';
    if (!password || !passwordRegex.test(password))
      newErrors.password = 'Invalid password';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpClick = async () => {
    if (validate()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Account created');
        navigate('/login');
      } catch (err) {
        console.error(err);
        alert('Error creating account: ' + err.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUpClick();
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
      <div className="righttwo">
        <p className="login">SIGN UP</p>
        <form onSubmit={handleSubmit}>
          <div className="foremailandfirstinput">
            <p>First Name:</p>
            <input
              className={`firstinpt ${errors.firstName ? 'error' : ''}`}
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="foremailandfirstinput">
            <p>Last Name:</p>
            <input
              className={`firstinpt ${errors.lastName ? 'error' : ''}`}
              type="text"
              placeholder="Enter your Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="eyeshowbuttontwo"
              onClick={togglePasswordVisibility}
            >
              <img
                className="showwywbutton"
                src={showPassword ? eyehidebutton : showeyebutton}
                alt=""
              />
            </div>
          </div>
          <div className="forsignupbuttonorandalreadyhaveaccount">
            <button
              className="signupbutton"
              type="submit" // Change type to submit to trigger form submission
              style={{
                backgroundColor: isChecked ? 'green' : '#e6ffe6',
                color: isChecked ? 'white' : 'green',
              }}
            >
              Sign up
            </button>
            <p className="orrr">Or</p>
            <p className="signup" onClick={handleLoginClick}>
              Already have an account?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
