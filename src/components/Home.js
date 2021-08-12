import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Navebar from './Navebar';
import Subscribe from './Subscribe';
const Home = () => {

      return (
            <>
                  <div className='container-fluid'>
                        <Navebar />
                        <Subscribe />
                        <Contact />
                        <Footer/>
                  </div>
                  
            </>
      );
}

export default Home;