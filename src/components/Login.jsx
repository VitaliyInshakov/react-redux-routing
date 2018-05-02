import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    return (

    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
};

export default Login;
