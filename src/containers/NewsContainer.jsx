import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import * as actions from '../actions/index';

class NewsContainer extends Component {
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    const { news: { data, errMsg, isLoading } } = this.props;

    return (
      <React.Fragment>
        {errMsg && <p>{errMsg}</p>}
        {isLoading && <p>Loading...</p>}
        {data && data.length && <News data={data} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, actions)(NewsContainer);
