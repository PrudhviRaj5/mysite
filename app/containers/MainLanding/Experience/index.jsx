import React from 'react';
import { Icon } from '@rmwc/icon';

import data from './data.json';
import './experience.scss';


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
          return (
            <div className="experience-description-container">
              <div>
                <h2 className="experience-description-heading skills-center">{item.company}</h2>
                <span className="experience-description-timeline skills-center secondary-color">
                  {`${item.fromDate} - ${item.toDate}`}
                </span>
              </div>
              <div>
                <h2 className="experience-description-heading skills-center">{item.designation}</h2>
                {item.content.length > 0 && item.content.map((innerContent) => {
                  return (
                    <div className="experience-description-content skills-center secondary-color">
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
                <span className="experience-description-links skills-center">
                  <span className="meta-info">
                    <Icon icon="location_on" className="location_icon" />
                    {item.location}
                    <span className="seperator">|</span>
                    <Icon icon="link" className="location_icon" />
                    <a className="website-link" href={item.website} rel="noreferrer" target="_blank">{item.website}</a>
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
