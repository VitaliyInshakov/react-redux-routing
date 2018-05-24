import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as actions from '../actions/index';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.user.id);
  }

  render() {
    const { user, errMsg } = this.props;
    return (
      <div>
        {errMsg ? <h2>{errMsg}</h2> : <Profile user={user} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    errMsg: state.auth.errMsg,
  };
};

export default connect(mapStateToProps, actions)(ProfileContainer);
