import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import cx from 'classnames';
import {
  withRouter,
} from 'react-router-dom';
import { Icon } from '@rmwc/icon';
import { CollapsibleList, ListItem } from '@rmwc/list';
import VanillaPaper from 'components/Material/Paper/VanillaPaper';

import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import '@rmwc/list/collapsible-list.css';
import './main-landing.scss';


const MainLanding = () => {
  const [refMap] = useState({
    profileRef: React.createRef(),
    experienceRef: React.createRef(),
    educationRef: React.createRef(),
    skillsRef: React.createRef(),
    projectsRef: React.createRef(),
    contactRef: React.createRef(),
    jumboRef: React.createRef(),
    foreRef: React.createRef(),
    backRef: React.createRef(),
  });

  const [bigNavFixed, setBigNavFixed] = useState(false);
  const [smallNavFixed, setSmallNavFixed] = useState(false);
  const [sectionHighlighted, setSectionHighlighted] = useState('Profile');
  const [smallNavOpen, setSmallNavOpen] = useState(false);
  const manualScroll = useRef(0);

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

  const scrollEvent = () => {
    if (refMap.profileRef.current.getBoundingClientRect().top <= 60) {
      if (!bigNavFixed) {
        setBigNavFixed(true);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!bigNavFixed) {
        setBigNavFixed(false);
      }
    }

    if (refMap.profileRef.current.getBoundingClientRect().top <= 50) {
      if (!smallNavFixed) {
        setSmallNavFixed(true);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!smallNavFixed) {
        setSmallNavFixed(false);
      }
    }

    if (!manualScroll.current) {
      const scrolledUpSections = navBarRenderData
        .filter((nav) => nav.ref.current.getBoundingClientRect().top <= 50);

      if (scrolledUpSections.length > 0) {
        setSectionHighlighted(scrolledUpSections[scrolledUpSections.length - 1].name);
      }
    }
  };

  function mouseEvent (e) {
    const wx = window.innerWidth;
    const wy = window.innerHeight;

    const xPos = e.pageX; // e.target.offsetLeft
    const yPos = e.pageY; // e.target.offsetTop

    const mouseXPercent = Math.round((xPos / wx) * 100);
    const mouseYPercent = Math.round((yPos / wy) * 100);

    const xVariance = 30;
    const yVariance = 20;
    const myX = -140 + xVariance * ((50 - mouseXPercent) / 100);
    const myY = -100 + yVariance * ((50 - mouseYPercent) / 100);
    refMap.foreRef.current.style.backgroundPositionX = `${myX}px`;
    refMap.foreRef.current.style.backgroundPositionY = `${myY}px`;

    const x2Variance = 3;
    const y2Variance = 2;
    const myX2 = -140 + x2Variance * ((50 - mouseXPercent) / 100);
    const myY2 = -100 + y2Variance * ((50 - mouseYPercent) / 100);
    refMap.backRef.current.style.backgroundPositionX = `${myX2}px`;
    refMap.backRef.current.style.backgroundPositionY = `${myY2}px`;
  }

  function motion(event) {
    const ag = event.accelerationIncludingGravity;

    const myX = -170 - (ag.x);
    const myX2 = -100 - (ag.x / 4);
    refMap.foreRef.current.style.backgroundPositionX = `${myX}px`;
    refMap.backRef.current.style.backgroundPositionY = `${myX2}px`;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    refMap.jumboRef.current.addEventListener('mousemove', mouseEvent);
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', motion);
    }

    return () => {
      window.removeEventListener('scroll', scrollEvent);
      refMap.jumboRef.current.removeEventListener('mousemove', mouseEvent);
      if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', motion);
      }
    };
  }, []);

  return (
    <div className="main__frame">

      <div className="main__jumbotron" ref={refMap.jumboRef}>
        <div className="jumbo_container">
          <h1>Prudhvi Raj</h1>
          <p className="lead">Engineering Manager</p>
        </div>
        <div className="overlay_dummy" />
        <div className="overlay background" ref={refMap.backRef} />
        <div className="overlay foreground" ref={refMap.foreRef} />
        <VanillaPaper
          className="jumbo_arrow"
          onClick={() => window.scrollTo({
            top: refMap.profileRef.current.offsetTop,
            behavior: 'smooth',
          })}
        >
          <Icon icon="keyboard_arrow_down" className="jumbo_arrow_icon" />
        </VanillaPaper>
      </div>

      <nav
        className={cx('main__nav--big', {
          '--fixed': bigNavFixed,
        })}
      >
        {
          navBarRenderData.map((section) => (
            <VanillaPaper
              className={cx('nav_button', {
                '--focused': sectionHighlighted === section.name,
              })}
              elevationIn={4}
              elevationOut={4}
              onClick={() => {
                manualScroll.current = 1;
                window.scrollTo({
                  top: section.ref.current.offsetTop,
                  behavior: 'smooth',
                });
                setSectionHighlighted(section.name);
                setTimeout(() => { manualScroll.current = 0; }, 1500);
              }}
            >
              {section.name}
            </VanillaPaper>
          ))
        }
      </nav>

      <nav
        className={cx('main__nav--small', {
          '--fixed': smallNavFixed,
        })}
      >
        <CollapsibleList
          handle={(
            <Icon
              icon="menu"
              onClick={() => setSmallNavOpen(!smallNavOpen)}
            />
          )}
          open={smallNavOpen}
        >
          {
            navBarRenderData.map((section) => (
              <ListItem
                className={cx('nav_button', {
                  '--focused': sectionHighlighted === section.name,
                })}
                onClick={() => {
                  manualScroll.current = 1;
                  window.scrollTo({
                    top: section.ref.current.offsetTop - 50,
                    behavior: 'smooth',
                  });
                  setSectionHighlighted(section.name);
                  setTimeout(() => { manualScroll.current = 0; }, 1500);
                  setSmallNavOpen(false);
                }}
              >
                <span>{section.name}</span>
              </ListItem>
            ))
          }
        </CollapsibleList>
      </nav>

      {/* For small navbar snapping */}
      <div
        className="small-nav-snap-fix"
        style={{ height: smallNavFixed ? '50px' : '0px' }}
      />

      <div ref={refMap.profileRef}>
        <Profile />
      </div>

      <div style={{ height: '400px' }} ref={refMap.experienceRef}>
        <Experience />
      </div>

      <div style={{ height: '400px' }} ref={refMap.educationRef}>
        <Education />
      </div>

      <div ref={refMap.skillsRef}>
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
