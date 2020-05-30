import React from 'react';

import './experience.scss';


const Experience = () => {
  return (
    <div className="experience-container">
      <div>Experience</div>

      <div>Career</div>

      <div className="main">
        <div className="exp-left">
          <span>Company 1</span>
          <span>Date - Date</span>
        </div>
        <div className="exp-right">
          <span>Fulltime - Role</span>
          <span>Content from resume</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
