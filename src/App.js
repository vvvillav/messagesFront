
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Item from './item';

function App() {

  const [messages, setMessages] = useState([]);
  const [body, setBody] = useState("")

  useEffect(()=>{
    queryData()
  }, []);

  function queryData(){
    axios.get('http://localhost:3001/messages').then((response)=>{
      setMessages(response.data.messagesReceived);
    });
  }

  function send(text){
    if(body==''){
      alert("Por favor, ingresar texto.");
    }
    else{
      axios.post('http://localhost:3001/messages', {body: text}).then((response)=>{
        console.log(response.data)
        queryData()
        setBody('');
      });
    }
  }


  return (
    <div className="App">
       <div className="Message">
         <textarea type="text" placeholder="mensaje..." className="Text" value={body} onChange={(e)=>setBody(e.target.value)}>

         </textarea>
         <button className="Send" onClick={()=>send(body)}>
           ENVIAR
         </button>
       </div>
       <div className="List">
         {messages.map((item)=>{
           return <Item key={item.id} body={item.body} date={item.date.split("T")[0]}/>
         })}
       </div>
    </div>
  );
}

export default App;
