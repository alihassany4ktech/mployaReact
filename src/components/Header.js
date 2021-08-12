import React from 'react';


const Header = () => {
      return (
            <>
                  <h1 className="text-center mainh">A Job That Matches With Your Passion</h1>
                  <p className='text-center'>We'll hepl you with the tools we've created to find the jobs you've been looking for</p>
                  <div className='row'>
                        <div className='col-md-12 d-flex justify-content-center mt-5' style={{marginBottom:'200px'}}>
                        <form action="">
                              <div className="row">
                              <div className="col-sm-5">
                              <div class="input-group mb-3 jobt">
                                    <span class="input-group-text"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control jobtitle" placeholder="Job Title" aria-label="Job Title" />
                                    </div>
                              </div>
                                          <div className="col-sm-5">
                                                <div class="input-group lo mb-3">
                                    <span class="input-group-text"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                              <input type="text" className="form-control location" placeholder="Location" aria-label="Location" />
                                    </div>
                                          </div>
                              <div className="col">
                              <button type="submit" className="btn searchbtn" style={{backgroundColor: '#067d1f', color:'white'}}>Search</button>
                              </div>
                              </div>
                              
                        </form>
                        </div>
                       
                  </div>
                 
            </>
      );
}

export default Header;