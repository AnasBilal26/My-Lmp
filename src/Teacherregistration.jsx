/** @format */

// /** @format */

// /** @format */

import React from 'react';

const TeacherRegistration = () => {
  return (
    <div className="studentregistrationform">
      <p className="regisstration-form-text">REGISTRATION FORM</p>

      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first name"
        />
      </div>

      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first name"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first name"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">FirstName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first name"
        />
      </div>
      <div className="Gender-male-and-female">
        <p className="gender-text">Gender</p>
        <div className="Female-and-radio">
          <input className="for-female-checkbox" type="radio" />
          <p>Female</p>
        </div>
        <div className="male-and-radio">
          <input className="for-female-radio" type="radio" name="" id="" />
          <p>Male</p>
        </div>
      </div>
      <button className="studentregistration-sumbit-button">Sumbit</button>
    </div>
  );
};
export default TeacherRegistration;
