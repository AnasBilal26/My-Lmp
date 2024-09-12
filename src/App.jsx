/** @format */

// /** @format */

// // /** @format */
// // import React from 'react';
// // import './App.css';
// // import Login from './Login';
// // import Signin from './Signin';
// // const App = () => {
// //   return (
// //     <>
// //       {' '}
// //       <Login />
// //       <Signin />
// //     </>
// //   );
// // };
// // export default App;
// // App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './Login';
// // import Signin from './Signin';
// // import './App.css';
// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signin" element={<Signin />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;
// // import React from 'react';
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// //   Navigate,
// // } from 'react-router-dom';
// // import Login from './Login';
// // import Signin from './Signin';
// // import Dashboard from './Dashboard';
// // import './App.css';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Redirect the base path "/" to "/login" */}
// //         <Route path="/" element={<Navigate to="/login" />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signin" element={<Signin />} />
// //       </Routes>
// //       <Dashboard />
// //     </Router>
// //   );
// // };

// // export default App;
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from 'react-router-dom';
// import Login from './Login';
// import Signin from './Signin';
// import Dashboard from './Dashboard';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Redirect the base path "/" to "/login" */}
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signin" element={<Signin />} />
//       </Routes>
//       <Dashboard />
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './Login';
import Signin from './Signin';
import Dashboard from './Dashboard';
import './App.css';
import Loader from './loader';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Loader />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login login={login} />
            )
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard logout={logout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
