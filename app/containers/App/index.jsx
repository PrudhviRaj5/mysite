import React, {
  Suspense,
} from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import MainLanding from 'containers/MainLanding';
import Loader from 'components/Material/Loader';

import 'material-components-web/dist/material-components-web.min.css';
import '../../global-styles.scss';


const App = () => {
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
