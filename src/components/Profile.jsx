import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  if (!user.data) return <span />;
  return (
    <div style={{ textAlign: 'left' }}>
      <p><b>Город: </b>{user.data.city}</p>
      <b>Знание языков:</b>
      <p>+ {user.data.languages[0]}</p>
      <p>+ {user.data.languages[1]}</p>
      <b>Ссылки:</b>
      {user.data.social.map(item => {
        return <p key={item.label}><i>+</i> <a href={item.link} target="blank"><img src={`/images/${item.label}.png`} alt={item.label}/></a></p>
      })}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    city: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })),
  }).isRequired,
};

export default Profile;
