import React, {
  Suspense, useEffect,
} from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import MainLanding from 'containers/MainLanding';
import Loader from 'components/Material/Loader';

import 'material-components-web/dist/material-components-web.min.css';
import '../../global-styles.scss';


const App = () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setVh();

    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s - Prudhvi's Site"
        defaultTitle="Prudhvi's Site"
      >
        <title>Home</title>
      </Helmet>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" component={MainLanding} />
        </Switch>
      </Suspense>
    </>
  );
};


export default withRouter(App);
