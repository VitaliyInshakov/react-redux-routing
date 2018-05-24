import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component {
  state = {
    email: '',
    password: '',
    showPopup: false,
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
        if (this.props.errMsg) {
          this.setState({ showPopup: true });
        } else {
          this.setState({ isRedirect: true });
        }
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

  handleRequestClose = () => {
    this.setState({
      password: '',
      showPopup: false,
    });
  };

  render() {
    const { location, errMsg, isLoading } = this.props;
    const { from } = location.state || { from: { pathname: '/profile' } };
    const { email, password, isRedirect, showPopup } = this.state;

    if (isRedirect) return <Redirect to={from} />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name="email"
            type="email"
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
          open={showPopup}
          message={errMsg}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
        {isLoading && <p>Loading...</p>}
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Login;
