import React from 'react';
import PropTypes from 'prop-types';

const News = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <hr />
          </div>
        );
      })}

      <br />
      <p>Всего новостей {data.length}</p>
    </div>
  );
};

News.proptypes = {
  data: PropTypes.array.isRequired,
};

export default News;
