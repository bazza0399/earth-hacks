import React from 'react';
const SignUp = ()=>{
    return(
        <div>
  <section className="page-top-section ">
    <div className="container">
      <h2>Sign up</h2>
    </div>
  </section>
  <section className="contact-section spad">
    <div className="container">
      <h1 id="formTitle2" />
      <h2 id="formTitle">create an account now!</h2>
      <div className="row">
        <div className="col-lg-12">
          <form className="contact-form" method="POST" >
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Your FirstName" name="FirstName" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Your LastName" name="LastName" />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="your email" name="Email" />
                <input type="password" placeholder="password" name="pwd" />
                <input type="password" placeholder="verify password" name="pwdRep" />
                <div class="row">
								
                          <div className="col-md-12">
                          <select name="duration">
                <option>Choose account type</option>
                <option value={1}>volunteer</option>
                <option value={2}>restaurent owner</option>
                
              </select>
                </div>
              </div>

              
                <button className="site-btn" type="submit" name="singUpSub"> Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}
export default SignUp;