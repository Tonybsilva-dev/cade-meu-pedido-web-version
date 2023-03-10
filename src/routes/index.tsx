import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

const Routes: React.FC = () => (

  <Switch>
    <Route exact path={'/'} component={Home} />
  </Switch>
);

export default Routes;
