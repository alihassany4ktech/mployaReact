import React from 'react';
import { NavLink } from "react-router-dom";


const Navebar = () => {
      return (
            <>
                  
                  {/* <div className='row rowbg'> */}
                              <nav className="navbar navbar-expand-lg  navbar-light bg-transparent">
                        <div className="container-fluid">
                        <img src="/mploya.jpeg" alt="Logo" width="60" height="50"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                              <NavLink activeClassName="active_menu" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                              </li>
                               <li className="nav-item">
                              <NavLink activeClassName="active_menu" exact  className="nav-link"  to="/jobs">Jobs</NavLink>
                              </li>
                              <li className="nav-item">
                              <NavLink activeClassName="active_menu" exact className="nav-link" to="/explore">Explore</NavLink>
                              </li>
                              <li className="nav-item">
                              <NavLink activeClassName="active_menu" exact className="nav-link"  to="/about">About</NavLink></li>
                              <li className="nav-item">
                              <NavLink activeClassName="active_menu" exact className="nav-link" to="/testimonial">Testimonials</NavLink>
                              </li>
                              </ul>
                                    <button className='btn' style={{ backgroundColor: '#067d1f', color:'white'}} >Sign In</button>
                                    <button className='btn' style={{marginLeft: '10px',backgroundColor: '#067d1f', color:'white'}}>Sign Up</button>
                        </div>
                        </div>
                        </nav>
                  {/* Header Componenet */}
                 
                        
                        {/* </div> */}
                      
                
            </>
      );
}

export default Navebar;