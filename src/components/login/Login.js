import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer";
import { Input } from "../commons/FormControls";
import { required } from "../utils/validators";
import { Redirect } from "react-router-dom";
import "./Login.css";

const Login = props => {
  // debugger;
  const submit = value => {
    props.login(value);
  };

  if (props.isAuth) {
    // debugger;
    return <Redirect to="/profile" />;
  }

  return (
    <div className="login">
      <ReduxLoginForm onSubmit={submit} />
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
const LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="login__form">
      <div>
        <Field
          className="login__field"
          name="login"
          type="text"
          placeholder="login"
          component={Input}
          validate={[required]}
          autoFocus
        />
      </div>
      <div>
        <Field
          className="login__field"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="remember">
          <Field
            className="login__remember"
            name="remember"
            type="checkbox"
            component="input"
            id="remember"
          />{" "}
          Remember me
        </label>
      </div>
      <div>
        <button className="login__button" type="submit">
          Log in
        </button>
      </div>
      <div className="login__error">
        {props.error && (
          <span className="login__error-text">{props.error}</span>
        )}
      </div>
    </form>
  );
};
const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);
