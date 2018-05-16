import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Btn from './components/Btn';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NewsContainer from './containers/NewsContainer';
import LoginContainer from './containers/LoginContainer';
import RequiredAuth from './containers/RequiredAuth';
import ProfileContainer from './containers/ProfileContainer';

const App = () => (
  <div className="container">
    <header>
      <div className="nav-bar">
        <Btn pathTo="/" label="Main" />
        <Btn pathTo="/profile" label="Profile" />
        <Btn pathTo="/news" label="News" />
        <Btn pathTo="/login" label="Log In" />
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

export default App;
