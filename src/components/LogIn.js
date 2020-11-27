import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const LogIn =()=>{
    const [link,setLink]=useState("/login");
    
    const[username,setUsername]=useState("");
    const [counter,setCounter]=useState(0);
    const[pwd,setPwd]=useState("");
    useEffect(() => {
      if (username == "admin"&& pwd =="admin") {
        setLink("/dashbord");
        
      }else{
        setLink("/login");
       
      }
      
      console.log(link);
    }, )
   
    return(
        <div>
  <section className="page-top-section ">
    <div className="container">
      <h2>log In</h2>
       
    </div>
  </section>
  <section className="contact-section spad">
    <div className="container">
      <h2 id="formTitle">LOG IN now!</h2>
      <div className="row">
        <div className="col-lg-12">
          <form className="contact-form"  method="POST">
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="usename" onChange={(e)=>{setUsername(e.target.value)}} />
                <input type="password" placeholder="password" onChange={(e)=>{setPwd(e.target.value)}} />
                
                <button className="site-btn" onClick={(e)=>{e.preventDefault();setCounter(counter+1)}}> <Link to={link} style={{ textDecoration: 'none',color:"white" }} >log in</Link> </button>
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
export default LogIn;