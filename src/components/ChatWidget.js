import React,{useState,useEffect} from 'react';
import '../chat.css';


const ChatWidget = () => {
    
    const [open,setOpen]=useState('close');
    /*useEffect(() => {
        document.getElementById("myForm").style.display = {open};
        console.log(open)
    }, [open])*/
    
  return (
    <div>
  <button className="open-button" onClick={()=> {setOpen('block');console.log(open)}}>Chat</button>
  <div className="chat-popup" id="myForm" >
    
      <h1>Chat</h1>
      <label htmlFor="msg"><b>Message</b></label>
      <textarea placeholder="Type message.." name="msg" required defaultValue={""} />
      <button type="submit" className="btn">Send</button>
      <button type="button" className="btn cancel" onClick={()=> setOpen('none')}>Close</button>
    
  </div>
</div>

  );
};
export default ChatWidget;