import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Btn = ({ pathTo, label }) => (
  <Link to={pathTo}>
    <RaisedButton
      label={label}
      primary
    />
  </Link>
);

Btn.propTypes = {
  pathTo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Btn;
