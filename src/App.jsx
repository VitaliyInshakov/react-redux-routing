import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Btn from './components/Btn';
import Home from './components/Home';
import NewsContainer from './containers/NewsContainer';
import LoginContainer from './containers/LoginContainer';

const App = () => (
  <div>
    <header>
      <div>
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
        <Route path="/profile" component={requiredAuth(ProfileContainer)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default App;
