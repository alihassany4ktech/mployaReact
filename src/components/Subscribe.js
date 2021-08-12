import React from 'react';


const Subscribe = () => {

      return (
            <>
                  
                  <div className="container">
                        <div className="row justify-content-center srow">
                        
                        <div className="col-sm-8 mt-5 text-center mb-5 rounded" style={{backgroundColor:'#067d1f'}}>
                              <h1 style={{ color: 'white',marginTop:'80px' }}>Subscribe to our newsletter</h1>
                                    <p style={{ color: 'white' }}>Get notification about tips, new clothes and exclusive promo news just for you.</p>
                                
                                    <div className="row justify-content-center">
                                           <div className='col-sm-8 mb-5' style={{ backgroundColor: 'white',marginTop:'40px' }}>
                                          
                                                

                                                    <form action="">
                                          <div className="row">
                          
                                          <div className="col-sm-9 ">
                                                <div class="input-group p-3">
                                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                              <input type="email" className="form-control location" placeholder="Enter your email address" aria-label="Location" />
                                    </div>
                                          </div>
                              <div className="col">
                              <button type="submit" className="btn subscribebtn mt-3" style={{backgroundColor: '#067d1f', color:'white'}}>Subscribe</button>
                              </div>
                              </div>
                              
                        </form>

                                    </div>
                                    </div>
                                   
                            
                              
                   
                        </div>
                        
                        </div>
                  </div>
            </>
      );
}

export default Subscribe;