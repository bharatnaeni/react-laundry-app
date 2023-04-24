import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    phonenumber: "",
    email: "",
    showSubmitError: false,
    errorMsg: "",
    redirect: false,
    login: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeMobilenumber = (event) => {
    this.setState({ mobilenumber: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    this.setState({ redirect: true });
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "http://localhost:5000/login/";
    console.log(userDetails);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  onClickRigister = async () => {
    const { username, password, email, phonenumber } = this.state;
    const userDetails = { username, password, email, phonenumber };
    const url = "http://localhost:5000/users/";
    console.log(userDetails);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      this.setState({
        errorMsg: "User Created Sucessfully",
        showSubmitError: true,
        username: "",
        password: "",
        email: "",
        phonenumber: "",
      });
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  onSelectLogin = () => {
    this.setState({ login: true });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderMobilenumberField = () => {
    const { mobilenumber } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="mobilenumber">
          MOBILENUMBER
        </label>
        <input
          type="number"
          id="mobilenumber"
          className="username-input-field"
          value={mobilenumber}
          onChange={this.onChangeMobilenumber}
        />
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;

    return (
      <>
        <label htmlFor="email" className="input-label">
          EMAIL
        </label>
        <input
          className="username-input-field"
          id="email"
          type="email"
          value={email}
          onChange={this.onChangeEmail}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, login } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    {
      this.state.redirect && <Navigate to="/" replace={true} />;
    }
    if (jwtToken !== undefined) {
      return <Navigate to="/" />;
    }
    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dyflm6jfw/image/upload/v1682330196/laundry_zgshgb.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dyflm6jfw/image/upload/v1682331527/laundrry123_ceco4g.webp"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          {!login && (
            <>
              <div className="input-container">
                {this.renderMobilenumberField()}
              </div>
              <div className="input-container">{this.renderEmailField()}</div>
              <button className="login-button" onClick={this.onClickRigister}>
                Register
              </button>{" "}
            </>
          )}
          {login && (
            <button type="submit" className="login-button">
              Login
            </button>
          )}
          {!login && (
            <p className="login-text" onClick={this.onSelectLogin}>
              login?
            </p>
          )}
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
