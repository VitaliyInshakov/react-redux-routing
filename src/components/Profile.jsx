import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user, logOut }) => {
  return (
    <React.Fragment>
      <h2>Profile: {user.name}</h2>
      <button onClick={logOut}>Log Out</button>
    </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Profile;
