import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";


function App() {

  const [clientMessage, setClientMessage] = useState('')
  const [serverMessage, setServerMessage] = useState('')

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;


  const sendReceiveMessage = async () => {
    const url = `${urlEndpoint}/post-message`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clientMessage }),
      cache: 'default'
    })
    const responseJSON = await response.json()
    setServerMessage(responseJSON)

  }
  return (
    <div className="App">
      <header className="App-header">
        <div>hello</div>
        <Routes>
          <Route index element={<HomePage clientMessage={clientMessage} setClientMessage={setClientMessage} serverMessage={serverMessage} sendReceiveMessage={sendReceiveMessage} />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
