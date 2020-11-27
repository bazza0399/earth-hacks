import React from 'react';
import '../chatBot.css';
import img from '../img/ChatBot.png';
const ChatBot = ()=>{
    return(
        <React.Fragment>
       <div id="main" className="container">
  <div className="row">
    <div className=" col-md-6">
      <h3>if you need any help you can ask our chat bot anything you want </h3>
      <img src={img} alt style={{width: '180%'}} />
    </div>
    <div className="col-md-6">
      <iframe id="frame" className="b_frame" src="https://console.dialogflow.com/api-client/demo/embedded/bffd5ce3-8af5-40de-bb57-c3d166322b53">
      </iframe>
    </div>
  </div>
</div>
</React.Fragment>

    )
}
export default ChatBot;