import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/thankyou' component={ThankYou} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default withRouter(App);