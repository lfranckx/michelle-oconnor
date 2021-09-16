import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import Home from './components/Home';

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default withRouter(App);