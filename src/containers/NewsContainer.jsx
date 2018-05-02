import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from '../components/News';

class NewsContainer extends Component {
  render() {
    const { data } = this.props;

    return <News data={data} />
  }
}

const mapStateToProps = (state) => ({
  data: [],
});

export default connect(mapStateToProps, null)(NewsContainer);
