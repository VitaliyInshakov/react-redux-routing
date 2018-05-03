import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';

class ProfileContainer extends Component {
  render() {
    const { user } = this.props;
    return <Profile user={user} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(ProfileContainer);
