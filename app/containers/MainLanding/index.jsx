import React, {
  useEffect,
  useState,
} from 'react';
import cx from 'classnames';
import {
  withRouter,
} from 'react-router-dom';
import { Icon } from '@rmwc/icon';
import VanillaPaper from 'components/Material/Paper/VanillaPaper';

import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import './main-landing.scss';


const MainLanding = () => {
  const [refMap] = useState({
    profileRef: React.createRef(),
    experienceRef: React.createRef(),
    educationRef: React.createRef(),
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

  const navBarRenderData = [
    {
      name: 'Profile',
      ref: refMap.profileRef,
    },
    {
      name: 'Experience',
      ref: refMap.experienceRef,
    },
    {
      name: 'Education',
      ref: refMap.educationRef,
    },
    {
      name: 'Skills',
      ref: refMap.skillsRef,
    },
    {
      name: 'Projects',
      ref: refMap.projectsRef,
    }, {
      name: 'Contact',
      ref: refMap.contactRef,
    },
  ];

  return (
    <div className="main__frame">

      <div className="main__jumbotron">
        <div className="jumbo_container">
          <h1>Prudhvi Raj</h1>
          <p className="lead">Engineering Manager</p>
        </div>
        <div className="overlay" />
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
        {
          navBarRenderData.map((section) => (
            <VanillaPaper
              className="nav_button"
              onClick={() => window.scrollTo({
                top: section.ref.current.offsetTop,
                behavior: 'smooth',
              })}
            >
              {section.name}
            </VanillaPaper>
          ))
        }
      </nav>

      <div style={{ height: '400px' }} ref={refMap.profileRef}>
        <Profile />
      </div>

      <div style={{ height: '400px' }} ref={refMap.experienceRef}>
        <Experience />
      </div>

      <div style={{ height: '400px' }} ref={refMap.educationRef}>
        <Education />
      </div>

      <div style={{ height: '400px' }} ref={refMap.skillsRef}>
        <Skills />
      </div>

      <div style={{ height: '400px' }} ref={refMap.projectsRef}>
        <Projects />
      </div>

      <div ref={refMap.contactRef}>
        <Contact />
      </div>

      <div style={{ height: '300px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(MainLanding);
