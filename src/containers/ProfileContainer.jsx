import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as actions from '../actions/index';

class ProfileContainer extends Component {
  render() {
    const { user, logOut } = this.props;
    return <Profile user={user} logOut={logOut} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, actions)(ProfileContainer);
