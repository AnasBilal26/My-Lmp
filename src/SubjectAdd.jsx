/** @format */

// /** @format */

// /** @format */
// /** @format */

import React from 'react';

const SubjectAdd = () => {
  return (
    <div className="studentregistrationform">
      <p className="regisstration-form-text">Subject Add</p>

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
      <div className="Gender-male-and-female">
        <p className="gender-text">Select Group</p>
        <div className="Female-and-radio">
          <input className="for-female-checkbox" type="radio" />
          <p>General Science</p>
        </div>
        <div className="male-and-radio">
          <input className="for-female-radio" type="radio" name="" id="" />
          <p>Pre-Engineering</p>
        </div>
      </div>
      <button className="studentregistration-sumbit-button">Sumbit</button>
    </div>
  );
};
export default SubjectAdd;
