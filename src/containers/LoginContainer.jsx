import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
  errMsg: state.auth.errMsg,
});

export default connect(mapStateToProps, actions)(Login);
