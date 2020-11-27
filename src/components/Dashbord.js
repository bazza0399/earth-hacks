import React,{ useState,useEffect } from 'react';
const Dashbord = ()=>{

    
    const [quantity,setQuantity]=useState("");
    const [type,settype]=useState("");
    const [contributions,setContributions]=useState([]);
    const [count,setCount]=useState(0);
    
    useEffect(() => {
      
      let contribution = {
         
        quantity : quantity,
        type : type,
    }
    
    setContributions([...contributions,contribution]);
    
    setQuantity("");
    settype("");
    
    }, [count]);
    const filtered = contributions.filter(element => element.type != "");
    

    return(
      <>
      <section className="page-top-section ">
    <div className="container">
      <h2>Welcome : here you can contribute you waste food </h2>
    </div>
  </section>
      <section className="contact-section spad">
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        
        
        
        <h1 id="formTitle2" />
        <h2 id="formTitle">Add waste food</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="contact-form" >
              
                
                <div className="col-md-12">
                 
                  <input type="text" placeholder="Quantity" onChange = {(e)=>{setQuantity(e.target.value);}} />
                  <input type="text" placeholder="Food type " onChange = {(e)=>{settype(e.target.value)}} />
                  
  
                
                  <button className="site-btn" onClick={(e)=>{e.preventDefault();setCount(count+1)}} > Add </button>
                </div>
              
            </form>
          </div>
    
      </div>
      
    
        </div>

        <div className="col-md-6">
      <h3>your contributions:</h3>
       <ul>
         {
           filtered.map(value =>  {return <> <li > <p>quantity:</p> {value.quantity}</li>  <li > <p>type:</p> {value.type}</li> </>})
         }
      {}
      </ul>
      </div>
  </div>
  </div>
  </section>
  </>
    )
}
export default Dashbord;