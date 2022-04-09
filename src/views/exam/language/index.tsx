import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './../../../shared/error/error-boundary-route';
import { ClassArgs } from './class-args/class-args';
import ValueScopes from './value-scope/value-scope';

const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}/value-scope`} component={ValueScopes} />
        <ErrorBoundaryRoute path={`${match.url}/class-args`} component={ClassArgs} />
      </Switch>
    </>
  );
}

export default Routes;
