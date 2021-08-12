import React from 'react';
import { Switch,Route, Redirect } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './components/Home';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import Job from './components/jobpage/Job';
import Explore from './components/explore/Explore';
import About from './components/about/About';
import Testimonial from './components/testimonial/Testimonial';
const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <Navebar />
        <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/jobs" component={Job} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/about" component={About} />
          <Route exact path="/testimonial" component={Testimonial} />
            <Redirect to="/" />
        </Switch>
        <Footer/>
      </div>
    </>
  );
}

export default App;

