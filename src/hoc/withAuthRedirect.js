import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthRedirectComponent = Component => {
  const AuthRedirectComponent = props => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
  const authMapStateToProps = state => {
    return {
      isAuth: state.auth.isAuth
    };
  };
  const ConnectedRedirectComponent = connect(authMapStateToProps)(
    AuthRedirectComponent
  );
  return ConnectedRedirectComponent;
};
