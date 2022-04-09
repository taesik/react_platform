import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './../../../shared/error/error-boundary-route';
import Test01 from './test01';
import Test02FireMethodParent from './test02-fire-method-parent';

const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}/test01`} component={Test01} />
        <ErrorBoundaryRoute path={`${match.url}/test02`} component={Test02FireMethodParent} />
      </Switch>
    </>
  );
}

export default Routes;
