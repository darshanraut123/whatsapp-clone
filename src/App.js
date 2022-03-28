import './App.css';
import instance from './axios';
import Sidebar from './components/Sidebar';
import Chat from "./components/Chat"
import { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";

function App() {

  const [messages, setMessages] = useState([]);
  const [loginname, setloginName] = useState("");


  const currname = useRef();


  const handlesetName = () => {
    setloginName(currname.current.value);
  }

  useEffect(() => {

    instance.get("/api/messages/sync").then(res => setMessages(res.data)).catch(err => console.log(err))

    Pusher.logToConsole = true;
    var pusher = new Pusher('d9d7c2254368c190bf1f', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('my-channel');
    const func = (data) => {
      // alert(JSON.stringify(data));
      setMessages(prev => {
        // debugger;
        prev = [...prev, data];
        return prev;
      });
    }
    channel.bind('my-event', func);

    return () => {
      console.log("cleanup")
      channel.unbind('my-event', func);
    }
  }, []);

  return (
    <div className="App">
      {
        loginname ? (<div className="app__body">
          <Sidebar></Sidebar>
          <Chat loginname={loginname} messages={messages} >
          </Chat>
        </div>) :
          (<div id="myModal" className="modal">
            <div className="modal-container">
              <h2 className="textHead">Enter into the chatroom</h2>
              <input ref={currname} type="text" className="box textBox" placeholder='Enter your name here' />
              <button type="button" onClick={() => { handlesetName() }} className='box'>Submit</button>
            </div>
          </div>
          )
      }
    </div>
  );
}

export default App;
