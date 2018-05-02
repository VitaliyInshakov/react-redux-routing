import React from 'react';
import PropTypes from 'prop-types';

const News = ({ data }) => {
  return (
    <div>
      { data.length ? <p>Some news will be here</p> : <p>No news</p>}
    </div>
  );
};

News.propTypes = {
  data: PropTypes.array.isRequired,
};

export default News;
