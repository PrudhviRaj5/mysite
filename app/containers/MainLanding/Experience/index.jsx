/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Icon } from '@rmwc/icon';

import data from './data.json';
import './experience.scss';

// const logo = require('assets/images/qgraph.png').default;

const Experience = () => {
  console.log('data---', data);
  return (
    <div className="content-center-page experience-page">
      <h1 className="experience-heading">Experience</h1>
      <p className="experience-overview secondary-color">
        &quot;Life without knowledge is death in disguise.&quot;
      </p>
      <div className="experience-description">
        {data.length > 0 && data.map((item) => {
          const logo = require(`assets/images/${item.logo}`).default;
          return (
            <div className="experience-description-container">
              <div>
                <h2 className="experience-description-heading">
                  <img
                    src={logo}
                    alt={item.company}
                    width="150"
                    height="50"
                  />
                  <span className="experience-description-links experience-center">
                    <span className="meta-info">
                      <div>
                        <Icon icon="location_on" className="location_icon" />
                        {item.location}
                      </div>
                      <div className="experience-logo">
                        <Icon icon="link" className="location_icon" />
                        <a className="website-link" href={item.website} rel="noreferrer" target="_blank">{item.website}</a>
                      </div>
                    </span>
                  </span>
                </h2>
              </div>
              <div>
                <h2 className="experience-description-heading">
                  {item.designation}
                  <div className="experience-description-timeline secondary-color">
                    {`${item.fromDate} - ${item.toDate}`}
                  </div>
                </h2>
                {item.content.length > 0 && item.content.map((innerContent) => {
                  return (
                    <div className="experience-description-content secondary-color">
                      <div>{innerContent.overview}</div>
                      <ul>
                        {innerContent.bullets.length > 0 && innerContent.bullets.map((bullet) => {
                          return (
                            <li>
                              {bullet}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
