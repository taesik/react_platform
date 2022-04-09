import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from '../../shared/error/error-boundary-route';
import UserMgmt from './user/user-mgmt';



const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}/user/user-mgmt`} component={UserMgmt} />
      </Switch>
    </>
  );
}

export default Routes;
