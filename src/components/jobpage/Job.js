import React from 'react';
import Contact from '../Contact';
import Subscribe from '../Subscribe';
import Jobsection from './Jobsection';
import Map from './Map';
import Search from './Search';

const Job = () => {

      return (
            <>
                  <Map />
                  <Search />
                  <Jobsection />
                  <Subscribe/>
                  <Contact/>
                  
            </>
      );
}

export default Job;