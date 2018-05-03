import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isRedirect: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.logIn(
      {
        username,
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
    const { username, password, isRedirect } = this.state;

    if (isRedirect) return <Redirect to={from} />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="Name"
            value={username}
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
          open={!!errMsg && !!username}
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
