import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return <h2>Profile: {user.name}</h2>;
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
