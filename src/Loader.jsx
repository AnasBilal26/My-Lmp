/** @format */

import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="loader">
        <div className="forloader"></div>
      </div>
    )
  );
};

export default Loader;
