import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Btn from './components/Btn';

const App = () => (
  <div>
    <header>
      <div>
        <Btn pathTo="/" label="Main" />
      </div>
    </header>
  </div>
);

export default App;
