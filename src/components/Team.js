import React from 'react';
import pop from '../img/pop.jpg';
import rock from '../img/rock.jpg';
import edm from '../img/edm.jpg';

const Team = ()=>{
    return(
        <div className="py-5 team3 bg-light animated . fadeIn." style={{marginTop : '1%'}}>
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-md-7 text-center">
        <h3 className="mb-3" style={{color:'#3e2184'}} >Our team</h3>
        
      </div>
    </div>
    <div className="row">
      {/* column  */}
      <div className="col-lg-4 mb-4">
        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <img src={rock} alt="wrapkit" className="img-fluid" />
          </div>
          <div className="col-md-12">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0" style={{textAlign: 'center'}}>Ahmed Bazza</h5>
              
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
      {/* column  */}
      {/* column  */}
      <div className="col-lg-4 mb-4">
        {/* Row */}
        <div className="row">
          <div className="col-md-12 pro-pic">
            <img src={pop} alt="wrapkit" className="img-fluid" />
          </div>
          <div className="col-md-12">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0" style={{textAlign: 'center'}}>Ridha mezrigui</h5>
              
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
      {/* column  */}
      {/* column  */}
      <div className="col-lg-4 mb-4">
        {/* Row */}
        <div className="row">
          <div className="col-md-12 pro-pic">
            <img src={edm} alt="wrapkit" className="img-fluid" />
          </div>
          <div className="col-md-12">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0" style={{textAlign: 'center'}} >Med Ayoub Ammar</h5>
              
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
      {/* column  */}
    </div>
  </div>
</div>

    )
}
export default Team;