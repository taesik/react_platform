import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from '../../shared/error/error-boundary-route';
import Language from './language';
import Test from './test';

const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        {/* <ErrorBoundaryRoute path={`${match.url}/charts`} component={Charts} /> */}
        <ErrorBoundaryRoute path={`${match.url}/language`} component={Language} />
        <ErrorBoundaryRoute path={`${match.url}/test`} component={Test} />
      </Switch>
    </>
  );
}

export default Routes;
