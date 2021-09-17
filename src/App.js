import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

export default withRouter(App);