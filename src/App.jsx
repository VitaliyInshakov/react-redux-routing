import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { logOut } from './actions/index';
import Btn from './components/Btn';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NewsContainer from './containers/NewsContainer';
import LoginContainer from './containers/LoginContainer';
import RequiredAuth from './containers/RequiredAuth';
import ProfileContainer from './containers/ProfileContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="nav-bar">
            <Btn pathTo="/" label="Main" />
            <Btn pathTo="/profile" label="Profile" />
            <Btn pathTo="/news" label="News" />
            {this.props.authenticated
              ? <RaisedButton
                label="Log Out"
                primary
                onClick={this.props.logOut}
                />
              : <Btn pathTo="/login" label="Log In" />
            }
          </div>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={NewsContainer} />
            <Route path="/login" component={LoginContainer} />
            <RequiredAuth path="/profile" component={ProfileContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ authenticated: state.auth.user });

export default withRouter(connect(mapStateToProps, { logOut })(App));
