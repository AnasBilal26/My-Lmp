/** @format */

import React from 'react';

const Admissionform = () => {
  return (
    <div className="studentregistrationform">
      <p className="regisstration-form-text">ADMISSION FORM</p>

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
        <p className="student-registration-firstnametext">LastName:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your Last name"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">Email:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your first email "
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">PhoneNumber:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your Phone number"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">Date Of Birth:</p>
        <input
          className="date-of-birth-input"
          type="text"
          name=""
          id=""
          placeholder="MM/DD/YYYY"
        />
      </div>
      <div className="studentrigistrationforfirstnameandfirstinput">
        <p className="student-registration-firstnametext">Qualification:</p>
        <input
          className="student-registration"
          type="text"
          name=""
          id=""
          placeholder="Enter your qualification"
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
export default Admissionform;
