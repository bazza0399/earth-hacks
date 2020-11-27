import React from'react';
import '../gallery.css';
import action1 from '../img/action1.jpg';
import action2 from '../img/action2.jpg';
import action3 from '../img/action3.jpg';
import action4 from '../img/action4.jpg';
import action5 from '../img/action5.jpg';
import action6 from '../img/action6.jpg';
const Gallery = ()=>{
    return(
        <section>
<div className="container">
  <div className="row">
    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 className="gallery-title" style={{color:'#3e2184'}} >Actions gallery</h1>
    </div>
    
    <br />
    
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
      <img src={action1} className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
      <img src={action2} className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src={action3} className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
      <img src={action4} className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src={action5} className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
      <img src={action6} className="img-responsive" />
    </div>
    
  </div>
</div>
</section>



    )
}
export default Gallery