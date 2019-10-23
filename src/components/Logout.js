import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="logout-container">
      <p>You have been logged out</p>
      <p>
        Click <Link to="/">here</Link> to log in again
      </p>
    </div>
  );
};

export default Logout;
