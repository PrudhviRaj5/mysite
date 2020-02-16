import React, {
  useEffect,
  useState,
} from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  // Switch,
  // Route,
  // Link,
  // Redirect,
  withRouter,
} from 'react-router-dom';
import { Icon } from '@rmwc/icon';
import VanillaPaper from 'components/Material/Paper/VanillaPaper';

import Experience from './Experience';

import './main-landing.scss';


const MainLanding = () => {
  const [refMap] = useState({
    profileRef: React.createRef(),
    experienceRef: React.createRef(),
    skillsRef: React.createRef(),
    projectsRef: React.createRef(),
    contactRef: React.createRef(),
  });
  const [menuFixed, setMenuFixed] = useState(false);

  const scrollEvent = () => {
    if (refMap.profileRef.current.getBoundingClientRect().top <= 60) {
      if (!menuFixed) {
        setMenuFixed(true);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!menuFixed) {
        setMenuFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <div className="main__frame">

      <div className="main__jumbotron">
        <div className="jumbo_container">Container Text</div>
        <VanillaPaper
          className="jumbo_arrow"
          onClick={() => window.scrollTo({
            top: refMap.profileRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          <Icon icon="favorite" />
        </VanillaPaper>
      </div>

      <nav
        className={cx('main__nav--big', {
          '--fixed': menuFixed,
        })}
      >
        <VanillaPaper
          className="nav_button"
          onClick={() => window.scrollTo({
            top: refMap.profileRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          Profile
        </VanillaPaper>
        <VanillaPaper
          className="nav_button"
          type="button"
          onClick={() => window.scrollTo({
            top: refMap.experienceRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          Experience
        </VanillaPaper>
        <VanillaPaper
          className="nav_button"
          type="button"
          onClick={() => window.scrollTo({
            top: refMap.skillsRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          Skills
        </VanillaPaper>
        <VanillaPaper
          className="nav_button"
          type="button"
          onClick={() => window.scrollTo({
            top: refMap.projectsRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          Projects
        </VanillaPaper>
        <VanillaPaper
          className="nav_button"
          type="button"
          onClick={() => window.scrollTo({
            top: refMap.contactRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          Contact
        </VanillaPaper>
      </nav>

      <div style={{ height: '400px' }} ref={refMap.profileRef}>
        Profile
      </div>

      <div style={{ height: '400px' }} ref={refMap.experienceRef}>
        <Experience />
      </div>

      <div style={{ height: '400px' }} ref={refMap.skillsRef}>
        Skills
      </div>

      <div style={{ height: '400px' }} ref={refMap.projectsRef}>
        Projects
      </div>

      <div style={{ height: '400px' }} ref={refMap.contactRef}>
        Contact
      </div>
    </div>
  );
};

// TopNavLayout.propTypes = {
//   history: PropTypes.any.isRequired,
//   location: PropTypes.any.isRequired,
// };

export default withRouter(MainLanding);
