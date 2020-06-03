import React from 'react';
import ProfilePicture from 'assets/images/PrudhviRaj.jpg';

import './profile.scss';

const Profile = () => {
  return (
    <div className="content-center-page profile-page">
      <h1 className="profile-heading">Profile</h1>
      <p className="profile-overview secondary-color">
        I am a Senior Software Engineer
      </p>
      <div className="profile-description">
        <div className="profile-description-container">
          <div>
            <h2 className="profile-description-heading">About me</h2>
            <p className="secondary-color" style={{ marginRight: '10px' }}>
              5+ years experienced Senior Software Engineer with a demonstrated history
              of working in
              AI-based Startups
              Passionate, value-driven engineer with experience leading cross-functional
              teams to plan, build, launch
              and manage tech innovations.
              Blend technology skills with extensive Agile/Scrum experience, a marketing orientation
              and analytical abilities to evolve product strategy.
              Prioritize and manage multiple projects with minor scope changes during the
              iterations.
              Experienced in scaling applications from POC to production with minimal timelines.
            </p>
          </div>
          <div>
            <img
              src={ProfilePicture}
              alt="Prudhvi"
              width="246"
              height="246"
              style={{ borderRadius: '120px' }}
            />
          </div>
          <div>
            <h2 className="profile-description-heading">Details</h2>
            <div>
              <strong>Name:</strong>
            </div>
            <div className="secondary-color">
              Prudhvi Raj
            </div>

            <div>
              <strong>Age:</strong>
            </div>
            <div className="secondary-color">
              28 years
            </div>

            <div>
              <strong>Location:</strong>
            </div>
            <div className="secondary-color">
              Bengaluru, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
