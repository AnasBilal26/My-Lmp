/** @format */

// /** @format */

import React from 'react';

const Syllabuslist = () => {
  return (
    <>
      <div className="forstudentlist">
        <p className="student-list">Syllabus List</p>
        <button className="Add-Button">Add</button>
      </div>
      <div className="id-firstname-lastname-email">
        <div className="forcheckbox-and-id">
          <input className="checkbox" type="checkbox" />
          <p>ID</p>
        </div>
        <div className="center-first-name-lastname-email">
          <p>Subject name</p>
          <p>Class</p>
          <p>Download</p>
        </div>
      </div>
    </>
  );
};
export default Syllabuslist;
