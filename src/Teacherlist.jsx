/** @format */

/** @format */

import React from 'react';

const Teacherlist = () => {
  return (
    <>
      <div className="forstudentlist">
        <p className="student-list">Teacher List</p>
        <button className="Add-Button">Add</button>
      </div>
      <div className="id-firstname-lastname-email">
        <div className="forcheckbox-and-id">
          <input className="checkbox" type="checkbox" />
          <p>ID</p>
        </div>
        <div className="center-first-name-lastname-email">
          <p>First name</p>
          <p>Last name</p>
          <p>Email</p>
        </div>
      </div>
    </>
  );
};
export default Teacherlist;
