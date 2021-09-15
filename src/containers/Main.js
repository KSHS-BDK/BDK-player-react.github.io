import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Home from './Home'
import Search from './Search';
import Library from './Library';
import Playlist from './Playlist';

import * as ROUTE from '../utils/routes';

function Main() {
  return (
    <Switch>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.SEARCH} component={Search} />
      <Route exact path={ROUTE.LIBRARY} component={Library} />
      <Route exact path={ROUTE.PLAYLIST} component={Playlist} />
      <Redirect from='/' to={ROUTE.HOME} />
    </Switch>
  );
}

export default withRouter(Main);