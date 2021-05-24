import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  LOGIN, REGISTER, FORGOT_PASSWORD, DASHBOARD, RESET_PASSWORD, VERIFY_TOKEN,
  LIST_CONTACTS, ADD_CONTACT, VIEW_CONTACT, EDIT_CONTACT,
} from './routeContants';
import { Login } from '../view/screen/frontend/auth/login';
import { Register } from '../view/screen/frontend/auth/register';
import { ForgotPassword } from '../view/screen/frontend/auth/forgotPassword';
import { ResetPassword } from '../view/screen/frontend/auth/resetPassword';
import { VerifyToken } from '../view/screen/frontend/auth/verifyToken';
import { AddContact } from '../view/screen/frontend/contacts/addContact';
import { ListContacts } from '../view/screen/frontend/contacts/listContacts';
import { ViewContact } from '../view/screen/frontend/contacts/viewContact';
import { isLoggedIn } from './authService';
/* import { Home } from '../view/screen/website/home'; */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: LOGIN,
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !isLoggedIn() || isLoggedIn() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: DASHBOARD,
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !isLoggedIn() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: DASHBOARD,
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

class AllRoutes extends React.Component {
  render() {
    return <Switch>
      <LoginRoute exact key="login" path={LOGIN} component={Login} />
      <PublicRoute exact path={REGISTER} component={Register} />
      <PublicRoute exact path={FORGOT_PASSWORD} component={ForgotPassword} />
      <PublicRoute exact path={RESET_PASSWORD} component={ResetPassword} />
      <PublicRoute exact path={VERIFY_TOKEN} component={VerifyToken} />
      <PrivateRoute exact key="add-contact" path={ADD_CONTACT} component={AddContact} />
      <PrivateRoute exact key="list-contact" path={LIST_CONTACTS} component={ListContacts} />
      <PrivateRoute exact key="view-contact" path={VIEW_CONTACT} component={ViewContact} />
      <PrivateRoute exact key="edit-contact" path={EDIT_CONTACT} component={AddContact} />
      <Redirect from="/*" to={LOGIN} />
    </Switch>
  }
}

export default AllRoutes;