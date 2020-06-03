import React from 'react';
import { Icon } from '@rmwc/icon';

import data from './data.json';
import './skills.scss';

const Skills = () => {
  const totalStars = 5;

  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < totalStars; i += 1) {
      let starClass = 'skills-star-icon';
      let starIcon = 'star';
      if (rating > i) {
        starClass += ' filled';
        starIcon = rating - i === 0.5 ? 'star_half' : 'star';
      }

      stars.push(
        <Icon key={i} icon={starIcon} className={starClass} />,
      );
    }
    return stars;
  };


  return (
    <div className="content-center-page skills-page">
      <h1 className="skills-heading">Skills</h1>
      <p className="skills-overview secondary-color">
        &quot;Life without knowledge is death in disguise.&quot;
      </p>
      <div className="skills-description">
        <div className="skills-description-container">
          <div>
            <h2 className="skills-description-heading skills-center">Languages</h2>
            <ul className="skills-no-bullets skills-center">
              {data.languages.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                    <span className="skills-ability-score">
                      {getStars(item.score)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="skills-description-container">
          <div>
            <h2 className="skills-description-heading skills-center">Frontend</h2>
            <ul className="skills-no-bullets">
              {data.frontend.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                    <span className="skills-ability-score">
                      {getStars(item.score)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="skills-description-heading skills-center">Backend</h2>
            <ul className="skills-no-bullets">
              {data.backend.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                    <span className="skills-ability-score">
                      {getStars(item.score)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="skills-description-container">
          <div>
            <h2 className="skills-description-heading skills-center">Databases</h2>
            <ul className="skills-no-bullets">
              {data.databases.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                    <span className="skills-ability-score">
                      {getStars(item.score)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="skills-description-heading skills-center">Deployment</h2>
            <ul className="skills-no-bullets">
              {data.deployment.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                    <span className="skills-ability-score">
                      {getStars(item.score)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="skills-description-container">
          <div>
            <h2 className="skills-description-heading skills-center">Methodologies</h2>
            <ul className="skills-no-bullets skills-center skills-no-stars">
              {data.methodology.map((item) => {
                return (
                  <li>
                    <span className="skills-ability-title">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
