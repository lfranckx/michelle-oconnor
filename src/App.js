import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';
import ComingSoon from './pages/ComingSoon';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet >
          <title>Michelle O'Connor</title>
          <meta name='description' content="Michelle O'Connor is a five-time NAHA-winning hairstylist, trailblazer, influencer, educator, Matrix global artistic director, and an emerging voice on diversity and inclusion within the beauty industry."/>
          <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
      </Helmet>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/thankyou' component={ThankYou} />
        <Route exact path='/comingsoon' component={ComingSoon} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default withRouter(App);