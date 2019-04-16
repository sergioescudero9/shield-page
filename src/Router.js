import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = React.lazy(() => import('./containers/Home'));
const NoMatch = React.lazy(() => import('./containers'));

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default Router;
