/** @format */
/** @format */

import React from 'react';

const Classlist = () => {
  return (
    <>
      <div className="forstudentlist">
        <p className="student-list">Class List</p>
        <button className="Add-Button">Add</button>
      </div>
      <div className="id-firstname-lastname-email">
        <div className="forcheckbox-and-id">
          <input className="checkbox" type="checkbox" />
          <p>ID</p>
        </div>
        <div className="center-first-name-lastname-email">
          <p>First name</p>
          <p>Last Name </p>
          <p>Father Name</p>
          <p>Email</p> <p>Class</p> <p>Group</p>
        </div>
      </div>
    </>
  );
};
export default Classlist;
