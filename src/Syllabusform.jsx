/** @format */

// /** @format */
// /** @format */

import React from 'react';

const Syllabusform = () => {
  return (
    <div className="studentregistrationform">
      <p className="regisstration-form-text">Subject Form</p>

      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first subjectname"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first class"
        />
      </div>
      <div className="sumbit-and-upload-button">
        <button className="studentregistration-sumbit-button">Sumbit</button>
        <button className="upload-button">Upload PDF</button>
      </div>
    </div>
  );
};
export default Syllabusform;
