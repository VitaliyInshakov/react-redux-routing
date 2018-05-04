import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isRedirect: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.logIn(
      {
        email,
        password,
      },
      () => {
        this.setState({ isRedirect: true });
      },
    );
  }

  handleChange = (e) => {
    const { value } = e.currentTarget;
    const { fieldName } = e.currentTarget.dataset;

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  }

  render() {
    const { location, errMsg } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };
    const { email, password, isRedirect } = this.state;

    if (isRedirect) return <Redirect to={from} />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name="email"
            type="text"
            onChange={this.handleChange}
            placeholder="Email"
            value={email}
          />
          <input
            data-field-name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
            value={password}
          />
          <button type="submit">Log In</button>
        </form>
        <Snackbar
          open={!!errMsg && !!email}
          message={errMsg}
          autoHideDuration={4000}
        />
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
};

export default Login;
